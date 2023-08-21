import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { ExperienceType, Stack } from "../../enums";
import { InvalidIdError } from "../../errors/InvalidIdError";
import { InvalidEnumValue } from "../../errors/InvalidEnumValue";

export class UtilsMiddlewares {
  validateSchema(
    schema: ZodSchema,
    request: Request,
    response: Response,
    next: NextFunction
  ) {}

  validateId(request: Request, response: Response, next: NextFunction) {
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

  validateValueAsEnum(
    value: string,
    enumType: typeof ExperienceType | typeof Stack
  ) {
    return (request: Request, response: Response, next: NextFunction) => {
      const enumValues = Object.values(enumType);
      const isEnumValue = enumValues.includes(value);

      if (!isEnumValue) {
        throw new InvalidEnumValue(enumValues);
      }

      return next();
    };
  }
}
