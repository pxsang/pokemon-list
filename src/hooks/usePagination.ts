import { useMemo, useState } from "react";

export interface UsePaginationOptions {
  defaultPage?: number;
  defaultLimit?: number;
}

const defaultPagination: UsePaginationOptions = {
  defaultPage: 1,
  defaultLimit: 48,
};

export interface UsePaginationReturn {
  page: number;
  limit: number;
  setLimit: (newLimit: number) => void;
  setPage: (nextPage: number) => void;
}

export interface PaginationWithTotal extends UsePaginationReturn {
  total: number;
}

function usePagination(
  options: UsePaginationOptions = defaultPagination,
): UsePaginationReturn {
  const [limit, setLimit] = useState(options.defaultLimit || 48);
  const [page, setPage] = useState(options.defaultPage || 1);

  return useMemo(
    () => ({
      page,
      limit,
      setLimit,
      setPage,
    }),
    [limit, page],
  );
}

export default usePagination;
