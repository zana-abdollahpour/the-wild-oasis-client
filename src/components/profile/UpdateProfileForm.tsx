import Image from "next/image";

import { updateProfileAction } from "@/actions";
import FormButton from "@/components/ui/FormButton";
import type { Guest } from "@/types/guests.types";

interface UpdateProfileFormProps {
  children: React.ReactNode;
  guest: Guest;
}

export default function UpdateProfileForm({
  children,
  guest,
}: UpdateProfileFormProps) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateProfileAction}
      className="flex flex-col gap-6 bg-primary-900 px-4 py-2 text-lg sm:px-12 sm:py-8"
    >
      <div className="space-y-2">
        <label htmlFor="fullName">Full name</label>
        <input
          title="fullName"
          name="fullName"
          disabled
          defaultValue={fullName!}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email address</label>
        <input
          disabled
          defaultValue={email!}
          name="email"
          title="email"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            src={countryFlag! || ""}
            width={24}
            height={24}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          title="nationalID"
          name="nationalID"
          defaultValue={nationalID!}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <FormButton pendingContent="updating...">Update profile</FormButton>
      </div>
    </form>
  );
}
