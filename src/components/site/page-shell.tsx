"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import CustomCursor from "@/components/portfolio/custom-cursor";
import Header from "@/components/portfolio/header";
import SectionNav, {
  type SectionNavItem,
} from "@/components/portfolio/section-nav";
import { PageDecorations } from "@/components/site/patterns";

type PageShellProps = {
  children: ReactNode;
  navigation: readonly SectionNavItem[];
  activeId?: string;
  className?: string;
};

export default function PageShell({
  children,
  navigation,
  activeId,
  className = "",
}: PageShellProps) {
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      <div
        className={`relative isolate min-h-screen overflow-x-hidden overflow-hidden bg-(--paper) font-sans text-(--ink) transition-colors duration-300 ${className}`}
      >
        <CustomCursor />
        <Header
          dark={dark}
          onHome={() => router.push("/")}
          onThemeChange={() => setDark((value) => !value)}
        />
        <SectionNav
          items={navigation}
          activeId={activeId ?? pathname}
          navigationId={pathname}
          onNavigate={(href) => router.push(href)}
        />
        <PageDecorations />
        {children}
      </div>
    </div>
  );
}
