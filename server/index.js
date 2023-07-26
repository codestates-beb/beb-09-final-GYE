import config from "./config/index.js";
import Logger from "./loaders/logger.js";
import express from "express";

import expressApp from "./loaders/index.js";

async function startServer() {
  const app = express();

  await expressApp(app);

  app
    .listen(config.port, () => {
      Logger.info(`
      ###################################################
       *** Server listening on port: ${config.port} ***
      ###################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
      console.log("err");
    });
}

startServer();
