"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentExperiencesMiddlewares = void 0;
const utils_1 = require("../utils");
const schemas_1 = require("../../schemas");
const enums_1 = require("../../enums");
class DevelopmentExperiencesMiddlewares {
    static validateNewDevelopmentExperience() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.newDevelopmentExperienceSchema, DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData);
    }
    static validateUpdatedDevelopmentExperience() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.updatedDevelopmentExperienceSchema, DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData);
    }
    static validateValueAsExperienceType() {
        const paramName = "type";
        return utils_1.UtilsMiddlewares.validateValueAsEnum(paramName, enums_1.ExperienceType);
    }
}
exports.DevelopmentExperiencesMiddlewares = DevelopmentExperiencesMiddlewares;
DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData = "developmentExperience";
