"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnection_1 = __importDefault(require("./database/dbConnection"));
const routes_1 = __importDefault(require("./routes"));
const errorHandle_1 = require("./controllers/errorHandle");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Apply middleware
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true, // Allow cookies to be sent cross-origin
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.disable("x-powered-by");
app.set("port", process.env.PORT || 8000);
// MongoDB connection
dbConnection_1.default.once("open", () => {
    console.log("MongoDB connected successfully");
}).on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
// Routes
app.use("/api/v1", (0, routes_1.default)());
// Error handling middleware
app.use(errorHandle_1.clientError);
app.use(errorHandle_1.serverError);
exports.default = app;
//# sourceMappingURL=app.js.map