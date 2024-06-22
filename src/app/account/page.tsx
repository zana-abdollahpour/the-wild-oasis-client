import type { Metadata } from "next";

import { auth } from "@/utils/auth";

export const metadata: Metadata = {
  title: "Guest Area",
};

export default async function AccountPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0]!;

  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {firstName}
    </h2>
  );
}
