import type { Session } from "next-auth";

// since we mutate session object in auth step, this type is required to work correctly
export type SessionWithGuestId = Session & { user: { guestId: string } };
