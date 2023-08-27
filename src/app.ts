import "express-async-errors";
import { errorHandler } from "./errors";
import { technologyRouter } from "./routers/technologies";

const express = require("express");
const app = express();

app.use(express.json());


app.use(errorHandler);

export { app };
