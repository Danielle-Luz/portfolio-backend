import { AppError } from "./AppError";

export class InvalidEnumValue extends AppError {
  constructor(enumField: string, validValues: string[]) {
    super(
      `The param ${enumField} should have one of these values: ${validValues}`,
      400
    );
  }
}
