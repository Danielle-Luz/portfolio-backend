import { UtilsMiddlewares } from "../utils";
import { newProjectSchema, updatedProjectSchema } from "../../schemas";
import { requestStorageProperties } from "../../interfaces";

export class ProjectMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties = "project";

  static validateNewProject() {
    return UtilsMiddlewares.validateDataSchema(
      newProjectSchema,
      ProjectMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateUpdatedProject() {
    return UtilsMiddlewares.validateDataSchema(
      updatedProjectSchema,
      ProjectMiddlewares.propertyToStoreValidatedData
    );
  }
}
