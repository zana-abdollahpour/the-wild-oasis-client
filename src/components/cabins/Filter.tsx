"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import FilterButton from "./FilterButton";
import type { CabinCapacity } from "@/types/cabins.types";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = (searchParams.get("capacity") ?? "all") as CabinCapacity;

  function handleFilter(filter: CabinCapacity) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="grid w-full grid-cols-1 gap-y-2 border border-primary-800 xs:mx-0 xs:w-auto xs:grid-cols-4">
      <FilterButton
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </FilterButton>
      <FilterButton
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1 &mdash; 3 guests
      </FilterButton>
      <FilterButton
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4 &mdash; 7 guests
      </FilterButton>
      <FilterButton
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8 &mdash; 12 guests
      </FilterButton>
    </div>
  );
}
