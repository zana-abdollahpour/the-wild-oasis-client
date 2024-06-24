import { auth } from "@/utils/auth";
import FormButton from "@/components/ui/FormButton";
import { getBooking, getCabin, ownsReservation } from "@/utils/data-service";
import { updateReservationAction } from "@/actions/reservation.actions";
import type { SessionWithGuestId } from "@/types/auth.types";

interface ReservationEditPageProps {
  params: { bookingId: string };
  searchParams: Record<string, string>;
}

export default async function ReservationEditPage({
  params: { bookingId },
}: ReservationEditPageProps) {
  const session = (await auth()) as SessionWithGuestId;
  const isReservationOwner = await ownsReservation(
    +session.user.guestId!,
    +bookingId,
  );

  if (!isReservationOwner)
    return <p>You can only edit your own reservations</p>;

  const { cabinId, numGuests, observations } = await getBooking(+bookingId);
  const { maxCapacity } = await getCabin(cabinId!);

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateReservationAction}
        className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            defaultValue={numGuests!}
            required
          >
            +
            <option value="" key="" disabled>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity! }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            title="observations"
            name="observations"
            defaultValue={observations!}
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          />
        </div>

        <div className="hidden">
          <input
            type="hidden"
            title="bookingId"
            name="bookingId"
            value={bookingId}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <FormButton pendingContent="updating...">
            Update reservation
          </FormButton>
        </div>
      </form>
    </div>
  );
}
