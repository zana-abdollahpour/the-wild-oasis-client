import type { Metadata } from "next";

import { signInAction } from "@/actions";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <form action={signInAction}>
        <button
          type="submit"
          className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
}
