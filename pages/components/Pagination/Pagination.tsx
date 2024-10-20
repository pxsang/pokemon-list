import { PaginationWithTotal } from "@/pages/hooks/usePagination";
import { useCallback, useMemo } from "react";

interface PaginationProps {
  pagination: PaginationWithTotal;
}

export default function Pagination({ pagination }: PaginationProps) {
  const disabledPrev = useMemo(() => pagination.page === 1, [pagination.page]);
  const disabledNext = useMemo(
    () => pagination.page * pagination.limit >= pagination.total,
    [pagination.page, pagination.limit, pagination.total],
  );

  const handlePrev = useCallback(() => {
    if (disabledPrev) return;

    pagination.setPage(pagination.page - 1);
  }, [disabledPrev, pagination]);

  const handleNext = useCallback(() => {
    if (disabledNext) return;

    pagination.setPage(pagination.page + 1);
  }, [disabledNext, pagination]);

  return (
    <div className="mt-8 flex justify-center">
      <PaginationAction
        label="Prev"
        disabled={disabledPrev}
        onClick={handlePrev}
      />
      <PaginationAction
        label="Next"
        disabled={disabledNext}
        onClick={handleNext}
      />
    </div>
  );
}

interface PaginationActionProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
}
function PaginationAction({ label, disabled, onClick }: PaginationActionProps) {
  return (
    <button
      className="p-2 bg-red-900 rounded-md text-white mr-4 disabled:opacity-40 disabled:cursor-not-allowed select-none"
      disabled={disabled}
      onClick={() => !disabled && onClick()}
    >
      {label}
    </button>
  );
}
