"use client";

import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { DateRange } from "react-day-picker";

interface ReservationContextType {
  range: DateRange;
  setRange: Dispatch<SetStateAction<DateRange>>;
  resetRange: () => void;
}

const initialState = {
  from: undefined,
  to: undefined,
};

export const ReservationContext = createContext<ReservationContextType | null>(
  null,
);

export const ReservationProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [range, setRange] = useState<DateRange>(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
};
