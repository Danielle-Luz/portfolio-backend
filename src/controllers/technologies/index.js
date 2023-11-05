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
exports.TechnologiesController = void 0;
const services_1 = require("../../services");
class TechnologiesController {
    static create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { technology: newRecordData } = request;
            const createdTechnology = yield services_1.TechnologiesService.create(newRecordData);
            return response.status(201).json(createdTechnology);
        });
    }
    static update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId, technology: updatedData } = request;
            const updatedTechnology = yield services_1.TechnologiesService.update(recordId, updatedData);
            return response.status(200).json(updatedTechnology);
        });
    }
    static getAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const allTechnologiesFound = yield services_1.TechnologiesService.getAll();
            return response.status(200).send(allTechnologiesFound);
        });
    }
    static getOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId } = request;
            const foundTechnology = yield services_1.TechnologiesService.getOne(recordId);
            return response.status(200).json(foundTechnology);
        });
    }
    static delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { recordId } = request;
            yield services_1.TechnologiesService.delete(recordId);
            return response.status(204).send();
        });
    }
}
exports.TechnologiesController = TechnologiesController;
