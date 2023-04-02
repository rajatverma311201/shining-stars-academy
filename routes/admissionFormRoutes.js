const express = require("express");
const admissionFormController = require("../controllers/admissionFormController");
const router = express.Router();

router
    .route("/")
    .get(admissionFormController.getAllForms)
    .post(admissionFormController.addOneForm);

router
    .route("/:id")
    .get(admissionFormController.getOneForm)
    .delete(admissionFormController.deleteOneForm);

module.exports = router;
