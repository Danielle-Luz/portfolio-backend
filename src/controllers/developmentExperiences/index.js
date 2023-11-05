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
exports.DevelopmentExperiencesController = void 0;
const services_1 = require("../../services");
class DevelopmentExperiencesController {
    static create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { developmentExperience: newRecordData } = request;
            const createdDevelopmentExperience = yield services_1.DevelopmentExperiencesService.create(newRecordData);
            return response.status(201).json(createdDevelopmentExperience);
        });
    }
    static getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const allDevelopmentExperiences = yield services_1.DevelopmentExperiencesService.getAll();
            return response.status(200).json(allDevelopmentExperiences);
        });
    }
    static getByType(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const experienceType = request.params.type;
            const foundDevelopmentExperiences = yield services_1.DevelopmentExperiencesService.getByType(experienceType);
            return response.status(200).json(foundDevelopmentExperiences);
        });
    }
    static update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId, developmentExperience: updatedData } = request;
            const updatedDevelopmentExperience = yield services_1.DevelopmentExperiencesService.update(recordId, updatedData);
            return response.status(200).json(updatedDevelopmentExperience);
        });
    }
    static delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId } = request;
            yield services_1.DevelopmentExperiencesService.delete(recordId);
            return response.status(204).send();
        });
    }
}
exports.DevelopmentExperiencesController = DevelopmentExperiencesController;
