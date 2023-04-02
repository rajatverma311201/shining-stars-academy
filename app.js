const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const admissionRouter = require("./routes/admissionFormRoutes");

app.use(cors());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admission-forms", admissionRouter);

module.exports = app;
