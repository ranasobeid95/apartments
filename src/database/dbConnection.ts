import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.DB_CONNECTION || "";

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Enable TLS/SSL
  tlsAllowInvalidCertificates: false,
} as ConnectOptions;

mongoose
  .connect(dbURL, connectOptions)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const db = mongoose.connection;
export default db;
