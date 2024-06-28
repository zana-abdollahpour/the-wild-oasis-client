import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

import DeleteReservation from "./DeleteReservation";
import { accountPageRoutes } from "@/routes";
import type { Booking } from "@/types/bookings.types";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

interface ReservationCardProps {
  booking: Booking;
  onDelete: (bookingId: number) => Promise<void>;
}

function ReservationCard({ booking, onDelete }: ReservationCardProps) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <li className="flex max-w-[36rem] flex-col border border-primary-800">
      <div className="relative aspect-square h-32 xs:h-[calc(128px_+_15vw)] md:h-56">
        <Image
          src={image!}
          alt={`Cabin ${name}`}
          className="border-r border-primary-800 object-cover"
          fill
        />
      </div>

      <div className="flex flex-grow flex-col px-6 py-3">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in <br /> Cabin {name}
          </h3>
          {isPast(new Date(startDate!)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
              upcoming
            </span>
          )}
        </div>

        <div className="mb-6 flex flex-col gap-1 text-lg text-primary-300">
          (
          {isToday(new Date(startDate!))
            ? "Today"
            : formatDistanceFromNow(startDate!)}
          )
          <br />
          <div className="flex items-center">
            <ArrowRightCircleIcon className="mr-1 inline-block w-6" />
            {format(new Date(startDate!), "EEE, MMM dd yyyy")}
          </div>
          <div className="flex items-center">
            <ArrowLeftCircleIcon className="mr-1 inline-block w-6" />
            {format(new Date(endDate!), "EEE, MMM dd yyyy")}
          </div>
        </div>

        <div className="mb-2 mt-auto flex items-baseline gap-5">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {numGuests} guest{numGuests! > 1 && "s"}
          </p>
        </div>
        <p className="mb-4 ml-auto text-sm text-primary-400">
          Booked {format(new Date(created_at!), "EEE, MMM dd yyyy, p")}
        </p>
      </div>

      <div className="flex">
        {isPast(startDate!) ? (
          <p className="flex-grow border border-primary-900 px-4 py-3 text-xs uppercase text-primary-300">
            this reservation is past
          </p>
        ) : (
          <>
            <Link
              href={`${accountPageRoutes.reservations.url}/edit/${id}`}
              className="group flex flex-grow items-center gap-2 border border-primary-900 px-4 py-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </li>
  );
}

export default ReservationCard;
