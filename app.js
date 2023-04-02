const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const admissionRouter = require("./routes/admissionFormRoutes");
const globalErrorHandler = require("./middlewares/globalErrorHandlingMiddleware");
const path = require("path");
app.use(cors());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.static(path.join(__dirname, "client/dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admission-forms", admissionRouter);
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.use("*", (req, res, next) => {
    res.status(500).json({
        status: "fail",
        message: "route not defined",
    });
});

app.use(globalErrorHandler);

module.exports = app;
