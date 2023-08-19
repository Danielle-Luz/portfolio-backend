import { z } from "zod";
import { KnowledgeLevel, Stack } from "../../enums";

const stacks = Object.values(Stack);
const knowledgeLevels = Object.values(KnowledgeLevel);

const newTechnologySchema = z.object({
  name: z.string().max(40),
  type: z.enum(stacks as [string, ...string[]]),
  knowledgeLevel: z
    .enum(knowledgeLevels as [string, ...string[]])
    .optional()
    .default(KnowledgeLevel.BEGINNER),
});

const readTechnologySchema = newTechnologySchema.extend({
  id: z.number(),
});


export {newTechnologySchema, readTechnologySchema}