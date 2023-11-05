"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
const technologies_1 = require("../technologies");
const utils_1 = require("../utils");
class ProjectsService {
    static create(project) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdProject = yield data_source_1.AppDataSource.createQueryBuilder()
                    .insert()
                    .into(entities_1.Projects)
                    .values(project)
                    .returning("*")
                    .execute();
                return createdProject.generatedMaps[0];
            }
            catch (error) {
                const errorMessage = "A project with this name was already created";
                (0, utils_1.handleRecordAlreadyExistsError)(error, errorMessage);
            }
        });
    }
    static createMany(projectList) {
        return __awaiter(this, void 0, void 0, function* () {
            const allProjectsCreated = [];
            for (const project of projectList) {
                const createdProject = yield ProjectsService.create(project);
                allProjectsCreated.push(createdProject);
            }
            return allProjectsCreated;
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return data_source_1.AppDataSource.getRepository(entities_1.Projects)
                .createQueryBuilder("projects")
                .leftJoinAndSelect("projects.technologies", "technologies")
                .orderBy("projects.stack", "DESC")
                .getMany();
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return data_source_1.AppDataSource.createQueryBuilder()
                .select("projects")
                .from(entities_1.Projects, "projects")
                .where("projects.id = :id", { id })
                .leftJoinAndSelect("projects.technologies", "technologies")
                .getOneOrFail()
                .then()
                .catch(() => {
                throw new errors_1.RecordNotFoundError(ProjectsService.recordType, id);
            });
        });
    }
    static getByStack(stack) {
        return __awaiter(this, void 0, void 0, function* () {
            return data_source_1.AppDataSource.createQueryBuilder()
                .select("projects")
                .from(entities_1.Projects, "projects")
                .where("projects.stack = :stack", { stack })
                .leftJoinAndSelect("projects.technologies", "technologies")
                .orderBy("projects.stack", "DESC")
                .getMany();
        });
    }
    static getHighlights() {
        return __awaiter(this, void 0, void 0, function* () {
            return data_source_1.AppDataSource.createQueryBuilder()
                .select("projects")
                .from(entities_1.Projects, "projects")
                .where("projects.highlight = true")
                .leftJoinAndSelect("projects.technologies", "technologies")
                .orderBy("projects.stack", "DESC")
                .getMany();
        });
    }
    static getTechnologies(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundProject = yield data_source_1.AppDataSource.createQueryBuilder()
                .select("projects")
                .from(entities_1.Projects, "projects")
                .where("projects.id = :id", { id })
                .leftJoinAndSelect("projects.technologies", "technologies")
                .orderBy("projects.stack", "DESC")
                .getOneOrFail();
            return foundProject.technologies;
        });
    }
    static update(id, updatedProject) {
        return __awaiter(this, void 0, void 0, function* () {
            let wasNoProjectUpdated = false;
            try {
                const projectAfterUpdate = yield data_source_1.AppDataSource.createQueryBuilder()
                    .update(entities_1.Projects)
                    .set(updatedProject)
                    .where("id = :id", { id })
                    .returning("*")
                    .execute();
                wasNoProjectUpdated = projectAfterUpdate.affected === 0;
                return projectAfterUpdate.raw[0];
            }
            catch (error) {
                const errorMessage = "A project with this name was already created";
                (0, utils_1.handleRecordAlreadyExistsError)(error, errorMessage);
            }
            finally {
                if (wasNoProjectUpdated) {
                    throw new errors_1.RecordNotFoundError(ProjectsService.recordType, id);
                }
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProject = yield data_source_1.AppDataSource.getRepository(entities_1.Projects)
                .createQueryBuilder()
                .delete()
                .from(entities_1.Projects, "projects")
                .where("projects.id = :id", { id })
                .execute();
            const wasNoProjectDeleted = deletedProject.affected === 0;
            if (wasNoProjectDeleted) {
                throw new errors_1.RecordNotFoundError(ProjectsService.recordType, id);
            }
        });
    }
    static addTechnology(projectId, technologyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundProject = yield ProjectsService.getOne(projectId);
            const foundTechnology = yield technologies_1.TechnologiesService.getOne(technologyId);
            yield data_source_1.AppDataSource.createQueryBuilder()
                .relation(entities_1.Projects, "technologies")
                .of(foundProject)
                .add(foundTechnology)
                .then()
                .catch((error) => {
                const errorMessage = `The technology with id ${technologyId} was already added in this project`;
                (0, utils_1.handleRecordAlreadyExistsError)(error, errorMessage);
            });
            return yield ProjectsService.getOne(projectId);
        });
    }
}
exports.ProjectsService = ProjectsService;
ProjectsService.recordType = "projects";
