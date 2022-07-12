const fs = require("fs");
const Student = require("../models/studentModel");

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

exports.home = (req, res) => {
    res.status(200).render("home");
};
exports.signInForm = (req, res) => {
    res.status(200).render("signIn");
};
exports.addStudentForm = (req, res) => {
    res.status(200).render("studentForm");
};
exports.addStudent = async (req, res) => {
    // res.status(200).render("studentForm");
    // req.body.image = req.body.studentImage;
    req.body.image = `https://drive.google.com/uc?id=${req.file.fileId}`;

    const allStudents = await Student.find();
    const num = allStudents.length;
    req.body.srNumber = `${num + 1}/${new Date().getFullYear()}`;
    req.body.admissionYear = new Date().getFullYear();
    const student = await Student.create(req.body);

    setTimeout(() => {
        if (`public/images/students/${req.file.filename}`)
            fs.unlink(`public/images/students/${req.file.filename}`, (err) => {
                if (err) console.log(err);
            });
    }, 1 * 60 * 1000);
    res.redirect(`/student/${student._id}`);
};

exports.updateStudentForm = async (req, res, next) => {
    const student = await Student.findById(req.params.id);

    res.status(200).render("studentUpdateForm", { student });
};

exports.updateStudent = async (req, res, next) => {
    const id = req.params.id;
    // req.body.image = req.body.studentImage;
    req.body.image = `https://drive.google.com/uc?id=${req.file.fileId}`;

    const student = await Student.findByIdAndUpdate(id, req.body);
    setTimeout(() => {
        if (`public/images/students/${req.file.filename}`)
            fs.unlink(`public/images/students/${req.file.filename}`, (err) => {
                if (err) console.log(err);
            });
    }, 1 * 60 * 1000);
    res.redirect(`/student/${id}`);
};

exports.viewStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);

    const studentFee = student["fee"];
    res.status(200).render("studentDetail", {
        student,
        studentFee,
        months: months.slice(1),
    });
};

exports.studentFeeUpdateForm = async (req, res) => {
    const student = await Student.findById(req.params.id);
    const studentFee = student["fee"];
    res.status(200).render("feeUpdate", {
        student,
        studentFee,
        months: months.slice(1),
    });
};

exports.studentFeeUpdate = async (req, res) => {
    let data = {};

    data["april"] = {
        receiptNumber: req.body.receiptNumber[0],
        date: req.body.date[0],
        paid: Number(req.body.paid[0]),
        admission: Number(req.body.admission),
        stationery: Number(req.body.stationery),
        transport: Number(req.body.transport[0]),
        tution: Number(req.body.tution[0]),
        exam: Number(req.body.exam),
        computer: Number(req.body.computer),
        development: Number(req.body.development),
        balance:
            Number(req.body.admission) +
            Number(req.body.stationery) +
            Number(req.body.transport[0]) +
            Number(req.body.tution[0]) +
            Number(req.body.exam) +
            Number(req.body.computer) +
            Number(req.body.development) -
            Number(req.body.paid[0]),
    };

    for (let i = 1; i < 12; i++) {
        data[months[i].toLowerCase()] = {
            receiptNumber: req.body.receiptNumber[i],
            date: req.body.date[i],
            paid: Number(req.body.paid[i]),
            tution: Number(req.body.tution[i]),
            transport: Number(req.body.transport[i]),
            balance:
                Number(req.body.tution[i]) +
                Number(req.body.transport[i]) -
                Number(req.body.paid[i]),
        };
    }
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
        fee: data,
    });
    res.redirect(`/student/${req.params.id}`);
};

exports.viewGrades = async (req, res) => {
    let numberOfStudents = [];
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        const obj = {};
        const girlsList = await Student.find({
            grade: grade.toLowerCase(),
            gender: "Female",
        });
        const boysList = await Student.find({
            grade: grade.toLowerCase(),
            gender: "Male",
        });

        obj["grade"] = grade;
        obj["girls"] = girlsList.length;
        obj["boys"] = boysList.length;
        numberOfStudents.push(obj);
    }
    const context = {
        title: "Shining Stars Academy",
        grades,
        numberOfStudents,
    };
    res.status(200).render("index", context);
};

exports.viewGradeStudents = async (req, res) => {
    const grade = req.params.grade;
    const students = await Student.find({ grade });

    res.status(200).render("grade", { students, grade });
};
