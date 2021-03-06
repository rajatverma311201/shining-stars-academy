const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    srNumber: {
        type: String,
        required: true,
    },
    name: { type: String, required: true },
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
    image: { type: String, default: "" },
    fee: {
        april: {
            receiptNumber: String,
            date: String,
            admission: {
                type: Number,
                default: 0,
            },
            transport: {
                type: Number,
                default: 0,
            },
            stationery: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            exam: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            development: {
                type: Number,
                default: 0,
            },
            computer: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        may: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        june: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        july: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        august: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        september: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        october: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        november: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        december: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        january: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        february: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
        march: {
            receiptNumber: String,
            date: String,
            transport: {
                type: Number,
                default: 0,
            },
            tution: {
                type: Number,
                default: 0,
            },
            balance: {
                type: Number,
                default: 0,
            },
            paid: { type: Number, default: 0 },
        },
    },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
