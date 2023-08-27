interface zodFieldErrors {
  [x: string]: string[] | undefined;
  [x: number]: string[] | undefined;
  [x: symbol]: string[] | undefined;
}

interface messageData {
  message: string;
}

interface recordId {
  id: number;
}

type requestStorageProperties =
  | "technology"
  | "project"
  | "developmentExperience";

export { zodFieldErrors, messageData, recordId, requestStorageProperties };
