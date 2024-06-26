import Image from "next/image";
import Link from "next/link";

import { mainRoutes } from "@/routes";

function Logo() {
  return (
    <Link href={mainRoutes.home.url} className="z-10 flex items-center gap-4">
      <Image
        src="/logo.png"
        height={64}
        width={64}
        alt="The Wild Oasis logo"
        className="min-w-16"
      />
      <span className="hidden text-xl font-semibold text-primary-100 sm:block">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
