"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/app.ts
var import_express_async_errors = require("express-async-errors");

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

// src/routers/projects/index.ts
var import_express = require("express");

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

// src/services/technologies/index.ts
var _TechnologiesService = class _TechnologiesService {
  static create(newTechnology) {
    return __async(this, null, function* () {
      const createdTechnology = yield AppDataSource.createQueryBuilder().insert().into(Technologies).values(newTechnology).returning("*").execute();
      return createdTechnology.generatedMaps[0];
    });
  }
  static update(id, updatedTechnology) {
    return __async(this, null, function* () {
      const technologyAfterUpdate = yield AppDataSource.createQueryBuilder().update(Technologies).set(updatedTechnology).where("technologies.id = :id", { id }).returning("*").execute();
      const wasNoTechnologyUpdated = technologyAfterUpdate.affected === 0;
      if (wasNoTechnologyUpdated) {
        throw new RecordNotFoundError(_TechnologiesService.recordType, id);
      }
      return technologyAfterUpdate.raw[0];
    });
  }
  static getAll() {
    return __async(this, null, function* () {
      return AppDataSource.getRepository(Technologies).createQueryBuilder().getMany();
    });
  }
  static getOne(id) {
    return __async(this, null, function* () {
      return AppDataSource.createQueryBuilder().select("technologies").from(Technologies, "technologies").where("technologies.id = :id", { id }).getOneOrFail().then().catch(() => {
        throw new RecordNotFoundError(_TechnologiesService.recordType, id);
      });
    });
  }
  static delete(id) {
    return __async(this, null, function* () {
      const deletedTechnology = yield AppDataSource.createQueryBuilder().delete().from(Technologies).where("technologies.id = :id", { id }).execute();
      const wasNoTechnologyDeleted = deletedTechnology.affected === 0;
      if (wasNoTechnologyDeleted) {
        throw new RecordNotFoundError(_TechnologiesService.recordType, id);
      }
    });
  }
};
_TechnologiesService.recordType = "technologies";
var TechnologiesService = _TechnologiesService;

// src/services/utils/index.ts
function handleRecordAlreadyExistsError(error, errorMessage) {
  const doesRecordExist = error.detail.includes("already exists");
  if (doesRecordExist) {
    throw new RecordAlreadyExists(errorMessage);
  }
}

// src/services/projects/index.ts
var _ProjectsService = class _ProjectsService {
  static create(project) {
    return __async(this, null, function* () {
      try {
        const createdProject = yield AppDataSource.createQueryBuilder().insert().into(Projects).values(project).returning("*").execute();
        return createdProject.generatedMaps[0];
      } catch (error) {
        const errorMessage = "A project with this name was already created";
        handleRecordAlreadyExistsError(error, errorMessage);
      }
    });
  }
  static getAll() {
    return __async(this, null, function* () {
      return AppDataSource.getRepository(Projects).createQueryBuilder("projects").leftJoinAndSelect("projects.technologies", "technologies").getMany();
    });
  }
  static getOne(id) {
    return __async(this, null, function* () {
      return AppDataSource.createQueryBuilder().select("projects").from(Projects, "projects").where("projects.id = :id", { id }).leftJoinAndSelect("projects.technologies", "technologies").getOneOrFail().then().catch(() => {
        throw new RecordNotFoundError(_ProjectsService.recordType, id);
      });
    });
  }
  static getByStack(stack) {
    return __async(this, null, function* () {
      return AppDataSource.createQueryBuilder().select("projects").from(Projects, "projects").where("projects.stack = :stack", { stack }).leftJoinAndSelect("projects.technologies", "technologies").getMany();
    });
  }
  static getHighlights() {
    return __async(this, null, function* () {
      return AppDataSource.createQueryBuilder().select("projects").from(Projects, "projects").where("projects.highlight = true").leftJoinAndSelect("projects.technologies", "technologies").getMany();
    });
  }
  static getTechnologies(id) {
    return __async(this, null, function* () {
      const foundProject = yield AppDataSource.createQueryBuilder().select("projects").from(Projects, "projects").where("projects.id = :id", { id }).leftJoinAndSelect("projects.technologies", "technologies").getOneOrFail();
      return foundProject.technologies;
    });
  }
  static update(id, updatedProject) {
    return __async(this, null, function* () {
      let wasNoProjectUpdated = false;
      try {
        const projectAfterUpdate = yield AppDataSource.createQueryBuilder().update(Projects).set(updatedProject).where("id = :id", { id }).returning("*").execute();
        wasNoProjectUpdated = projectAfterUpdate.affected === 0;
        return projectAfterUpdate.raw[0];
      } catch (error) {
        const errorMessage = "A project with this name was already created";
        handleRecordAlreadyExistsError(error, errorMessage);
      } finally {
        if (wasNoProjectUpdated) {
          throw new RecordNotFoundError(_ProjectsService.recordType, id);
        }
      }
    });
  }
  static delete(id) {
    return __async(this, null, function* () {
      const deletedProject = yield AppDataSource.getRepository(Projects).createQueryBuilder().delete().from(Projects, "projects").where("projects.id = :id", { id }).execute();
      const wasNoProjectDeleted = deletedProject.affected === 0;
      if (wasNoProjectDeleted) {
        throw new RecordNotFoundError(_ProjectsService.recordType, id);
      }
    });
  }
  static addTechnology(projectId, technologyId) {
    return __async(this, null, function* () {
      const foundProject = yield _ProjectsService.getOne(projectId);
      const foundTechnology = yield TechnologiesService.getOne(technologyId);
      yield AppDataSource.createQueryBuilder().relation(Projects, "technologies").of(foundProject).add(foundTechnology).then().catch((error) => {
        const errorMessage = `The technology with id ${technologyId} was already added in this project`;
        handleRecordAlreadyExistsError(error, errorMessage);
      });
      return yield _ProjectsService.getOne(projectId);
    });
  }
};
_ProjectsService.recordType = "projects";
var ProjectsService = _ProjectsService;

// src/controllers/developmentExperiences/index.ts
var DevelopmentExperiencesController = class {
  static create(request, response) {
    return __async(this, null, function* () {
      const { developmentExperience: newRecordData } = request;
      const createdDevelopmentExperience = yield DevelopmentExperiencesService.create(
        newRecordData
      );
      return response.status(201).json(createdDevelopmentExperience);
    });
  }
  static getAll(request, response) {
    return __async(this, null, function* () {
      const allDevelopmentExperiences = yield DevelopmentExperiencesService.getAll();
      return response.status(200).json(allDevelopmentExperiences);
    });
  }
  static getByType(request, response) {
    return __async(this, null, function* () {
      const experienceType = request.params.type;
      const foundDevelopmentExperiences = yield DevelopmentExperiencesService.getByType(experienceType);
      return response.status(200).json(foundDevelopmentExperiences);
    });
  }
  static update(request, response) {
    return __async(this, null, function* () {
      const { recordId, developmentExperience: updatedData } = request;
      const updatedDevelopmentExperience = yield DevelopmentExperiencesService.update(recordId, updatedData);
      return response.status(200).json(updatedDevelopmentExperience);
    });
  }
  static delete(request, response) {
    return __async(this, null, function* () {
      const { recordId } = request;
      yield DevelopmentExperiencesService.delete(recordId);
      return response.status(204).send();
    });
  }
};

// src/controllers/projects/index.ts
var ProjectsController = class {
  static create(request, response) {
    return __async(this, null, function* () {
      const { project: newRecordData } = request;
      const createdProject = yield ProjectsService.create(
        newRecordData
      );
      return response.status(201).json(createdProject);
    });
  }
  static getAll(request, response) {
    return __async(this, null, function* () {
      const allProjectsFound = yield ProjectsService.getAll();
      return response.status(200).json(allProjectsFound);
    });
  }
  static getOne(request, response) {
    return __async(this, null, function* () {
      const { recordId } = request;
      const foundProject = yield ProjectsService.getOne(recordId);
      return response.status(200).json(foundProject);
    });
  }
  static getByStack(request, response) {
    return __async(this, null, function* () {
      const stack = request.params.stack;
      const foundProjects = yield ProjectsService.getByStack(stack);
      return response.status(200).json(foundProjects);
    });
  }
  static getHighlights(request, response) {
    return __async(this, null, function* () {
      const highlightProjects = yield ProjectsService.getHighlights();
      return response.status(200).json(highlightProjects);
    });
  }
  static getTechnologies(request, response) {
    return __async(this, null, function* () {
      const { recordId } = request;
      const projectTechnologies = yield ProjectsService.getTechnologies(recordId);
      return response.status(200).json(projectTechnologies);
    });
  }
  static update(request, response) {
    return __async(this, null, function* () {
      const { recordId, project: updatedData } = request;
      const updatedProject = yield ProjectsService.update(recordId, updatedData);
      return response.status(200).json(updatedProject);
    });
  }
  static delete(request, response) {
    return __async(this, null, function* () {
      const { recordId } = request;
      const deletedProject = yield ProjectsService.delete(recordId);
      return response.status(204).send();
    });
  }
  static addTechnology(request, response) {
    return __async(this, null, function* () {
      const { recordId: projectId } = request;
      const technologyId = request.body.id;
      const projectWithTechnology = yield ProjectsService.addTechnology(
        projectId,
        technologyId
      );
      return response.status(200).json(projectWithTechnology);
    });
  }
};

// src/controllers/technologies/index.ts
var TechnologiesController = class {
  static create(request, response) {
    return __async(this, null, function* () {
      const { technology: newRecordData } = request;
      const createdTechnology = yield TechnologiesService.create(
        newRecordData
      );
      return response.status(201).json(createdTechnology);
    });
  }
  static update(request, response) {
    return __async(this, null, function* () {
      const { recordId, technology: updatedData } = request;
      const updatedTechnology = yield TechnologiesService.update(
        recordId,
        updatedData
      );
      return response.status(200).json(updatedTechnology);
    });
  }
  static getAll(request, response) {
    return __async(this, null, function* () {
      const allTechnologiesFound = yield TechnologiesService.getAll();
      return response.status(200).send(allTechnologiesFound);
    });
  }
  static getOne(request, response) {
    return __async(this, null, function* () {
      const { recordId } = request;
      const foundTechnology = yield TechnologiesService.getOne(recordId);
      return response.status(200).json(foundTechnology);
    });
  }
  static delete(request, response) {
    return __async(this, null, function* () {
      const { recordId } = request;
      yield TechnologiesService.delete(recordId);
      return response.status(204).send();
    });
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

// src/routers/projects/index.ts
var projectRouter = (0, import_express.Router)();
projectRouter.post(
  "",
  ProjectsMiddlewares.validateNewProject(),
  ProjectsController.create
);
projectRouter.post(
  "/:id/technologies",
  UtilsMiddlewares.validateId,
  UtilsMiddlewares.validateBodyParameterId(),
  ProjectsController.addTechnology
);
projectRouter.get("", ProjectsController.getAll);
projectRouter.get("/highlights", ProjectsController.getHighlights);
projectRouter.get(
  "/stack/:stack",
  UtilsMiddlewares.validateValueAsStack(),
  ProjectsController.getByStack
);
projectRouter.get(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsController.getOne
);
projectRouter.get(
  "/:id/technologies",
  UtilsMiddlewares.validateId,
  ProjectsController.getTechnologies
);
projectRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsMiddlewares.validateUpdatedProject(),
  ProjectsController.update
);
projectRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  ProjectsController.delete
);

// src/routers/technologies/index.ts
var import_express2 = require("express");
var technologyRouter = (0, import_express2.Router)();
technologyRouter.post(
  "",
  TechnologiesMiddlewares.validateNewTechnology(),
  TechnologiesController.create
);
technologyRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  TechnologiesMiddlewares.validateUpdatedTechnology(),
  TechnologiesController.update
);
technologyRouter.get("", TechnologiesController.getAll);
technologyRouter.get(
  "/:id",
  UtilsMiddlewares.validateId,
  TechnologiesController.getOne
);
technologyRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  TechnologiesController.delete
);

// src/routers/developmentExperiences/index.ts
var import_express3 = require("express");
var developmentExperienceRouter = (0, import_express3.Router)();
developmentExperienceRouter.post(
  "",
  DevelopmentExperiencesMiddlewares.validateNewDevelopmentExperience(),
  DevelopmentExperiencesController.create
);
developmentExperienceRouter.get("", DevelopmentExperiencesController.getAll);
developmentExperienceRouter.get(
  "/:type",
  DevelopmentExperiencesMiddlewares.validateValueAsExperienceType(),
  DevelopmentExperiencesController.getByType
);
developmentExperienceRouter.patch(
  "/:id",
  UtilsMiddlewares.validateId,
  DevelopmentExperiencesMiddlewares.validateUpdatedDevelopmentExperience(),
  DevelopmentExperiencesController.update
);
developmentExperienceRouter.delete(
  "/:id",
  UtilsMiddlewares.validateId,
  DevelopmentExperiencesController.delete
);

// src/app.ts
var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());
app.use(express.json());
app.use("/technologies", technologyRouter);
app.use("/projects", projectRouter);
app.use("/developmentExperiences", developmentExperienceRouter);
app.use(errorHandler);

// src/server.ts
AppDataSource.initialize().then(() => {
  console.log("> Database started");
  app.listen(3e3, () => __async(exports, null, function* () {
    console.log("> API started");
  }));
});
