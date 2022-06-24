const mongoose = require("mongoose");

// const feeStructure = {
//     receiptNumber: String,
//     date: String,
//     tutionFee: Number,
//     developmentFee: Number,
//     examFee: Number,
//     transportFee: Number,
//     total: Number,
//     paid: Number,
//     balance: Number,
// };
// const feeSchema = new mongoose.Schema({
//     admissionFee: {
//         type: Number,
//         required: true,
//     },
//     april: { feeStructure },
//     may: { feeStructure },
//     june: { feeStructure },
//     july: { feeStructure },
//     august: { feeStructure },
//     september: { feeStructure },
//     october: { feeStructure },
//     november: { feeStructure },
//     december: { feeStructure },
//     january: { feeStructure },
//     february: { feeStructure },
//     march: { feeStructure },
//     student:{
//         type: mongoose.Schema.ObjectId,
//         ref: 'Student',
//         required: [true, 'Review must belong to a user']
//     }
// });

const feeSchema = new mongoose.Schema({
    admission: Number,
    computer: Number,
    grade: String,
    tution: Number,
    development: Number,
    exam: Number,
    transport: Number,
    total: Number,
});

const Fee = mongoose.model("Fee", feeSchema);

module.exports = Fee;
