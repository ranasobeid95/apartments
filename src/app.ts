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

const allowedOrigins: string[] = [
  "http://localhost:3000",
  "https://apartments-ga5r.vercel.app",
];

// Configure CORS middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin!)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials like cookies to be included
  })
);
// Apply middleware

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
