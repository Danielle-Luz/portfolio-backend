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

// src/errors/RecordAlreadyExists.ts
var RecordAlreadyExists_exports = {};
__export(RecordAlreadyExists_exports, {
  RecordAlreadyExists: () => RecordAlreadyExists
});
module.exports = __toCommonJS(RecordAlreadyExists_exports);

// src/errors/AppError.ts
var AppError = class extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
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
  RecordAlreadyExists
});
