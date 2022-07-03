const sharp = require("sharp");

const Student = require("../models/studentModel");
const Fee = require("../models/feeModel");
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

// exports.signIn = (req, res) => {
//     res.send(req.body);
// };

exports.addStudentForm = (req, res) => {
    res.status(200).render("studentForm");
};
exports.addStudent = async (req, res) => {
    // res.status(200).render("studentForm");
    req.body.image = req.file.filename;
    const allStudents = await Student.find();
    const num = allStudents.length;
    req.body.srNumber = `${num + 1}/${new Date().getFullYear()}`;
    req.body.admissionYear = new Date().getFullYear();
    const student = await Student.create(req.body);
    res.redirect(`/student/${student._id}`);
    // res.status(200).send(student);
};

exports.resizeStudentImage = (req, res, next) => {
    if (!req.file) return next();
    req.file.filename =
        new Date().toISOString().replace(/:/g, "-") +
        "_" +
        req.body.grade +
        "_" +
        req.requestTime +
        ".jpeg";

    sharp(req.file.buffer)
        .resize(150, 150)
        .toFormat("jpeg")
        .jpeg({ quality: 95 })
        .toFile(`public/images/students/${req.file.filename}`);
    next();
};

exports.viewStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);

    const studentFee = student["fee"];
    const grade = student["grade"];
    const gradeFee = await Fee.findOne({ grade: grade });
    res.status(200).render("studentDetail", {
        student,
        studentFee,
        gradeFee,
        months: months.slice(1),
    });
};

exports.studentFeeUpdateForm = async (req, res) => {
    const student = await Student.findById(req.params.id);
    const studentFee = student["fee"];
    const grade = student["grade"];
    const gradeFee = await Fee.findOne({ grade: grade });
    res.status(200).render("feeUpdate", {
        student,
        studentFee,
        gradeFee,
        months: months.slice(1),
    });
};

exports.studentFeeUpdate = async (req, res) => {
    let data = {};
    for (let i = 0; i < 12; i++) {
        data[months[i].toLowerCase()] = {
            receiptNumber: req.body.receiptNumber[i],
            date: req.body.date[i],
            paid: Number(req.body.paid[i]),
        };
    }
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
        fee: data,
    });
    // res.status(200).send(updatedStudent);
    res.redirect(`/student/${req.params.id}`);
};

// ***** GRADE FEE CONTROLLERS *****

exports.updateGradeFeeForm = (req, res) => {
    const grade = req.params.grade;
    const gradeFee = Fee.findOne({ grade });
    res.status(200).render("updateGradeFee", { grade });
};

exports.updateGradeFee = async (req, res) => {
    const grade = req.params.grade;
    const { tution, development, exam, transport } = req.body;
    await Fee.findOneAndDelete({ grade });
    const newFee = await Fee.create({
        grade,
        tution,
        development,
        exam,
        transport,
    });
    res.status(200).send(newFee);
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
        // const girls = girlsList.length;
        // const boys = boysList.length;
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
