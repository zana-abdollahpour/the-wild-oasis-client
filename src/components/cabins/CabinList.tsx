import CabinCard from "./CabinCard";
import { getCabins } from "@/utils/data-service";
import type { CabinCapacity } from "@/types/cabins.types";

interface CabinListProps {
  filter: CabinCapacity;
}

export default async function CabinList({ filter }: CabinListProps) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === "all") displayedCabins = cabins;
  else if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity! <= 3);
  else if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity! >= 4 && cabin.maxCapacity! <= 7,
    );
  else if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity! >= 8);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-14">
      {displayedCabins!.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
