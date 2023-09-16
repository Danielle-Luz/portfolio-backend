"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data-source.ts
var data_source_exports = {};
__export(data_source_exports, {
  AppDataSource: () => AppDataSource
});
module.exports = __toCommonJS(data_source_exports);
var import_config = require("dotenv/config");
var import_path = __toESM(require("path"));
var import_reflect_metadata = require("reflect-metadata");
var import_typeorm = require("typeorm");
var dataSourceConfig = () => {
  const entitiesPath = import_path.default.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath = import_path.default.join(__dirname, "./migrations/**.{ts,js}");
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl)
    throw new Error("Missing env var: 'DATABASE_URL'");
  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath]
    };
  }
  return {
    type: "postgres",
    url: dbUrl,
    synchronize: true,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationPath]
  };
};
var AppDataSource = new import_typeorm.DataSource(dataSourceConfig());
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppDataSource
});
