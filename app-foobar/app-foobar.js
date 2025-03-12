import { Server } from "http";
import { test2 } from "../app/test.js";
const port = process.env.PORT || "5002";

async function init() {
  console.log(test2);
  // Server just to keep the process alive
  const server = new Server();
  server.listen(port);
  server.on("listening", () =>
    console.info("Server listening on port " + port)
  );
}

void init();
