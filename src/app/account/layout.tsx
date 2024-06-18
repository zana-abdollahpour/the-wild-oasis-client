import SideNavigation from "@/components/side-navigation/SideNavigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
