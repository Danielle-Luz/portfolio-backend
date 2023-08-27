import { UtilsMiddlewares } from "../utils";
import {
  newDevelopmentExperienceSchema,
  updatedDevelopmentExperienceSchema,
} from "../../schemas";
import { ExperienceType } from "../../enums";
import { requestStorageProperties } from "../../interfaces";

export class DevelopmentExperiencesMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties =
    "developmentExperience";

  static validateNewDevelopmentExperience() {
    return UtilsMiddlewares.validateDataSchema(
      newDevelopmentExperienceSchema,
      DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateUpdatedDevelopmentExperience() {
    return UtilsMiddlewares.validateDataSchema(
      updatedDevelopmentExperienceSchema,
      DevelopmentExperiencesMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateValueAsExperienceType() {
    const paramName = "type";

    return UtilsMiddlewares.validateValueAsEnum(paramName, ExperienceType);
  }
}
