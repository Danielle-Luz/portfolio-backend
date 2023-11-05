"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordNotFoundError = void 0;
const AppError_1 = require("./AppError");
class RecordNotFoundError extends AppError_1.AppError {
    constructor(recordType, id) {
        const message = `Couldn't find any record of type ${recordType} with id ${id}`;
        const status = 404;
        super(message, status);
    }
}
exports.RecordNotFoundError = RecordNotFoundError;
