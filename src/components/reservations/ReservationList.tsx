"use client";

import { useOptimistic } from "react";

import ReservationCard from "./ReservationCard";
import { deleteReservationAction } from "@/actions";
import type { Booking } from "@/types/bookings.types";

interface ReservationListProps {
  bookings: Booking[];
}

export default function ReservationList({ bookings }: ReservationListProps) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  const handleDelete = async (bookingId: Booking["id"]) => {
    optimisticDelete(bookingId);
    await deleteReservationAction(bookingId);
  };

  return (
    <>
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}
