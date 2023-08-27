import { AppError } from "./AppError";

export class InvalidEnumValue extends AppError {
  constructor(enumField: string, validValues: string[]) {
    const message: string = `The param ${enumField} should have one of these values: ${validValues}`;
    const status: number = 400;

    super(message, status);
  }
}
