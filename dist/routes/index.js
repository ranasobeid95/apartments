"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apartments_1 = __importDefault(require("./apartments"));
const router = express_1.default.Router();
// router.use(authRouter);
router.use("/apartments", apartments_1.default);
exports.default = () => {
    return router;
};
//# sourceMappingURL=index.js.map