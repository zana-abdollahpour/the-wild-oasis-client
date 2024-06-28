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
    <div className="grid min-h-[400px] border border-primary-800 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <DateSelector
          settings={settings}
          bookedDates={bookedDates}
          cabin={cabin}
        />
      </div>
      <div className="bg-primary-800 lg:col-span-2">
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
