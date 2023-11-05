"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordAlreadyExists = void 0;
const AppError_1 = require("./AppError");
class RecordAlreadyExists extends AppError_1.AppError {
    constructor(message) {
        const status = 409;
        super(message, status);
    }
}
exports.RecordAlreadyExists = RecordAlreadyExists;
