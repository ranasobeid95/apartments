"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoute = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const protectedRoute = async (req, res, next) => {
    if (req.cookies) {
        try {
            const { jwt } = req.cookies;
            const payload = (await (0, jsonwebtoken_1.verify)(jwt, process.env.SECRET));
            req.user = payload;
            next();
        }
        catch (error) {
            const err = error;
            res.status(401).json({ status: 401, message: "Unauthorized" });
        }
    }
    else {
        res.status(401).json({ statusCode: 401, message: "Sign-in first" });
    }
};
exports.protectedRoute = protectedRoute;
//# sourceMappingURL=isAuth.js.map