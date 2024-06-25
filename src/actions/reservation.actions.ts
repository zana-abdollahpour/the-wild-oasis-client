"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth } from "@/utils/auth";
import { accountPageRoutes, mainRoutes } from "@/routes";
import {
  createBooking,
  deleteBooking,
  ownsReservation,
  updateBooking,
} from "@/utils/data-service";
import type { Booking } from "@/types/bookings.types";
import type { SessionWithGuestId } from "@/types/auth.types";

export async function deleteReservationAction(bookingId: Booking["id"]) {
  const session = (await auth()) as SessionWithGuestId;
  if (!session) throw new Error("You must be logged in!");

  if (!(await ownsReservation(+session.user.guestId!, bookingId)))
    throw new Error("You can only delete your own reservations");

  await deleteBooking(bookingId);

  revalidatePath(accountPageRoutes.reservations.url);
}

export async function updateReservationAction(formData: FormData) {
  const session = (await auth()) as SessionWithGuestId;
  if (!session) throw new Error("You must be logged in!");

  const bookingId = +(formData.get("bookingId") as string);
  const numGuests = +(formData.get("numGuests") as string);
  const observations = formData.get("observations")?.slice(1000) as string;

  if (!(await ownsReservation(+session.user.guestId!, bookingId)))
    throw new Error("You can only update your own reservations");

  const updatedData = { numGuests, observations };

  await updateBooking(+bookingId, updatedData);

  revalidatePath(accountPageRoutes.reservations.url);
  revalidatePath(`${accountPageRoutes.reservations.url}/edit/${bookingId}`);

  redirect(accountPageRoutes.reservations.url);
}

export async function createReservationAction(
  bookingData: {
    startDate: Date;
    endDate: Date;
    numNights: number;
    cabinId: number;
    cabinPrice: number;
  },
  formData: FormData,
) {
  const session = (await auth()) as SessionWithGuestId;
  if (!session) throw new Error("You must be logged in!");

  const { startDate, endDate, numNights, cabinPrice, cabinId } = bookingData;

  const newBooking = {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    numNights,
    cabinPrice,
    cabinId,
    guestId: +session.user.guestId,
    numGuests: +(formData.get("numGuests") as string),
    observations: formData.get("observations")?.slice(1000) as string,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
    extrasPrice: 0,
  };

  await createBooking(newBooking);

  revalidatePath(`${mainRoutes.cabins.url}/${bookingData.cabinId}`);

  redirect(accountPageRoutes.thanks.url);
}
