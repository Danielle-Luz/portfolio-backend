"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTechnologySchema = exports.updatedTechnologySchema = exports.newTechnologySchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../enums");
const __1 = require("..");
const stacks = Object.values(enums_1.Stack);
const knowledgeLevels = Object.values(enums_1.KnowledgeLevel);
const newTechnologySchema = zod_1.z.object({
    name: zod_1.z.string().max(40),
    stack: zod_1.z.enum(stacks),
    knowledgeLevel: zod_1.z
        .enum(knowledgeLevels)
        .optional()
        .default(enums_1.KnowledgeLevel.BEGINNER),
    iconUrl: zod_1.z.string().url(),
});
exports.newTechnologySchema = newTechnologySchema;
const updatedTechnologySchema = newTechnologySchema.partial();
exports.updatedTechnologySchema = updatedTechnologySchema;
const readTechnologySchema = newTechnologySchema.extend({
    id: zod_1.z.number(),
    projects: zod_1.z.array(__1.readProjectSchema),
});
exports.readTechnologySchema = readTechnologySchema;
