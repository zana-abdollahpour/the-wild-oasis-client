"use client";

import { differenceInDays } from "date-fns";
import type { User } from "next-auth";

import { useReservation } from "@/hooks/useReservation";
import { createReservationAction } from "@/actions/reservation.actions";
import type { Cabin } from "@/types/cabins.types";
import FormButton from "@/components/ui/FormButton";

interface ReservationFormProps {
  cabin: Cabin;
  user: User;
}

function ReservationForm({ cabin, user }: ReservationFormProps) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;

  const startDate = range.from!;
  const endDate = range.to!;
  const numNights = differenceInDays(endDate!, startDate!);

  const cabinPrice = numNights * (regularPrice! - discount!);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId,
  };

  const createReservationWithData = createReservationAction.bind(
    null,
    bookingData,
  );

  return (
    <div className="scale-[1.01]">
      <div className="flex items-center justify-between bg-primary-800 px-16 py-2 text-primary-300">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user.image!}
            alt={user.name!}
            className="h-8 rounded-full"
            referrerPolicy="no-referrer"
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createReservationWithData(formData);
          resetRange();
        }}
        className="flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity! }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          {startDate && endDate ? (
            <FormButton pendingContent="Reserving...">Reserve now</FormButton>
          ) : (
            <p className="text-base text-primary-300">
              Start by selecting dates
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
