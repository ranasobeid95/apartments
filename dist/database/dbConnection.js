"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbURL = process.env.DB_CONNECTION || "";
const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Enable TLS/SSL
    tlsAllowInvalidCertificates: false,
};
mongoose_1.default
    .connect(dbURL, connectOptions)
    .then(() => {
    console.log("MongoDB connected successfully");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
const db = mongoose_1.default.connection;
exports.default = db;
//# sourceMappingURL=dbConnection.js.map