import { z } from "zod";
import { ExperienceType } from "../../enums";

const experiencesType = Object.values(ExperienceType) as [string, ...string[]];

const newDevelopmentExperienceSchema = z.object({
  name: z.string().max(50),
  type: z.enum(experiencesType),
  company: z.string().max(50).optional().default("Empresa não informada"),
  description: z.string(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

const updatedDevelopmentExperienceSchema = newDevelopmentExperienceSchema.partial();

const readDevelopmentExperienceSchema = newDevelopmentExperienceSchema.extend({
  id: z.number(),
});

export {
  newDevelopmentExperienceSchema,
  updatedDevelopmentExperienceSchema,
  readDevelopmentExperienceSchema,
};
