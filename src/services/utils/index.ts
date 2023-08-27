import { RecordAlreadyExists } from "../../errors";

export function handleRecordAlreadyExistsError(
  error: any,
  errorMessage: string
) {
  const doesRecordExist = error.detail.includes("already exists");

  if (doesRecordExist) {
    throw new RecordAlreadyExists(errorMessage);
  }
}
