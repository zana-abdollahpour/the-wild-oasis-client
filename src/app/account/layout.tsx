import SideNavigation from "@/components/side-navigation/SideNavigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="-mx-6 grid h-full grid-cols-[4rem_1fr] gap-8 xs:mx-0 md:grid-cols-[12rem_1fr] md:gap-16">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
