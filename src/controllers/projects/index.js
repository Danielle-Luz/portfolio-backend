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
exports.ProjectsController = void 0;
const services_1 = require("../../services");
class ProjectsController {
    static create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { project: newRecordData } = request;
            const createdProject = yield services_1.ProjectsService.create(newRecordData);
            return response.status(201).json(createdProject);
        });
    }
    static createMany(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { projects: newProjects } = request;
            const createdProjects = yield services_1.ProjectsService.createMany(newProjects);
            return response.status(201).json(createdProjects);
        });
    }
    static getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const allProjectsFound = yield services_1.ProjectsService.getAll();
            return response.status(200).json(allProjectsFound);
        });
    }
    static getOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId } = request;
            const foundProject = yield services_1.ProjectsService.getOne(recordId);
            return response.status(200).json(foundProject);
        });
    }
    static getByStack(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const stack = request.params.stack;
            const foundProjects = yield services_1.ProjectsService.getByStack(stack);
            return response.status(200).json(foundProjects);
        });
    }
    static getHighlights(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const highlightProjects = yield services_1.ProjectsService.getHighlights();
            return response.status(200).json(highlightProjects);
        });
    }
    static getTechnologies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId } = request;
            const projectTechnologies = yield services_1.ProjectsService.getTechnologies(recordId);
            return response.status(200).json(projectTechnologies);
        });
    }
    static update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId, project: updatedData } = request;
            const updatedProject = yield services_1.ProjectsService.update(recordId, updatedData);
            return response.status(200).json(updatedProject);
        });
    }
    static delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId } = request;
            const deletedProject = yield services_1.ProjectsService.delete(recordId);
            return response.status(204).send();
        });
    }
    static addTechnology(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId: projectId } = request;
            const technologyId = request.body.id;
            const projectWithTechnology = yield services_1.ProjectsService.addTechnology(projectId, technologyId);
            return response.status(200).json(projectWithTechnology);
        });
    }
}
exports.ProjectsController = ProjectsController;
