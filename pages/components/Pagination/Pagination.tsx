export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center">
      <PaginationAction label="Prev" disabled={true} />
      <PaginationAction label="Next" disabled={true} />
    </div>
  );
}

interface PaginationActionProps {
  label: string;
  disabled: boolean;
}
function PaginationAction({ label, disabled }: PaginationActionProps) {
  return (
    <button
      className="p-2 bg-red-900 rounded-md text-white mr-4 disabled:opacity-40 disabled:cursor-not-allowed select-none"
      disabled={disabled}
    >
      {label}
    </button>
  );
}
