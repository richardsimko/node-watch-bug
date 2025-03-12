import { Server } from "http";
import { Test } from "../app/test.js";

export async function initCommonApp(port) {
  const test = new Test();
  console.log(test);
  const server = new Server();
  server.listen(port);
  server.on("listening", () =>
    console.info("Server listening on port " + port)
  );
  return server;
}
