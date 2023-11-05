"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIdError = void 0;
const AppError_1 = require("./AppError");
class InvalidIdError extends AppError_1.AppError {
    constructor() {
        const message = "The id should be a integer number";
        const status = 400;
        super(message, status);
    }
}
exports.InvalidIdError = InvalidIdError;
