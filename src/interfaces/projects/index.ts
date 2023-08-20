import { z } from "zod";
import { newProjectSchema, readProjectSchema } from "../../schemas/projects";
import { Stack } from "../../enums";

type readProject = z.infer<typeof readProjectSchema>;
type newProject = {
  name: string;
  description: string;
  stack: Stack;
  coverImage: string;
  url: string;
  hightlight: boolean;
};
type updatedProject = Partial<newProject>;

export { newProject, readProject, updatedProject };
