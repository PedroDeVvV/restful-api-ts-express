//ENV
require("dotenv").config();

import express from "express";
import config from "config";
//Database
import db from "../config/db";
//Logger (Winston)
import Logger from "../config/logger";
//Middlewares
import monganMiddleware from "./middlewares/morgan";
//routes
import router from "./router";

const app = express();
const port = config.get<number>("port");

//middlewares
app.use(express.json());
app.use(monganMiddleware);

//routes
app.use("/api/", router);

app.listen(port, async () => {
  await db();
  Logger.info(`Server is running on port ${port}`);
});
