import Link from "next/link";

import { routes } from "@/routes";
import { capitalize } from "@/utils";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href={routes.cabins}
            className="transition-colors hover:text-accent-400"
          >
            {capitalize(routes.cabins)}
          </Link>
        </li>
        <li>
          <Link
            href={routes.about}
            className="transition-colors hover:text-accent-400"
          >
            {capitalize(routes.about)}
          </Link>
        </li>
        <li>
          <Link
            href={routes.account}
            className="transition-colors hover:text-accent-400"
          >
            {capitalize(routes.account)}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
