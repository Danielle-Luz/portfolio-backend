import { z } from "zod";
import { KnowledgeLevel, Stack } from "../../enums";
import { readProjectSchema } from "..";

const stacks = Object.values(Stack) as [string, ...string[]];
const knowledgeLevels = Object.values(KnowledgeLevel) as [string, ...string[]];

const newTechnologySchema = z.object({
  name: z.string().max(40),
  type: z.enum(stacks),
  knowledgeLevel: z
    .enum(knowledgeLevels)
    .optional()
    .default(KnowledgeLevel.BEGINNER),
});

const readTechnologySchema = newTechnologySchema.extend({
  id: z.number(),
  projects: z.array(readProjectSchema),
});

export { newTechnologySchema, readTechnologySchema };
