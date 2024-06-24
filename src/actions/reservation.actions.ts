"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/utils/auth";
import { deleteBooking, getBookings } from "@/utils/data-service";
import { accountPageRoutes } from "@/routes";
import type { Booking } from "@/types/bookings.types";
import type { SessionWithGuestId } from "@/types/auth.types";

export async function deleteReservationAction(bookingId: Booking["id"]) {
  const session = (await auth()) as SessionWithGuestId;
  if (!session) throw new Error("You must be logged in!");

  const guestBookings = await getBookings(+session.user.guestId!);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You can only delete your own reservations");

  await deleteBooking(bookingId);

  revalidatePath(accountPageRoutes.reservations.url);
}
