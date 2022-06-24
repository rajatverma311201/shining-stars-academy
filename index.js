const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const Student = require("./models/studentModel");
const Fee = require("./models/feeModel");
app.use(bodyParser.json());
// app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/images`);
    },
    filename: (req, file, cb) => {
        let ext = file.mimetype.split("/");
        ext = "." + ext[1];
        console.log(ext);
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") +
                "_" +
                req.body.grade +
                "_" +
                req.body.rollNumber +
                ext
            // file.originalname.replace(/:/g, "-")
        );
    },
});
// { storage: fileStorage }
app.use(multer({ storage: fileStorage }).single("image"));
// app.use(multer({ dest: "public/images" }).single("image"));
// setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Serving static files
app.use(express.static(`${__dirname}/public`));

const months = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
];

app.get("/", async (req, res) => {
    const grades = [
        "NUR",
        "LKG",
        "UKG",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
    ];
    let numberOfStudents = [];
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        const obj = {};
        // console.log(grade);
        const girlsList = await Student.find({
            grade: grade.toLowerCase(),
            gender: "Female",
        });
        const boysList = await Student.find({
            grade: grade.toLowerCase(),
            gender: "Male",
        });
        // const girls = girlsList.length;
        // const boys = boysList.length;
        obj["grade"] = grade;
        obj["girls"] = girlsList.length;
        obj["boys"] = boysList.length;
        // console.log(obj);
        numberOfStudents.push(obj);
    }
    // console.log(numberOfStudents);
    const context = {
        title: "Shining Stars Academy",
        grades,
        numberOfStudents,
    };
    res.status(200).render("index", context);
});

app.get("/grade/:grade", async (req, res) => {
    const grade = req.params.grade;
    const students = await Student.find({ grade });
    console.log(students);

    res.status(200).render("grade", { students, grade });
});

app.get("/studentForm", (req, res) => {
    res.status(200).render("studentForm");
});

app.get("/studentForm", (req, res) => {
    res.status(200).render("studentForm");
});
app.post("/studentForm", async (req, res) => {
    // console.log(req.body);
    // res.status(200).render("studentForm");
    console.log(req.body);
    const student = await Student.create(req.body);
    res.status(200).send(student);
});

app.get("/student/updateFee", (req, res) => {
    const months = [
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
    ];

    const feeStructure = {
        receiptNumber: "XA1243",
        date: "2022-06-15",
        tutionFee: 275,
        developmentFee: 100,
        examFee: 100,
        transportFee: 125,
        total: 600,
        paid: 250,
        // balance: Number,
    };
    const studentFee = {
        april: feeStructure,
        may: feeStructure,
        june: feeStructure,
        july: feeStructure,
        august: feeStructure,
        september: feeStructure,
        october: feeStructure,
        november: feeStructure,
        december: feeStructure,
        january: feeStructure,
        february: feeStructure,
        march: feeStructure,
    };
    console.log(feeStructure);
    console.log(studentFee);
    // console.log(studentFee["January"]["receiptNumber"]);

    res.status(200).render("feeBook", { months, studentFee });
});
app.get("/test", (req, res) => {
    const months = [
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
    ];
    res.status(200).render("test", { months });
});
app.post("/test", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
});

app.get("/updateGradeFee", (req, res) => {
    res.status(200).render("updateGradeFee");
});

app.post("/updateGradeFee", async (req, res) => {
    console.log(req.body);
    const { tution, development, exam, transport } = req.body;
    const total = tution * 1 + development * 1 + exam * 1 + transport * 1;
    const newFee = await Fee.create({
        tution,
        development,
        exam,
        transport,
        total,
    });
    res.status(200).send(newFee);
});
module.exports = app;

app.get("/student/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    const months = [
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
    ];
    // const student = await Student.findById(req.params.id);

    console.log(student);
    const studentFee = student["fee"];
    const grade = student["grade"];
    const gradeFee = await Fee.findOne({ grade: grade });
    console.log(gradeFee);
    res.status(200).render("studentDetail", {
        student,
        studentFee,
        gradeFee,
        months,
    });
});

app.get("/student/feeUpdate/:id", async (req, res) => {
    const months = [
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
    ];
    const student = await Student.findById(req.params.id);

    console.log(student);
    const studentFee = student["fee"];
    const grade = student["grade"];
    const gradeFee = await Fee.findOne({ grade: grade });
    console.log(gradeFee);
    res.status(200).render("feeUpdate", {
        student,
        studentFee,
        gradeFee,
        months,
    });
});

app.post("/student/feeUpdate/:id", async (req, res) => {
    let data = {};

    for (let i = 0; i < 12; i++) {
        data[months[i].toLowerCase()] = {
            receiptNumber: req.body.receiptNumber[i],
            date: req.body.date[i],
            paid: Number(req.body.paid[i]),
        };
    }
    // data = JSON.stringify(data);
    console.log({ fee: data });
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
        fee: data,
    });
    res.status(200).send(updatedStudent);
});
app.get("/takeImage", (req, res) => {
    res.status(200).render("takeImage");
});
app.post("/takeImage", (req, res) => {
    console.log(req.file);
    res.status(200).send("done");
});
