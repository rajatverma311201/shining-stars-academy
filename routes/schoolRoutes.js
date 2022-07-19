const express = require("express");
const authController = require("./../controllers/authController");
const viewController = require("./../controllers/viewController");
const fileUploadController = require("./../controllers/fileUploadController");

const router = express.Router();

// router.post("/signup", authController.signup);
// router.post("/", authController.login);

// Protect all routes after this middleware

router.get("/", viewController.home);
router
    .get("/signin", viewController.signInForm)
    .post("/signin", authController.login);

router.use(authController.protect);
router.get("/grades", viewController.viewGrades);
router.get("/grade/:grade", viewController.viewGradeStudents);
router.get("/student/:id", viewController.viewStudent);
router
    .get("/studentForm", viewController.addStudentForm)
    .post("/studentForm", viewController.addStudent);

router.get("/student/update/:id", viewController.updateStudentForm).post(
    "/student/update/:id",

    viewController.updateStudent
);

router
    .get("/student/feeUpdate/:id", viewController.studentFeeUpdateForm)
    .post("/student/feeUpdate/:id", viewController.studentFeeUpdate);

// student image

router
    .get("/uploadstudentimage/:id", fileUploadController.uploadStudentImageForm)
    .post(
        "/uploadstudentimage/:id",
        fileUploadController.resizeStudentImage,
        fileUploadController.uploadFile,
        fileUploadController.generateURL,
        fileUploadController.uploadStudentImage
    );

module.exports = router;
