import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { ExperienceType, Stack } from "../../enums";
import { InvalidIdError } from "../../errors";
import { InvalidEnumValue } from "../../errors";
import { requestStorageProperties } from "../../interfaces";
import { idSchema } from "../../schemas/utils";

export class UtilsMiddlewares {
  static validateDataSchema(
    schema: ZodSchema,
    propertyToStoreValidatedData?: requestStorageProperties
  ) {
    return (request: Request, response: Response, next: NextFunction) => {
      const validatedData = schema.parse(request.body);

      if (propertyToStoreValidatedData) {
        request[propertyToStoreValidatedData] = validatedData;
      }

      return next();
    };
  }

  static validateId(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    const integerRegex = /^\d+$/;

    const isInteger = integerRegex.test(id);
    if (!isInteger) {
      throw new InvalidIdError();
    }

    const idAsPositiveInteger = Math.abs(parseInt(id));
    request.recordId = idAsPositiveInteger;

    return next();
  }

  static validateBodyParameterId() {
    return UtilsMiddlewares.validateDataSchema(idSchema);
  }

  static validateValueAsEnum(
    paramName: string,
    enumType: typeof ExperienceType | typeof Stack
  ) {
    return (request: Request, response: Response, next: NextFunction) => {
      const paramValue = request.params[paramName];
      const enumValues = Object.values(enumType);
      const isEnumValue = enumValues.includes(paramValue);

      if (!isEnumValue) {
        throw new InvalidEnumValue(paramName, enumValues);
      }

      return next();
    };
  }

  static validateValueAsStack() {
    const paramName = "stack";
    
    return UtilsMiddlewares.validateValueAsEnum(paramName, Stack);
  }
}
