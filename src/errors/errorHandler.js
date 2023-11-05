"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("./AppError");
const zod_1 = require("zod");
function errorHandler(error, request, response, next) {
    let statusCode = 500;
    let errorMessage = { message: error.message };
    if (error instanceof AppError_1.AppError) {
        statusCode = error.statusCode;
    }
    else if (error instanceof zod_1.ZodError) {
        statusCode = 400;
        errorMessage = error.flatten().fieldErrors;
    }
    console.log(error);
    return response.status(statusCode).json(errorMessage);
}
exports.errorHandler = errorHandler;
