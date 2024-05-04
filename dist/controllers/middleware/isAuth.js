"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoute = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const protectedRoute = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.cookies) {
        try {
            const { jwt } = req.cookies;
            const payload = (yield (0, jsonwebtoken_1.verify)(jwt, process.env.SECRET));
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
});
exports.protectedRoute = protectedRoute;
//# sourceMappingURL=isAuth.js.map