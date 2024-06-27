import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";

import type { Cabin } from "@/types/cabins.types";
import { mainRoutes } from "@/routes";

interface CabinCardProps {
  cabin: Pick<
    Cabin,
    "id" | "name" | "maxCapacity" | "regularPrice" | "discount" | "image"
  >;
}

function CabinCard({ cabin }: CabinCardProps) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col border border-primary-800">
      <div className="relative min-h-52 flex-1">
        <Image
          src={image!}
          alt={`Cabin ${name}`}
          className="flex-1 border-r border-primary-800 object-cover"
          fill
        />
      </div>

      <div className="relative flex-grow">
        <div className="bg-primary-950 px-7 pb-4 pt-5">
          <h3 className="mb-3 text-2xl font-semibold text-accent-500">
            Cabin {name}
          </h3>

          <div className="mb-2 flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3">
            {discount! > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice! - discount!}
                </span>
                <span className="font-semibold text-primary-600 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="border-t border-t-primary-800 bg-primary-950 text-right">
          <Link
            href={`${mainRoutes.cabins.url}/${id}`}
            className="inline-block border-l border-primary-800 px-6 py-4 transition-all hover:bg-accent-600 hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
