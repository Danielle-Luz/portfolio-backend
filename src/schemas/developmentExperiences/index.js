"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDevelopmentExperienceSchema = exports.updatedDevelopmentExperienceSchema = exports.newDevelopmentExperienceSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../enums");
const experiencesType = Object.values(enums_1.ExperienceType);
const newDevelopmentExperienceSchema = zod_1.z.object({
    name: zod_1.z.string().max(50),
    type: zod_1.z.enum(experiencesType),
    company: zod_1.z.string().max(50).optional().default("Empresa não informada"),
    description: zod_1.z.string(),
    startDate: zod_1.z.string().datetime().optional(),
    endDate: zod_1.z.string().datetime().optional(),
});
exports.newDevelopmentExperienceSchema = newDevelopmentExperienceSchema;
const updatedDevelopmentExperienceSchema = newDevelopmentExperienceSchema.partial();
exports.updatedDevelopmentExperienceSchema = updatedDevelopmentExperienceSchema;
const readDevelopmentExperienceSchema = newDevelopmentExperienceSchema.extend({
    id: zod_1.z.number(),
});
exports.readDevelopmentExperienceSchema = readDevelopmentExperienceSchema;
