import type { Cabin } from "./cabins.types";

export interface Booking {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: { name: Cabin["name"]; image: Cabin["image"] };
}
