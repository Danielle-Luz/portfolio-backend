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
exports.DevelopmentExperiencesService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
class DevelopmentExperiencesService {
    static create(newDevelopmentExperience) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdDevelopmentExperience = yield data_source_1.AppDataSource.createQueryBuilder()
                .insert()
                .into(entities_1.DevelopmentExperiences)
                .values(newDevelopmentExperience)
                .returning("*")
                .execute();
            return createdDevelopmentExperience.generatedMaps[0];
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return data_source_1.AppDataSource.getRepository(entities_1.DevelopmentExperiences)
                .createQueryBuilder("development_experiences")
                .orderBy("development_experiences.startDate", "DESC")
                .getMany();
        });
    }
    static getByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return data_source_1.AppDataSource.createQueryBuilder()
                .select("development_experiences")
                .from(entities_1.DevelopmentExperiences, "development_experiences")
                .where("development_experiences.type = :type", { type })
                .orderBy("development_experiences.startDate", "DESC")
                .getMany();
        });
    }
    static update(id, updatedDevelopmentExperience) {
        return __awaiter(this, void 0, void 0, function* () {
            const developmentExperienceAfterUpdate = yield data_source_1.AppDataSource.createQueryBuilder()
                .update(entities_1.DevelopmentExperiences)
                .set(updatedDevelopmentExperience)
                .where("id = :id", { id })
                .returning("*")
                .execute();
            const wasNoRecordUpdated = developmentExperienceAfterUpdate.affected === 0;
            if (wasNoRecordUpdated) {
                throw new errors_1.RecordNotFoundError(DevelopmentExperiencesService.recordType, id);
            }
            return developmentExperienceAfterUpdate.raw[0];
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedDevelopmentExperience = yield data_source_1.AppDataSource.createQueryBuilder()
                .delete()
                .from(entities_1.DevelopmentExperiences)
                .where("id = :id", { id })
                .execute();
            const wasNoRecordDeleted = deletedDevelopmentExperience.affected === 0;
            if (wasNoRecordDeleted) {
                throw new errors_1.RecordNotFoundError(DevelopmentExperiencesService.recordType, id);
            }
        });
    }
}
exports.DevelopmentExperiencesService = DevelopmentExperiencesService;
DevelopmentExperiencesService.recordType = "development experiences";
