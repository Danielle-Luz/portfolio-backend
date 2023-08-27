import "express-async-errors";
import { errorHandler } from "./errors";

const express = require("express");
const app = express();

app.use(express.json());

app.use(errorHandler);

export { app };
