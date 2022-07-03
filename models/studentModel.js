const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    srNumber: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    admissionYear: {
        type: Number,
    },
    grade: {
        type: String,
        required: true,
    },

    aadharNumber: {
        type: Number,
    },
    fatherName: {
        type: String,
    },
    motherName: {
        type: String,
    },
    address: {
        type: String,
    },
    contact: {
        type: Number,
    },
    alternateContact: {
        type: Number,
    },
    image: { type: String, required: true },
    fee: {
        april: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        may: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        june: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        july: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        august: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        september: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        october: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        november: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        december: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        january: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        february: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
        march: {
            receiptNumber: String,
            date: String,
            paid: { type: Number, default: 0 },
        },
    },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
