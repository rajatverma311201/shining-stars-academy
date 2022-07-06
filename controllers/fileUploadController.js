const sharp = require("sharp");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const drive = google.drive({
    version: "v3",
    auth: oauth2Client,
});

exports.resizeStudentImage = async (req, res, next) => {
    try {
        if (!req.file) return next();
        req.file.filename =
            new Date().toISOString().replace(/:/g, "-") +
            "_" +
            req.body.grade +
            "_" +
            ".jpeg";

        await sharp(req.file.buffer)
            .resize(150, 150)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile(`public/images/students/${req.file.filename}`);
        next();
    } catch (err) {
        console.log(err.message);
    }
};

exports.generateURL = async (req, res, next) => {
    try {
        const creation = await drive.permissions.create({
            fileId: req.file.fileId,
            requestBody: {
                role: "reader",
                type: "anyone",
            },
        });

        // get image link
        const result = await drive.files.get({
            fileId: req.file.fileId,
            fields: "thumbnailLink",
        });
        req.body.studentImage = result.data.thumbnailLink;
        next();
    } catch (err) {
        console.log(err.message);
    }
};

exports.uploadFile = async (req, res, next) => {
    try {
        const filePath = path.join(
            __dirname,
            `../public/images/students/${req.file.filename}`
        );
        const uploadResponse = await drive.files.create({
            requestBody: {
                name: req.file.filename,
                mimetype: "image/jpeg",
            },
            media: {
                mimetype: "image/jpeg",
                body: fs.createReadStream(filePath),
            },
        });
        req.file.fileId = uploadResponse.data.id;

        next();
    } catch (err) {
        console.log(err.message);
    }
};
