import Image from "next/image";
import Link from "next/link";

import backgroundImage from "/public/bg.png";
import { mainRoutes } from "@/routes";

export default function Home() {
  return (
    <div className="mt-24 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:block before:bg-gradient-to-b before:from-primary-300 before:to-primary-950 before:opacity-25 before:content-['']">
      <Image
        src={backgroundImage}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
        placeholder="blur"
        quality={80}
        fill
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href={mainRoutes.cabins.url}
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
