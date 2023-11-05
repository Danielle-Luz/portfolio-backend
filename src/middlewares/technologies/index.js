"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologiesMiddlewares = void 0;
const utils_1 = require("../utils");
const schemas_1 = require("../../schemas");
class TechnologiesMiddlewares {
    static validateNewTechnology() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.newTechnologySchema, TechnologiesMiddlewares.propertyToStoreValidatedData);
    }
    static validateUpdatedTechnology() {
        return utils_1.UtilsMiddlewares.validateDataSchema(schemas_1.updatedTechnologySchema, TechnologiesMiddlewares.propertyToStoreValidatedData);
    }
}
exports.TechnologiesMiddlewares = TechnologiesMiddlewares;
TechnologiesMiddlewares.propertyToStoreValidatedData = "technology";
