import { initCommonApp } from "../init/init-common.js";
const port = process.env.PORT || "5002";

async function init() {
  await initCommonApp(port);
}

void init();
