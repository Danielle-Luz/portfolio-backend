"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEnumValue = void 0;
const AppError_1 = require("./AppError");
class InvalidEnumValue extends AppError_1.AppError {
    constructor(enumField, validValues) {
        const message = `The param ${enumField} should have one of these values: ${validValues}`;
        const status = 400;
        super(message, status);
    }
}
exports.InvalidEnumValue = InvalidEnumValue;
