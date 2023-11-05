"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsMiddlewares = void 0;
const utils_1 = require("../utils");
const schemas_1 = require("../../schemas");
class ProjectsMiddlewares {
    static validateNewProject() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.newProjectSchema, ProjectsMiddlewares.propertyToStoreValidatedData);
    }
    static validateManyNewProjects() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.manyNewProjectsSchema, ProjectsMiddlewares.propertyToStoreMultipleProjects);
    }
    static validateUpdatedProject() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.updatedProjectSchema, ProjectsMiddlewares.propertyToStoreValidatedData);
    }
}
exports.ProjectsMiddlewares = ProjectsMiddlewares;
ProjectsMiddlewares.propertyToStoreValidatedData = "project";
ProjectsMiddlewares.propertyToStoreMultipleProjects = "projects";
