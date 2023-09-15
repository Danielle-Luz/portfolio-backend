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

// src/middlewares/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  UtilsMiddlewares: () => UtilsMiddlewares
});
module.exports = __toCommonJS(utils_exports);

// src/enums/Stack.ts
var Stack = /* @__PURE__ */ ((Stack2) => {
  Stack2["FRONTEND"] = "Front-end";
  Stack2["BACKEND"] = "Back-end";
  Stack2["FULLSTACK"] = "Full-stack";
  return Stack2;
})(Stack || {});

// src/errors/AppError.ts
var AppError = class extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
};

// src/errors/errorHandler.ts
var import_zod = require("zod");

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

// src/schemas/utils/index.ts
var import_zod2 = require("zod");
var idSchema = import_zod2.z.object({
  id: import_zod2.z.number()
});

// src/middlewares/utils/index.ts
var UtilsMiddlewares = class _UtilsMiddlewares {
  static validateDataSchema(schema, propertyToStoreValidatedData) {
    return (request, response, next) => {
      const validatedData = schema.parse(request.body);
      if (propertyToStoreValidatedData) {
        request[propertyToStoreValidatedData] = validatedData;
      }
      return next();
    };
  }
  static validateId(request, response, next) {
    const id = request.params.id;
    const integerRegex = /^\d+$/;
    const isInteger = integerRegex.test(id);
    if (!isInteger) {
      throw new InvalidIdError();
    }
    const idAsPositiveInteger = Math.abs(parseInt(id));
    request.recordId = idAsPositiveInteger;
    return next();
  }
  static validateBodyParameterId() {
    return _UtilsMiddlewares.validateDataSchema(idSchema);
  }
  static validateValueAsEnum(paramName, enumType) {
    return (request, response, next) => {
      const paramValue = request.params[paramName];
      const enumValues = Object.values(enumType);
      const isEnumValue = enumValues.includes(paramValue);
      if (!isEnumValue) {
        throw new InvalidEnumValue(paramName, enumValues);
      }
      return next();
    };
  }
  static validateValueAsStack() {
    const paramName = "stack";
    return _UtilsMiddlewares.validateValueAsEnum(paramName, Stack);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UtilsMiddlewares
});
