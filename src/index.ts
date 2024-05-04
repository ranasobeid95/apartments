import http from "http";
import app from "./app";

const port: number = Number(process.env.PORT) || 8000; // Parse PORT environment variable as a number
const hostname: string = "0.0.0.0"; // Hostname to listen on (all network interfaces)

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
