const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");

const compression = require("compression");
const schoolRouter = require("./routes/schoolRoutes");
const cookieParser = require("cookie-parser");
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(process.env);

    // console.log(req.cookies);

    next();
});
// app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

const fileStorage = multer.memoryStorage();

app.use(multer({ storage: fileStorage }).single("image"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Serving static files
app.use(express.static(`${__dirname}/public`));

app.use("/", schoolRouter);

app.get("/testupload", (req, res) => {
    res.status(200).render("testUpload");
});
app.post("/testupload", (req, res) => {
    console.log(req.file);
    res.status(200).send(req.file);

});

module.exports = app;
