const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    grade: String,

    admission: Number,
    computer: Number,
    tution: Number,
    development: Number,
    exam: Number,
    stationery: Number,
    development: Number,
    transport: Number,
});

const Fee = mongoose.model("Fee", feeSchema);

module.exports = Fee;
