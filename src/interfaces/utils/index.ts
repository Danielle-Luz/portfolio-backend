interface zodFieldErrors {
  [x: string]: string[] | undefined;
  [x: number]: string[] | undefined;
  [x: symbol]: string[] | undefined;
}

interface paginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
}

interface recordId {
  id: number;
}

type requestStorageProperties =
  | "technology"
  | "project"
  | "developmentExperience";

export { zodFieldErrors, paginationParams, recordId, requestStorageProperties };
