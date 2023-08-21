import { AppError } from "./AppError";

export class InvalidEnumValue extends AppError {
  constructor(validValues: string[]) {
    super(`The param should have one of these values: ${validValues}`, 400);
  }
}
