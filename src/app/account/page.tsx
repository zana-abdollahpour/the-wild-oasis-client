import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Area",
};

export default function AccountPage() {
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, Zana
    </h2>
  );
}
