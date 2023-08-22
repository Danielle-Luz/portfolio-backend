import { UtilsMiddlewares } from "../utils";
import {
  newDevelopmentExperienceSchema,
  updatedDevelopmentExperienceSchema,
} from "../../schemas";
import { ExperienceType } from "../../enums";
import { requestStorageProperties } from "../../interfaces";

export class DevelopmentExperienceMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties =
    "developmentExperience";

  static validateNewDevelopmentExperience() {
    return UtilsMiddlewares.validateDataSchema(
      newDevelopmentExperienceSchema,
      DevelopmentExperienceMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateUpdatedDevelopmentExperience() {
    return UtilsMiddlewares.validateDataSchema(
      updatedDevelopmentExperienceSchema,
      DevelopmentExperienceMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateValueAsExperienceType() {
    const paramName = "type";

    return UtilsMiddlewares.validateValueAsEnum(paramName, ExperienceType);
  }
}
