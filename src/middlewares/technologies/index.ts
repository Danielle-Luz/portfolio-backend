import { UtilsMiddlewares } from "../utils";
import { newTechnologySchema, updatedTechnologySchema } from "../../schemas";
import { requestStorageProperties } from "../../interfaces";

export class TechnologiesMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties = "technology";

  static validateNewTechnology() {
    return UtilsMiddlewares.validateDataSchema(
      newTechnologySchema,
      TechnologiesMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateUpdatedTechnology() {
    return UtilsMiddlewares.validateDataSchema(
      updatedTechnologySchema,
      TechnologiesMiddlewares.propertyToStoreValidatedData
    );
  }
}
