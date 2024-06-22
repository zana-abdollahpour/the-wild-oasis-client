import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "@/components/profile/LoginMessage";
import { getBookedDatesByCabinId, getSettings } from "@/utils/data-service";
import { auth } from "@/utils/auth";
import type { Cabin } from "@/types/cabins.types";

interface ReservationProps {
  cabin: Cabin;
}

export default async function Reservation({ cabin }: ReservationProps) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
