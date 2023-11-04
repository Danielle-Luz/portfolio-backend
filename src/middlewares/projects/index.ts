import { UtilsMiddlewares } from "../utils";
import { manyNewProjectsSchema, newProjectSchema, updatedProjectSchema } from "../../schemas";
import { requestStorageProperties } from "../../interfaces";

export class ProjectsMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties = "project";
  static propertyToStoreMultipleProjects: requestStorageProperties = "projects";

  static validateNewProject() {
    return UtilsMiddlewares.validateDataSchema(
      newProjectSchema,
      ProjectsMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateManyNewProject() {
    return UtilsMiddlewares.validateDataSchema(
      manyNewProjectsSchema,
      ProjectsMiddlewares.propertyToStoreMultipleProjects
    );
  }

  static validateUpdatedProject() {
    return UtilsMiddlewares.validateDataSchema(
      updatedProjectSchema,
      ProjectsMiddlewares.propertyToStoreValidatedData
    );
  }
}
