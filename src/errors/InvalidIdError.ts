import { AppError } from "./AppError";

export class InvalidIdError extends AppError {
  constructor() {
    super("The id should be a integer number", 400);
  }
}
