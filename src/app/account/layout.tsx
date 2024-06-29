import SideNavigation from "@/components/side-navigation/SideNavigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="scrollbar-hide relative -mx-6 -mt-8 grid h-full max-h-[calc(100vh_-_120px)] grid-cols-[4rem_1fr] gap-8 overflow-scroll xs:mx-0 md:grid-cols-[12rem_1fr] md:gap-16">
      <SideNavigation />
      <div className="scrollbar-hide overflow-scroll py-1">{children}</div>
    </div>
  );
}
