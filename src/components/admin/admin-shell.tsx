import type { ReactNode } from "react";
import PageShell from "@/components/site/page-shell";
import { adminNavigation } from "@/lib/portfolio-data";

export default function AdminShell({ children, activeId = "/admin" }: { children: ReactNode; activeId?: string }) {
  return <PageShell navigation={adminNavigation} activeId={activeId}>{children}</PageShell>;
}
