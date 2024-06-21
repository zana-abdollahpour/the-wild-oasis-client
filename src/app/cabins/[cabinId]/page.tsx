import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getCabin, getCabins } from "@/utils/data-service";
import Reservation from "@/components/reservations/Reservation";
import Spinner from "@/components/ui/Spinner";
import Cabin from "@/components/cabins/Cabin";

export async function generateMetadata({
  params: { cabinId },
}: CabinPageProps) {
  const cabin = await getCabin(+cabinId);
  return { title: `Cabin ${cabin?.name || "not found"}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const cabinIds = cabins.map((cabin) => ({ cabinId: cabin.id.toString() }));
  return cabinIds;
}

interface CabinPageProps {
  params: { cabinId: string };
}

export default async function CabinPage({
  params: { cabinId },
}: CabinPageProps) {
  const cabin = await getCabin(+cabinId);
  if (!cabin) notFound();

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Reserve cabin {cabin.name} today. Pay on arrival.
        </h2>
      </div>

      <Suspense fallback={<Spinner />}>
        <Reservation cabin={cabin} />
      </Suspense>
    </div>
  );
}
