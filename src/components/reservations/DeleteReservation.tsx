"use client";

import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import SpinnerMini from "../ui/SpinnerMini";
import type { Booking } from "@/types/bookings.types";

interface DeleteReservationProps {
  bookingId: Booking["id"];
  onDelete: (bookingId: number) => Promise<void>;
}

function DeleteReservation({ bookingId, onDelete }: DeleteReservationProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete your reservation?"))
      startTransition(() => onDelete(bookingId));
  };

  return (
    <button
      type="button"
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
      onClick={handleDelete}
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
