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

// src/schemas/technologies/index.ts
var technologies_exports = {};
__export(technologies_exports, {
  newTechnologySchema: () => newTechnologySchema,
  readTechnologySchema: () => readTechnologySchema,
  updatedTechnologySchema: () => updatedTechnologySchema
});
module.exports = __toCommonJS(technologies_exports);
var import_zod3 = require("zod");

// src/enums/ExperienceType.ts
var ExperienceType = /* @__PURE__ */ ((ExperienceType2) => {
  ExperienceType2["ACADEMIC"] = "Acad\xEAmica";
  ExperienceType2["COURSE"] = "Curso";
  ExperienceType2["VOLUNTEER"] = "Voluntariado";
  ExperienceType2["WORK"] = "Emprego";
  return ExperienceType2;
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

// src/schemas/projects/index.ts
var import_zod = require("zod");
var stacks = Object.values(Stack);
var newProjectSchema = import_zod.z.object({
  name: import_zod.z.string().max(20),
  description: import_zod.z.string(),
  stack: import_zod.z.enum(stacks),
  coverImage: import_zod.z.string().url(),
  url: import_zod.z.string().url(),
  highlight: import_zod.z.boolean().optional().default(false)
});
var updatedProjectSchema = newProjectSchema.partial();
var readProjectSchema = newProjectSchema.extend({
  id: import_zod.z.number(),
  technologies: import_zod.z.array(readTechnologySchema)
});

// src/schemas/developmentExperiences/index.ts
var import_zod2 = require("zod");
var experiencesType = Object.values(ExperienceType);
var newDevelopmentExperienceSchema = import_zod2.z.object({
  name: import_zod2.z.string().max(50),
  type: import_zod2.z.enum(experiencesType),
  company: import_zod2.z.string().max(50).optional().default("Empresa n\xE3o informada"),
  description: import_zod2.z.string(),
  startDate: import_zod2.z.string().datetime().optional(),
  endDate: import_zod2.z.string().datetime().optional()
});
var updatedDevelopmentExperienceSchema = newDevelopmentExperienceSchema.partial();
var readDevelopmentExperienceSchema = newDevelopmentExperienceSchema.extend({
  id: import_zod2.z.number()
});

// src/schemas/technologies/index.ts
var stacks2 = Object.values(Stack);
var knowledgeLevels = Object.values(KnowledgeLevel);
var newTechnologySchema = import_zod3.z.object({
  name: import_zod3.z.string().max(40),
  stack: import_zod3.z.enum(stacks2),
  knowledgeLevel: import_zod3.z.enum(knowledgeLevels).optional().default("Iniciante" /* BEGINNER */),
  iconUrl: import_zod3.z.string().url()
});
var updatedTechnologySchema = newTechnologySchema.partial();
var readTechnologySchema = newTechnologySchema.extend({
  id: import_zod3.z.number(),
  projects: import_zod3.z.array(readProjectSchema)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  newTechnologySchema,
  readTechnologySchema,
  updatedTechnologySchema
});