const AdmissionForm = require("../models/admissionFormModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.addOneForm = catchAsync(async (req, res, next) => {
    const form = await AdmissionForm.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            form,
        },
    });
});
exports.getAllForms = catchAsync(async (req, res, next) => {
    const forms = await AdmissionForm.find();
    res.status(200).json({
        status: "success",
        results: forms.length,
        data: {
            forms,
        },
    });
});
exports.getOneForm = catchAsync(async (req, res, next) => {
    const form = await AdmissionForm.findById(req.params.id);
    if (!form) {
        return next(new AppError("No form found with that ID", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            form,
        },
    });
});

exports.deleteOneForm = catchAsync(async (req, res, next) => {
    const form = await AdmissionForm.findByIdAndDelete(req.params.id);
    if (!form) {
        return next(new AppError("No form found with that ID", 404));
    }
    const forms = await AdmissionForm.find();

    res.status(200).json({
        status: "success",
        data: { forms },
    });
});
