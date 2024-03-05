import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Connection successfuly");
  } catch (e) {
    Logger.error(`Connection database error: ${e}`);
    process.exit(1);
  }
}

export default connect;
