"use client";

import { useContext } from "react";

import { ReservationContext } from "@/contexts/reservationContext";

export const useReservation = () => {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context used outside of the Provider");

  return context!;
};
