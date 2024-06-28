"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";

import { useReservation } from "@/hooks/useReservation";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 flex w-full max-w-72 -translate-x-1/2 items-center justify-between gap-4 rounded-full bg-accent-500 px-8 py-5 text-sm font-semibold text-primary-800 shadow-xl shadow-slate-900 sm:max-w-96 sm:px-12">
      <p>
        <ExclamationCircleIcon className="mb-1 mr-1 inline-block h-4" />
        Don&apos;f forget to reserve,
        <br /> from {format(new Date(range.from), "MMM dd yyyy")}
        <br /> to {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        title="close reminder"
        type="button"
        className="rounded-full p-1 transition-all hover:bg-accent-600"
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5 sm:h-7 sm:w-7" />
      </button>
    </div>
  );
}

export default ReservationReminder;
