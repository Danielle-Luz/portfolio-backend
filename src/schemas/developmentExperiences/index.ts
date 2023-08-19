import { z } from "zod";
import { ExperienceType } from "../../enums";

const experiencesType = Object.values(ExperienceType) as [string, ...string[]];

const newDevelopmentExperience = z.object({
  name: z.string().max(50),
  type: z.enum(experiencesType),
  company: z.string().max(50).optional().default("Empresa não informada"),
  description: z.string(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

const readDevelopmentExperience = newDevelopmentExperience.extend({
  id: z.number(),
});

export { newDevelopmentExperience, readDevelopmentExperience };
