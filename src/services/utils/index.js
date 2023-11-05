"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRecordAlreadyExistsError = void 0;
const errors_1 = require("../../errors");
function handleRecordAlreadyExistsError(error, errorMessage) {
    const doesRecordExist = error.detail.includes("already exists");
    if (doesRecordExist) {
        throw new errors_1.RecordAlreadyExists(errorMessage);
    }
}
exports.handleRecordAlreadyExistsError = handleRecordAlreadyExistsError;
