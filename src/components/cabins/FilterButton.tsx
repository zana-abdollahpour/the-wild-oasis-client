import type { CabinCapacity } from "@/types/cabins.types";

interface FilterButtonProps {
  filter: CabinCapacity;
  activeFilter: CabinCapacity;
  handleFilter: (filter: CabinCapacity) => void;
  children: React.ReactNode;
}

export default function FilterButton({
  filter,
  activeFilter,
  handleFilter,
  children,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`px-5 py-2 transition-all hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
