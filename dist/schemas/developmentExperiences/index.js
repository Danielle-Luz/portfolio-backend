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

// src/schemas/developmentExperiences/index.ts
var developmentExperiences_exports = {};
__export(developmentExperiences_exports, {
  newDevelopmentExperienceSchema: () => newDevelopmentExperienceSchema,
  readDevelopmentExperienceSchema: () => readDevelopmentExperienceSchema,
  updatedDevelopmentExperienceSchema: () => updatedDevelopmentExperienceSchema
});
module.exports = __toCommonJS(developmentExperiences_exports);
var import_zod = require("zod");

// src/enums/ExperienceType.ts
var ExperienceType = /* @__PURE__ */ ((ExperienceType2) => {
  ExperienceType2["ACADEMIC"] = "Acad\xEAmica";
  ExperienceType2["COURSE"] = "Curso";
  ExperienceType2["VOLUNTEER"] = "Voluntariado";
  ExperienceType2["WORK"] = "Emprego";
  return ExperienceType2;
})(ExperienceType || {});

// src/schemas/developmentExperiences/index.ts
var experiencesType = Object.values(ExperienceType);
var newDevelopmentExperienceSchema = import_zod.z.object({
  name: import_zod.z.string().max(50),
  type: import_zod.z.enum(experiencesType),
  company: import_zod.z.string().max(50).optional().default("Empresa n\xE3o informada"),
  description: import_zod.z.string(),
  startDate: import_zod.z.string().datetime().optional(),
  endDate: import_zod.z.string().datetime().optional()
});
var updatedDevelopmentExperienceSchema = newDevelopmentExperienceSchema.partial();
var readDevelopmentExperienceSchema = newDevelopmentExperienceSchema.extend({
  id: import_zod.z.number()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  newDevelopmentExperienceSchema,
  readDevelopmentExperienceSchema,
  updatedDevelopmentExperienceSchema
});
