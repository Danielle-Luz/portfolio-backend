import { z } from "zod";
import { newProjectSchema, readProjectSchema } from "../../schemas/projects";

type newProject = z.infer<typeof newProjectSchema>;
type readProject = z.infer<typeof readProjectSchema>;

export { newProject, readProject };
