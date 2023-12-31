"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idSchema = void 0;
const zod_1 = require("zod");
const idSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
exports.idSchema = idSchema;
