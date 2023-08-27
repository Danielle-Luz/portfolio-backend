import { AppError } from "./AppError";

export class RecordAlreadyExists extends AppError {
  constructor(message: string) {
    const status = 409;
    super(message, status);
  }
}
