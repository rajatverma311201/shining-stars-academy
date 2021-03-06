const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const Admin = require("../models/adminModel");

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (admin, statusCode, res) => {
    const token = signToken(admin._id);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("jwt", token, cookieOptions);
    res.status(statusCode).json({
        status: "success",
    });
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    // 1) Check if email and password exist
    if (!username || !password) {
        return res.status(404).json({
            status: "fail",
            message: "Please provide email and password",
        });
    }
    // 2) Check if user exists && password is correct
    const admin = await Admin.findOne({ username }).select("+password");

    if (!admin || admin.password != password) {
        return res.status(404).json({
            status: "fail",
            message: "Incorrect Email or Password",
        });
    }

    // 3) If everything ok, send token to client
    // console.log(process.env.baseURL);
    createSendToken(admin, 200, res);
};

exports.protect = async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token = req.cookies.jwt;
    if (!token) {
        return res.redirect("/signin");
    }

    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await Admin.findById(decoded.id);
    if (!currentUser) {
        return res.redirect("/signin");
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    // req.locals.user = currentUser;
    next();
};
