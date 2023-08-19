import { z } from "zod";
import { Stack } from "../../enums";
import { readTechnologySchema } from "../technologies";

const stacks = Object.values(Stack) as [string, ...string[]];

const newProjectSchema = z.object({
  name: z.string().max(20),
  description: z.string(),
  stack: z.enum(stacks),
  coverImage: z.string().url(),
  url: z.string().url(),
  hightlight: z.boolean().optional().default(false),
});

const readProjectSchema: z.ZodTypeAny = newProjectSchema.extend({
  id: z.number(),
  technologies: z.array(readTechnologySchema),
});

export { newProjectSchema, readProjectSchema };
