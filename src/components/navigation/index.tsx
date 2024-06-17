import Link from "next/link";

import { routes } from "@/routes";
import { capitalize } from "@/utils";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href={routes.home}>Home</Link>
      </li>
      <li>
        <Link href={routes.cabins}>{capitalize(routes.cabins)}</Link>
      </li>
      <li>
        <Link href={routes.about}>{capitalize(routes.about)}</Link>
      </li>
      <li>
        <Link href={routes.account}>{capitalize(routes.account)}</Link>
      </li>
    </ul>
  );
}
