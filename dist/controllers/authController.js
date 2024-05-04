"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signUp = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_1 = __importDefault(require("../database/models/user")); // Import User model and IUser interface
const errorHandle_1 = require("./errorHandle");
const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds
const createToken = (id) => {
    return (0, jsonwebtoken_1.sign)({ id }, process.env.SECRET, { expiresIn: maxAge });
};
const signUp = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { _id } = await user_1.default.create({ email, password });
        const token = createToken(_id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // Convert maxAge to milliseconds
        });
        res.status(201).json({ status: 201, data: { userId: _id } });
    }
    catch (error) {
        const errors = (0, errorHandle_1.errorHandle)(error);
        res.status(400).json(errors);
    }
};
exports.signUp = signUp;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { _id } = await user_1.default.login(email, password);
        const token = createToken(_id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.json({ status: 200, data: { userId: _id } });
    }
    catch (error) {
        const errors = (0, errorHandle_1.errorHandle)(error);
        res.status(400).json({ errors });
    }
};
exports.login = login;
const logout = (req, res) => {
    res.clearCookie("jwt");
    res.json({ statusCode: 200, message: "Logout successfully" });
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map