import Link from "next/link";

import { mainRoutes } from "@/routes";

export default function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        This Cabin could not be found :(
      </h1>
      <Link
        href={mainRoutes.home.url}
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
      >
        Go back home
      </Link>
    </main>
  );
}
