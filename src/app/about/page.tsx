import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import image1 from "/public/about-1.jpg";
import image2 from "/public/about-2.jpg";
import { mainRoutes } from "@/routes";
import { getCabins } from "@/utils/data-service";
import { ABOUT_PAGE_REVALIDATION } from "@/constants/revalidations";

export const metadata: Metadata = {
  title: "About us",
};

export const revalidate = ABOUT_PAGE_REVALIDATION;

export default async function AboutPage() {
  const cabins = await getCabins();
  const numCabins = cabins.length;

  return (
    <div className="grid grid-cols-5 justify-items-center pb-12 text-lg lg:items-center lg:gap-x-24 lg:gap-y-32">
      <div className="col-span-5 mb-6 max-w-[38rem] lg:col-span-3 lg:max-w-full">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {numCabins} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-5 mb-12 max-w-[38rem] lg:col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          quality={80}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="col-span-5 mb-6 max-w-[38rem] lg:col-span-2">
        <Image
          src={image2}
          placeholder="blur"
          quality={80}
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-5 max-w-[38rem] lg:col-span-3 lg:max-w-full">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <Link
              href={mainRoutes.cabins.url}
              className="mx-auto mt-4 block w-fit bg-accent-500 px-8 py-5 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
