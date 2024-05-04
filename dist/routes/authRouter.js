"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("controllers/authController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/signup", authController_1.signUp);
router.post("/login", authController_1.login);
router.post("/logout", authController_1.logout);
exports.default = router;
//# sourceMappingURL=authRouter.js.map