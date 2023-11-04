import {
  newDevelopmentExperience,
  newProject,
  newTechnology,
  updatedDevelopmentExperience,
  updatedProject,
  updatedTechnology,
} from "../../interfaces";

declare global {
  namespace Express {
    interface Request {
      recordId: number;
      project: newProject | updatedProject;
      projects: newProject[];
      technology: newTechnology | updatedTechnology;
      developmentExperience:
        | newDevelopmentExperience
        | updatedDevelopmentExperience;
    }
  }
}
