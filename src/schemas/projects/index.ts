import { z } from "zod";
import { Stack } from "../../enums";
import { readTechnologySchema } from "../technologies";

const stacks = Object.values(Stack) as [string, ...string[]];

const newProjectSchema = z.object({
  name: z.string().max(20),
  description: z.string(),
  stack: z.enum(stacks),
  coverImage: z.string().url().optional().default(""),
  url: z.string().url(),
  highlight: z.boolean().optional().default(false),
});

const manyNewProjectsSchema = z.array(newProjectSchema);

const updatedProjectSchema = newProjectSchema.partial();

const readProjectSchema: z.ZodTypeAny = newProjectSchema.extend({
  id: z.number(),
  technologies: z.array(readTechnologySchema),
});

export {
  newProjectSchema,
  manyNewProjectsSchema,
  updatedProjectSchema,
  readProjectSchema,
};
