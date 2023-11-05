"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readProjectSchema = exports.updatedProjectSchema = exports.manyNewProjectsSchema = exports.newProjectSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../enums");
const technologies_1 = require("../technologies");
const stacks = Object.values(enums_1.Stack);
const newProjectSchema = zod_1.z.object({
    name: zod_1.z.string().max(20),
    description: zod_1.z.string(),
    stack: zod_1.z.enum(stacks),
    coverImage: zod_1.z.string().url().optional(),
    url: zod_1.z.string().url(),
    highlight: zod_1.z.boolean().optional().default(false),
});
exports.newProjectSchema = newProjectSchema;
const manyNewProjectsSchema = zod_1.z.array(newProjectSchema);
exports.manyNewProjectsSchema = manyNewProjectsSchema;
const updatedProjectSchema = newProjectSchema.partial();
exports.updatedProjectSchema = updatedProjectSchema;
const readProjectSchema = newProjectSchema.extend({
    id: zod_1.z.number(),
    technologies: zod_1.z.array(technologies_1.readTechnologySchema),
});
exports.readProjectSchema = readProjectSchema;
