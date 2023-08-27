import { UtilsMiddlewares } from "../utils";
import { newProjectSchema, updatedProjectSchema } from "../../schemas";
import { requestStorageProperties } from "../../interfaces";

export class ProjectsMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties = "project";

  static validateNewProject() {
    return UtilsMiddlewares.validateDataSchema(
      newProjectSchema,
      ProjectsMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateUpdatedProject() {
    return UtilsMiddlewares.validateDataSchema(
      updatedProjectSchema,
      ProjectsMiddlewares.propertyToStoreValidatedData
    );
  }
}
