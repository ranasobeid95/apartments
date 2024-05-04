import http from "http";
import app from "./app";
const port = 8000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server listening on http://localhost:${app.get("port")}`);
});
