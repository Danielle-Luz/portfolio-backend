"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/errors/index.ts
var errors_exports = {};
__export(errors_exports, {
  AppError: () => AppError,
  InvalidEnumValue: () => InvalidEnumValue,
  InvalidIdError: () => InvalidIdError,
  RecordAlreadyExists: () => RecordAlreadyExists,
  RecordNotFoundError: () => RecordNotFoundError,
  errorHandler: () => errorHandler
});
module.exports = __toCommonJS(errors_exports);

// src/errors/AppError.ts
var AppError = class extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
};

// src/errors/errorHandler.ts
var import_zod = require("zod");
function errorHandler(error, request, response, next) {
  let statusCode = 500;
  let errorMessage = { message: error.message };
  if (error instanceof AppError) {
    statusCode = error.statusCode;
  } else if (error instanceof import_zod.ZodError) {
    statusCode = 400;
    errorMessage = error.flatten().fieldErrors;
  }
  return response.status(statusCode).json(errorMessage);
}

// src/errors/InvalidIdError.ts
var InvalidIdError = class extends AppError {
  constructor() {
    const message = "The id should be a integer number";
    const status = 400;
    super(message, status);
  }
};

// src/errors/InvalidEnumValue.ts
var InvalidEnumValue = class extends AppError {
  constructor(enumField, validValues) {
    const message = `The param ${enumField} should have one of these values: ${validValues}`;
    const status = 400;
    super(message, status);
  }
};

// src/errors/RecordNotFoundError.ts
var RecordNotFoundError = class extends AppError {
  constructor(recordType, id) {
    const message = `Couldn't find any record of type ${recordType} with id ${id}`;
    const status = 404;
    super(message, status);
  }
};

// src/errors/RecordAlreadyExists.ts
var RecordAlreadyExists = class extends AppError {
  constructor(message) {
    const status = 409;
    super(message, status);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppError,
  InvalidEnumValue,
  InvalidIdError,
  RecordAlreadyExists,
  RecordNotFoundError,
  errorHandler
});
