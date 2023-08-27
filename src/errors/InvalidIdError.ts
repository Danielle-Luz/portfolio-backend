import { AppError } from "./AppError";

export class InvalidIdError extends AppError {
  constructor() {
    const message: string = "The id should be a integer number";
    const status: number = 400;

    super(message, status);
  }
}
