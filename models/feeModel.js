const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    grade: { type: String, default: 0 },
    computer: { type: Number, default: 0 },
    tution: { type: Number, default: 0 },
    development: { type: Number, default: 0 },
    exam: { type: Number, default: 0 },
    stationery: { type: Number, default: 0 },
});

const Fee = mongoose.model("Fee", feeSchema);

module.exports = Fee;
