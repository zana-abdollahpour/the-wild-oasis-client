import type { Database } from "./database.types";
import type { Cabin } from "./cabins.types";

export type Booking = Database["public"]["Tables"]["bookings"]["Row"] & {
  cabins: { name: Cabin["name"]; image: Cabin["image"] };
};
