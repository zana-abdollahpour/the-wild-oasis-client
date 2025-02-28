"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { accountPageRoutes } from "@/routes";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: accountPageRoutes.home.name,
    url: accountPageRoutes.home.url,
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: accountPageRoutes.reservations.name,
    url: accountPageRoutes.reservations.url,
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: accountPageRoutes.guestProfile.name,
    url: accountPageRoutes.guestProfile.url,
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();

  return (
    <nav className="!sticky top-4 w-fit border-r border-primary-900">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li className="w-fit md:w-full" key={link.name}>
            <Link
              className={`flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-all hover:bg-primary-900 hover:text-primary-100 ${pathName === link.url ? "bg-primary-900" : ""}`}
              href={link.url}
            >
              {link.icon}
              <span className="hidden md:block">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
