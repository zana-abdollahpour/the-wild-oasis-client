import Link from "next/link";
import type { Metadata } from "next";

import { mainRoutes } from "@/routes";
import { getBookings } from "@/utils/data-service";
import { auth } from "@/utils/auth";
import ReservationList from "@/components/reservations/ReservationList";
import type { SessionWithGuestId } from "@/types/auth.types";
import type { Booking } from "@/types/bookings.types";

export const metadata: Metadata = {
  title: "Reservations",
};

export default async function ReservationsPage() {
  const session = (await auth()) as SessionWithGuestId;
  const bookings = (await getBookings(+session?.user.guestId)) as Booking[];

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link
            className="text-accent-500 underline"
            href={mainRoutes.cabins.url}
          >
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          <ReservationList bookings={bookings} />
        </ul>
      )}
    </div>
  );
}
