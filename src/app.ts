import express, { Express } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import db from "./database/dbConnection";
import router from "./routes";
import { clientError, serverError } from "./controllers/errorHandle";

dotenv.config();

const app: Express = express();

// Apply middleware
app.use(
  cors({
    credentials: true, // Allow cookies to be sent cross-origin
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.disable("x-powered-by");
app.set("port", process.env.PORT || 8000);

// MongoDB connection
db.once("open", () => {
  console.log("MongoDB connected successfully");
}).on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.use("/api/v1", router());

// Error handling middleware
app.use(clientError);
app.use(serverError);

export default app;
