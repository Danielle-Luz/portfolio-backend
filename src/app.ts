import "express-async-errors";
import { errorHandler } from "./errors";
import {
  developmentExperienceRouter,
  projectRouter,
  technologyRouter,
} from "./routers";

const express = require("express");
const app = express();

app.use(express.json());

app.use("/technologies", technologyRouter);
app.use("/projects", projectRouter);
app.use("/developmentExperiences", developmentExperienceRouter);

app.use(errorHandler);

export { app };
