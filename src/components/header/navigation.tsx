import Link from "next/link";

import { mainRoutes } from "@/routes";

export default function Navigation() {
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
          <Link
            href={mainRoutes.account.url}
            className="transition-colors hover:text-accent-400"
          >
            {mainRoutes.account.name}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
