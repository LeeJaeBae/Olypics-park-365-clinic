"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PageNavigation from "@/components/layout/PageNavigation";
import ScrollButtons from "@/components/ui/ScrollButtons";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/hero";

  return (
    <>
      <Header />
      {children}
      {!isHomePage && <PageNavigation />}
      {!isHomePage && <Footer />}
      {!isHomePage && <ScrollButtons />}
    </>
  );
}