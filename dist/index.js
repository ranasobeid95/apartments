"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const port = Number(process.env.PORT) || 8000; // Parse PORT environment variable as a number
const hostname = "0.0.0.0"; // Hostname to listen on (all network interfaces)
const server = http_1.default.createServer(app_1.default);
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
//# sourceMappingURL=index.js.map