"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useReservation } from "@/hooks/useReservation";
import type { Settings } from "@/types/settings.types";
import type { Cabin } from "@/types/cabins.types";

function isAlreadyBooked(range: DateRange, datesArr: Date[]) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date: Date) =>
      isWithinInterval(date, { start: range.from!, end: range.to! }),
    )
  );
}

interface DateSelectorProps {
  settings: Settings;
  bookedDates: Date[];
  cabin: Cabin;
}

function DateSelector({ settings, bookedDates, cabin }: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange: DateRange = isAlreadyBooked(range, bookedDates)
    ? { from: undefined, to: undefined }
    : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to!, displayRange.from!);
  const cabinPrice = numNights * (regularPrice! - discount!);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between gap-8">
      <DayPicker
        className="place-self-center pt-12"
        mode="range"
        min={minBookingLength! + 1}
        max={maxBookingLength!}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        selected={displayRange}
        onSelect={(range) => setRange(range!)}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex min-h-20 items-end justify-between bg-accent-500 px-8 py-2 pb-8 text-primary-800 sm:flex-row sm:items-center">
        <div className="flex flex-col items-baseline gap-6 sm:flex-row">
          <p className="flex items-baseline gap-2">
            {discount! > 0 ? (
              <>
                <span className="text-lg sm:text-2xl">
                  ${regularPrice! - discount!}
                </span>
                <span className="font-semibold text-primary-700 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>
          {numNights ? (
            <div className="flex items-center gap-4">
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;{numNights}</span>
              </p>
              <p className="leading-tight">
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </div>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            type="button"
            className="border border-primary-800 px-6 py-3 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
