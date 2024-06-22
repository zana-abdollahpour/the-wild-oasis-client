import Link from "next/link";

import { mainRoutes } from "@/routes";
import { auth } from "@/utils/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href={mainRoutes.cabins.url}
            className="transition-colors hover:text-accent-400"
          >
            {mainRoutes.cabins.name}
          </Link>
        </li>
        <li>
          <Link
            href={mainRoutes.about.url}
            className="transition-colors hover:text-accent-400"
          >
            {mainRoutes.about.name}
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href={mainRoutes.account.url}
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={session?.user?.image!}
                className="h-8 w-8 rounded-full"
                alt={session?.user?.name || "user"}
                referrerPolicy="no-referrer"
              />
              <span>{mainRoutes.account.name}</span>
            </Link>
          ) : (
            <Link
              href={mainRoutes.account.url}
              className="transition-colors hover:text-accent-400"
            >
              {mainRoutes.account.name}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
