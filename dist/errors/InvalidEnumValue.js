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

// src/errors/InvalidEnumValue.ts
var InvalidEnumValue_exports = {};
__export(InvalidEnumValue_exports, {
  InvalidEnumValue: () => InvalidEnumValue
});
module.exports = __toCommonJS(InvalidEnumValue_exports);

// src/errors/AppError.ts
var AppError = class extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InvalidEnumValue
});
