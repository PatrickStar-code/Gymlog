import { SidebarDemo } from "@/components/sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarDemo>{children}</SidebarDemo>;
}
