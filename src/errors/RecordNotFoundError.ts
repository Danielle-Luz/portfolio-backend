import { AppError } from "./AppError";

export class RecordNotFoundError extends AppError {
  constructor(recordType: string, id: number) {
    const message = `Couldn't find any record of type ${recordType} with id ${id} was not found`;
    const status = 400;

    super(message, status);
  }
}
