import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

import TextExpander from "@/components/cabins/TextExpander";
import type { Cabin } from "@/types/cabins.types";

interface CabinProps {
  cabin: Cabin;
}

export default function Cabin({ cabin }: CabinProps) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="mb-24 grid grid-cols-1 gap-20 border border-primary-800 px-10 py-3 lg:grid-cols-[3fr_4fr]">
      <div className="relative min-h-80 scale-[1.15] sm:scale-110 lg:-translate-x-3">
        <Image
          src={image!}
          className="object-cover"
          alt={`Cabin ${name}`}
          fill
        />
      </div>

      <div>
        <h3 className="w-fit -translate-y-28 bg-primary-950 p-2 pb-1 text-3xl font-black text-accent-100 sm:-translate-y-40 sm:p-4 sm:text-5xl lg:mb-5 lg:w-[150%] lg:translate-x-[-254px] lg:translate-y-0 lg:p-6 lg:text-7xl">
          Cabin {name}
        </h3>

        <p className="-mt-16 mb-10 text-lg text-primary-300 sm:-mt-28 lg:mt-0">
          <TextExpander>{description!}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-6 sm:gap-4">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg leading-snug">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg leading-snug">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg leading-snug">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
