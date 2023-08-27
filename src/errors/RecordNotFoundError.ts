import { AppError } from "./AppError";

export class RecordNotFoundError extends AppError {
  constructor(recordType: string, id: number) {
    const message = `Couldn't find any record of type ${recordType} with id ${id}`;
    const status = 404;

    super(message, status);
  }
}
