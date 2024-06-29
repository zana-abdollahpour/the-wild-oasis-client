import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/header";
import { ReservationProvider } from "@/contexts/reservationContext";

export const metadata: Metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "By Zana Abdollahpour - Luxurious cabin hotel, located in Champaraw, surrounded by beautiful mountains and dark forests",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className="grid flex-1 px-8 pb-0 pt-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
