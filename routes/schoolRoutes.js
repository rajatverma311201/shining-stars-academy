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
    .post(
        "/studentForm",
        fileUploadController.resizeStudentImage,
        fileUploadController.uploadFile,
        fileUploadController.generateURL,
        viewController.addStudent
    );

router
    .get("/student/update/:id", viewController.updateStudentForm)
    .post(
        "/student/update/:id",
        fileUploadController.resizeStudentImage,
        fileUploadController.uploadFile,
        fileUploadController.generateURL,
        viewController.updateStudent
    );
router
    .get("/updateGradeFee/:grade", viewController.updateGradeFeeForm)
    .post("/updateGradeFee/:grade", viewController.updateGradeFee);

router
    .get("/student/feeUpdate/:id", viewController.studentFeeUpdateForm)
    .post("/student/feeUpdate/:id", viewController.studentFeeUpdate);

// router
//     .get("/signin", viewController.signInForm)
//     .post("/signin", viewController.signIn);

module.exports = router;
