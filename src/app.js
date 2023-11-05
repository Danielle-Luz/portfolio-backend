"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const errors_1 = require("./errors");
const routers_1 = require("./routers");
const cors = require('cors');
const express = require("express");
const app = express();
exports.app = app;
app.use(cors());
app.use(express.json());
app.use("/technologies", routers_1.technologyRouter);
app.use("/projects", routers_1.projectRouter);
app.use("/developmentExperiences", routers_1.developmentExperienceRouter);
app.use(errors_1.errorHandler);
module.exports = app;