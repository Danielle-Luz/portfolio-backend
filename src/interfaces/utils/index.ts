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

export { zodFieldErrors, paginationParams };
