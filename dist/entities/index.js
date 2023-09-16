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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/entities/index.ts
var entities_exports = {};
__export(entities_exports, {
  DevelopmentExperiences: () => DevelopmentExperiences,
  Projects: () => Projects,
  Technologies: () => Technologies
});
module.exports = __toCommonJS(entities_exports);

// src/entities/DevelopmentExperiences.ts
var import_typeorm = require("typeorm");

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

// src/entities/DevelopmentExperiences.ts
var DevelopmentExperiences = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)()
], DevelopmentExperiences.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({ length: 100 })
], DevelopmentExperiences.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "enum", enum: ExperienceType })
], DevelopmentExperiences.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm.Column)({ length: 50, nullable: true, default: "Empresa n\xE3o informada" })
], DevelopmentExperiences.prototype, "company", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "text" })
], DevelopmentExperiences.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "date", nullable: true })
], DevelopmentExperiences.prototype, "startDate", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "date", nullable: true })
], DevelopmentExperiences.prototype, "endDate", 2);
DevelopmentExperiences = __decorateClass([
  (0, import_typeorm.Entity)()
], DevelopmentExperiences);

// src/entities/Projects.ts
var import_typeorm3 = require("typeorm");

// src/entities/Technologies.ts
var import_typeorm2 = require("typeorm");
var Technologies = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)()
], Technologies.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ length: 40 })
], Technologies.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    type: "enum",
    enum: Stack
  })
], Technologies.prototype, "stack", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    type: "enum",
    enum: KnowledgeLevel,
    default: "Iniciante" /* BEGINNER */,
    nullable: true
  })
], Technologies.prototype, "knowledgeLevel", 2);
__decorateClass([
  (0, import_typeorm2.ManyToMany)(() => Projects, (project) => project.technologies)
], Technologies.prototype, "projects", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ type: "text", nullable: true })
], Technologies.prototype, "iconUrl", 2);
Technologies = __decorateClass([
  (0, import_typeorm2.Entity)()
], Technologies);

// src/entities/Projects.ts
var Projects = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)()
], Projects.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ length: 20, unique: true })
], Projects.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "text" })
], Projects.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    type: "enum",
    enum: Stack
  })
], Projects.prototype, "stack", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "text" })
], Projects.prototype, "coverImage", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "text" })
], Projects.prototype, "url", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ nullable: true, default: false })
], Projects.prototype, "highlight", 2);
__decorateClass([
  (0, import_typeorm3.ManyToMany)(() => Technologies, (technology) => technology.projects),
  (0, import_typeorm3.JoinTable)()
], Projects.prototype, "technologies", 2);
Projects = __decorateClass([
  (0, import_typeorm3.Entity)()
], Projects);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DevelopmentExperiences,
  Projects,
  Technologies
});
