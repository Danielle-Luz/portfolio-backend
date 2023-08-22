import { NextFunction, Request, Response } from "express";
import { UtilsMiddlewares } from "../utils";
import { newTechnologySchema, updatedTechnologySchema } from "../../schemas";
import { ExperienceType } from "../../enums";
import { requestStorageProperties } from "../../interfaces";

export class TechnologyMiddlewares {
  static propertyToStoreValidatedData: requestStorageProperties = "technology";

  static validateNewTechnology() {
    return UtilsMiddlewares.validateDataSchema(
      newTechnologySchema,
      TechnologyMiddlewares.propertyToStoreValidatedData
    );
  }

  static validateUpdatedTechnology() {
    return UtilsMiddlewares.validateDataSchema(
      updatedTechnologySchema,
      TechnologyMiddlewares.propertyToStoreValidatedData
    );
  }
}
