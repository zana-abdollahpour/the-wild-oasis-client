"use client";

import { useState } from "react";

interface UpdateProfileFormProps {
  children: React.ReactNode;
}

export default function UpdateProfileForm({
  children,
}: UpdateProfileFormProps) {
  const [count, setCount] = useState();

  return (
    <form className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg">
      <div className="space-y-2">
        <label htmlFor="name">Full name</label>
        <input
          title="name"
          name="name"
          disabled
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email address</label>
        <input
          disabled
          name="email"
          title="email"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {/* <Image
          src={countryFlag}
          width={240}
          height={240}
          alt="Country flag"
          className="h-5 rounded-sm"
          /> */}
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          title="nationalID"
          name="nationalID"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <button
          type="submit"
          className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
          Update profile
        </button>
      </div>
    </form>
  );
}
