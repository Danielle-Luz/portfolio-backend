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

// src/middlewares/index.ts
var middlewares_exports = {};
__export(middlewares_exports, {
  DevelopmentExperiencesMiddlewares: () => DevelopmentExperiencesMiddlewares,
  ProjectsMiddlewares: () => ProjectsMiddlewares,
  TechnologiesMiddlewares: () => TechnologiesMiddlewares,
  UtilsMiddlewares: () => UtilsMiddlewares
});
module.exports = __toCommonJS(middlewares_exports);

// src/enums/ExperienceType.ts
var ExperienceType = /* @__PURE__ */ ((ExperienceType3) => {
  ExperienceType3["ACADEMIC"] = "Acad\xEAmica";
  ExperienceType3["COURSE"] = "Curso";
  ExperienceType3["VOLUNTEER"] = "Voluntariado";
  ExperienceType3["WORK"] = "Emprego";
  return ExperienceType3;
})(ExperienceType || {});

// src/enums/KnowledgeLevel.ts
var KnowledgeLevel = /* @__PURE__ */ ((KnowledgeLevel2) => {
  KnowledgeLevel2["BEGINNER"] = "Iniciante";
  KnowledgeLevel2["INTERMEDIATE"] = "Intermedi\xE1rio";
  KnowledgeLevel2["ADVANCED"] = "Avan\xE7ado";
  return KnowledgeLevel2;
})(KnowledgeLevel || {});

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

// src/schemas/technologies/index.ts
var import_zod3 = require("zod");
var stacks = Object.values(Stack);
var knowledgeLevels = Object.values(KnowledgeLevel);
var newTechnologySchema = import_zod3.z.object({
  name: import_zod3.z.string().max(40),
  stack: import_zod3.z.enum(stacks),
  knowledgeLevel: import_zod3.z.enum(knowledgeLevels).optional().default("Iniciante" /* BEGINNER */),
  iconUrl: import_zod3.z.string().url()
});
var updatedTechnologySchema = newTechnologySchema.partial();
var readTechnologySchema = newTechnologySchema.extend({
  id: import_zod3.z.number(),
  projects: import_zod3.z.array(readProjectSchema)
});

// src/schemas/projects/index.ts
var import_zod4 = require("zod");
var stacks2 = Object.values(Stack);
var newProjectSchema = import_zod4.z.object({
  name: import_zod4.z.string().max(20),
  description: import_zod4.z.string(),
  stack: import_zod4.z.enum(stacks2),
  coverImage: import_zod4.z.string().url(),
  url: import_zod4.z.string().url(),
  highlight: import_zod4.z.boolean().optional().default(false)
});
var updatedProjectSchema = newProjectSchema.partial();
var readProjectSchema = newProjectSchema.extend({
  id: import_zod4.z.number(),
  technologies: import_zod4.z.array(readTechnologySchema)
});

// src/schemas/developmentExperiences/index.ts
var import_zod5 = require("zod");
var experiencesType = Object.values(ExperienceType);
var newDevelopmentExperienceSchema = import_zod5.z.object({
  name: import_zod5.z.string().max(50),
  type: import_zod5.z.enum(experiencesType),
  company: import_zod5.z.string().max(50).optional().default("Empresa n\xE3o informada"),
  description: import_zod5.z.string(),
  startDate: import_zod5.z.string().datetime().optional(),
  endDate: import_zod5.z.string().datetime().optional()
});
var updatedDevelopmentExperienceSchema = newDevelopmentExperienceSchema.partial();
var readDevelopmentExperienceSchema = newDevelopmentExperienceSchema.extend({
  id: import_zod5.z.number()
});

// src/middlewares/developmentExperiences/index.ts
var _DevelopmentExperiencesMiddlewares = class _DevelopmentExperiencesMiddlewares {
  static validateNewDevelopmentExperience() {
    return UtilsMiddlewares.validateDataSchema(
      newDevelopmentExperienceSchema,
      _DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData
    );
  }
  static validateUpdatedDevelopmentExperience() {
    return UtilsMiddlewares.validateDataSchema(
      updatedDevelopmentExperienceSchema,
      _DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData
    );
  }
  static validateValueAsExperienceType() {
    const paramName = "type";
    return UtilsMiddlewares.validateValueAsEnum(paramName, ExperienceType);
  }
};
_DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData = "developmentExperience";
var DevelopmentExperiencesMiddlewares = _DevelopmentExperiencesMiddlewares;

// src/middlewares/projects/index.ts
var _ProjectsMiddlewares = class _ProjectsMiddlewares {
  static validateNewProject() {
    return UtilsMiddlewares.validateDataSchema(
      newProjectSchema,
      _ProjectsMiddlewares.propertyToStoreValidatedData
    );
  }
  static validateUpdatedProject() {
    return UtilsMiddlewares.validateDataSchema(
      updatedProjectSchema,
      _ProjectsMiddlewares.propertyToStoreValidatedData
    );
  }
};
_ProjectsMiddlewares.propertyToStoreValidatedData = "project";
var ProjectsMiddlewares = _ProjectsMiddlewares;

// src/middlewares/technologies/index.ts
var _TechnologiesMiddlewares = class _TechnologiesMiddlewares {
  static validateNewTechnology() {
    return UtilsMiddlewares.validateDataSchema(
      newTechnologySchema,
      _TechnologiesMiddlewares.propertyToStoreValidatedData
    );
  }
  static validateUpdatedTechnology() {
    return UtilsMiddlewares.validateDataSchema(
      updatedTechnologySchema,
      _TechnologiesMiddlewares.propertyToStoreValidatedData
    );
  }
};
_TechnologiesMiddlewares.propertyToStoreValidatedData = "technology";
var TechnologiesMiddlewares = _TechnologiesMiddlewares;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DevelopmentExperiencesMiddlewares,
  ProjectsMiddlewares,
  TechnologiesMiddlewares,
  UtilsMiddlewares
});
