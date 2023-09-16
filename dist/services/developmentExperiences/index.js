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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/services/developmentExperiences/index.ts
var developmentExperiences_exports = {};
__export(developmentExperiences_exports, {
  DevelopmentExperiencesService: () => DevelopmentExperiencesService
});
module.exports = __toCommonJS(developmentExperiences_exports);

// src/data-source.ts
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

// src/entities/DevelopmentExperiences.ts
var import_typeorm2 = require("typeorm");

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
  (0, import_typeorm2.PrimaryGeneratedColumn)()
], DevelopmentExperiences.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ length: 100 })
], DevelopmentExperiences.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ type: "enum", enum: ExperienceType })
], DevelopmentExperiences.prototype, "type", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ length: 50, nullable: true, default: "Empresa n\xE3o informada" })
], DevelopmentExperiences.prototype, "company", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ type: "text" })
], DevelopmentExperiences.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ type: "date", nullable: true })
], DevelopmentExperiences.prototype, "startDate", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ type: "date", nullable: true })
], DevelopmentExperiences.prototype, "endDate", 2);
DevelopmentExperiences = __decorateClass([
  (0, import_typeorm2.Entity)()
], DevelopmentExperiences);

// src/entities/Projects.ts
var import_typeorm4 = require("typeorm");

// src/entities/Technologies.ts
var import_typeorm3 = require("typeorm");
var Technologies = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)()
], Technologies.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ length: 40 })
], Technologies.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    type: "enum",
    enum: Stack
  })
], Technologies.prototype, "stack", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    type: "enum",
    enum: KnowledgeLevel,
    default: "Iniciante" /* BEGINNER */,
    nullable: true
  })
], Technologies.prototype, "knowledgeLevel", 2);
__decorateClass([
  (0, import_typeorm3.ManyToMany)(() => Projects, (project) => project.technologies)
], Technologies.prototype, "projects", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "text", nullable: true })
], Technologies.prototype, "iconUrl", 2);
Technologies = __decorateClass([
  (0, import_typeorm3.Entity)()
], Technologies);

// src/entities/Projects.ts
var Projects = class {
};
__decorateClass([
  (0, import_typeorm4.PrimaryGeneratedColumn)()
], Projects.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ length: 20, unique: true })
], Projects.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "text" })
], Projects.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm4.Column)({
    type: "enum",
    enum: Stack
  })
], Projects.prototype, "stack", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "text" })
], Projects.prototype, "coverImage", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ type: "text" })
], Projects.prototype, "url", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ nullable: true, default: false })
], Projects.prototype, "highlight", 2);
__decorateClass([
  (0, import_typeorm4.ManyToMany)(() => Technologies, (technology) => technology.projects),
  (0, import_typeorm4.JoinTable)()
], Projects.prototype, "technologies", 2);
Projects = __decorateClass([
  (0, import_typeorm4.Entity)()
], Projects);

// src/errors/AppError.ts
var AppError = class extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
};

// src/errors/errorHandler.ts
var import_zod = require("zod");

// src/errors/RecordNotFoundError.ts
var RecordNotFoundError = class extends AppError {
  constructor(recordType, id) {
    const message = `Couldn't find any record of type ${recordType} with id ${id}`;
    const status = 404;
    super(message, status);
  }
};

// src/services/developmentExperiences/index.ts
var _DevelopmentExperiencesService = class _DevelopmentExperiencesService {
  static create(newDevelopmentExperience) {
    return __async(this, null, function* () {
      const createdDevelopmentExperience = yield AppDataSource.createQueryBuilder().insert().into(DevelopmentExperiences).values(newDevelopmentExperience).returning("*").execute();
      return createdDevelopmentExperience.generatedMaps[0];
    });
  }
  static getAll() {
    return __async(this, null, function* () {
      return AppDataSource.getRepository(DevelopmentExperiences).createQueryBuilder().getMany();
    });
  }
  static getByType(type) {
    return __async(this, null, function* () {
      return AppDataSource.createQueryBuilder().select("development_experiences").from(DevelopmentExperiences, "development_experiences").where("development_experiences.type = :type", { type }).getMany();
    });
  }
  static update(id, updatedDevelopmentExperience) {
    return __async(this, null, function* () {
      const developmentExperienceAfterUpdate = yield AppDataSource.createQueryBuilder().update(DevelopmentExperiences).set(updatedDevelopmentExperience).where("id = :id", { id }).returning("*").execute();
      const wasNoRecordUpdated = developmentExperienceAfterUpdate.affected === 0;
      if (wasNoRecordUpdated) {
        throw new RecordNotFoundError(
          _DevelopmentExperiencesService.recordType,
          id
        );
      }
      return developmentExperienceAfterUpdate.raw[0];
    });
  }
  static delete(id) {
    return __async(this, null, function* () {
      const deletedDevelopmentExperience = yield AppDataSource.createQueryBuilder().delete().from(DevelopmentExperiences).where("id = :id", { id }).execute();
      const wasNoRecordDeleted = deletedDevelopmentExperience.affected === 0;
      if (wasNoRecordDeleted) {
        throw new RecordNotFoundError(
          _DevelopmentExperiencesService.recordType,
          id
        );
      }
    });
  }
};
_DevelopmentExperiencesService.recordType = "development experiences";
var DevelopmentExperiencesService = _DevelopmentExperiencesService;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DevelopmentExperiencesService
});
