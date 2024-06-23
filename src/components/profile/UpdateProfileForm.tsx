"use client";

import { useState } from "react";
import Image from "next/image";

import { updateProfileAction } from "@/actions";

import type { Guest } from "@/types/guests.types";
import FormButton from "@/components/ui/FormButton";

interface UpdateProfileFormProps {
  children: React.ReactNode;
  guest: Guest;
}

export default function UpdateProfileForm({
  children,
  guest,
}: UpdateProfileFormProps) {
  const [count, setCount] = useState();
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateProfileAction}
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
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
            width={240}
            height={240}
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
