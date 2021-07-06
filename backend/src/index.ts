import express from "express";
import { creatServer } from "http";
import dotenv from "dotenv";

import "./core/db";
import createRoutes from "./core/routes";
import createSocket from "./core/socket";

const app = express();
const http = creatServer(app);
const io = createSocket(http);

dotenv.config();

createRoutes(app, io);
createSocket(io);

http.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
