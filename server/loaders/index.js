import expressLoader from "./express.js";

import Logger from "./logger.js";

export default async (expressApp) => {

  await expressLoader(expressApp);
  Logger.info("✌️ Express loaded");
};
