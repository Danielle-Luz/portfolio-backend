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

// src/entities/DevelopmentExperiences.ts
var DevelopmentExperiences_exports = {};
__export(DevelopmentExperiences_exports, {
  DevelopmentExperiences: () => DevelopmentExperiences
});
module.exports = __toCommonJS(DevelopmentExperiences_exports);
var import_typeorm = require("typeorm");

// src/enums/ExperienceType.ts
var ExperienceType = /* @__PURE__ */ ((ExperienceType2) => {
  ExperienceType2["ACADEMIC"] = "Acad\xEAmica";
  ExperienceType2["COURSE"] = "Curso";
  ExperienceType2["VOLUNTEER"] = "Voluntariado";
  ExperienceType2["WORK"] = "Emprego";
  return ExperienceType2;
})(ExperienceType || {});

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DevelopmentExperiences
});
