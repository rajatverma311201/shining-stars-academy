const mongoose = require("mongoose");

const admissionFormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },

        imageSrc: {
            type: String,
        },

        gender: {
            type: String,
        },

        dob: {
            type: String,
        },

        fatherName: {
            type: String,
        },

        motherName: {
            type: String,
        },

        fatherOccupation: {
            type: String,
        },

        fatherQualification: {
            type: String,
        },

        motherOccupation: {
            type: String,
        },

        motherQualification: {
            type: String,
        },

        address: {
            type: String,
        },

        language: {
            type: String,
        },

        religion: {
            type: String,
        },

        category: {
            type: String,
        },

        nationality: {
            type: String,
        },

        admissionClass: {
            type: String,
        },

        aadhaarNumber: {
            type: String,
        },

        srNumber: {
            type: String,
        },

        inabilities: {
            type: String,
        },

        admissionDate: {
            type: String,
        },

        receiptNumber: {
            type: String,
        },
    },
    { timestamps: true }
);

const AdmissionForm = mongoose.model("AdmissionForm", admissionFormSchema);

module.exports = AdmissionForm;
