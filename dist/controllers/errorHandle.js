"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.clientError = exports.errorHandle = void 0;
const errorHandle = (error) => {
    const errors = {};
    // Handle duplicate email error (MongoDB error code 11000)
    if (error.code === 11000) {
        errors.email = "That email is already registered";
        return errors;
    }
    // Handle incorrect email error
    if (error.message === "incorrect email") {
        errors.email = "That email is not registered";
    }
    // Handle incorrect password error
    if (error.message === "incorrect password") {
        errors.password = "That password is incorrect";
    }
    // Handle Mongoose validation errors
    if (error.message.includes("validation failed")) {
        if (error.errors) {
            Object.values(error.errors).forEach(({ properties }) => {
                errors[properties.path] = properties.message;
            });
        }
    }
    return errors;
};
exports.errorHandle = errorHandle;
const clientError = (req, res) => {
    res
        .status(404)
        .json({ StatusCode: "404", data: { message: "page not found 404" } });
};
exports.clientError = clientError;
const serverError = (err, req, res, next) => {
    console.error(err); // Log the error to console for debugging purposes
    res.status(500).json({
        StatusCode: "500",
        data: { message: "internal server error 500", err: `${err}` },
    });
};
exports.serverError = serverError;
//# sourceMappingURL=errorHandle.js.map