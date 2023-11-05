"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsMiddlewares = void 0;
const enums_1 = require("../../enums");
const errors_1 = require("../../errors");
const errors_2 = require("../../errors");
const utils_1 = require("../../schemas/utils");
class UtilsMiddlewares {
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
            throw new errors_1.InvalidIdError();
        }
        const idAsPositiveInteger = Math.abs(parseInt(id));
        request.recordId = idAsPositiveInteger;
        return next();
    }
    static validateBodyParameterId() {
        return UtilsMiddlewares.validateDataSchema(utils_1.idSchema);
    }
    static validateValueAsEnum(paramName, enumType) {
        return (request, response, next) => {
            const paramValue = request.params[paramName];
            const enumValues = Object.values(enumType);
            const isEnumValue = enumValues.includes(paramValue);
            if (!isEnumValue) {
                throw new errors_2.InvalidEnumValue(paramName, enumValues);
            }
            return next();
        };
    }
    static validateValueAsStack() {
        const paramName = "stack";
        return UtilsMiddlewares.validateValueAsEnum(paramName, enums_1.Stack);
    }
}
exports.UtilsMiddlewares = UtilsMiddlewares;
