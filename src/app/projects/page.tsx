import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/page-shell";
import { DataArtwork, FilterPills, PageHeading, Pagination } from "@/components/site/patterns";
import { projects, publicNavigation } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Projects — Emmanuel Tobiloba" };

export default function ProjectsPage() {
  return (
    <PageShell navigation={publicNavigation} activeId="/projects">
      <main className="relative z-10 min-h-screen max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20 pt-[clamp(110px,22vh,190px)] pb-12">
        <PageHeading eyebrow="All projects" title="Selected case studies" description="Data and delivery work across supply chain, escalations, and logistics." />
        <div className="mt-7"><FilterPills items={["All", "Supply Chain", "Analytics", "Logistics"]} /></div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.title} href="/projects/supply-chain-optimization" className="overflow-hidden rounded-xl border border-(--line) bg-(--card)">
              <DataArtwork className="aspect-2/1 rounded-none" />
              <div className="p-5"><span className="rounded-full bg-(--accent-soft) px-3 py-1 font-mono text-[8px] text-(--accent)">{project.result}</span><h2 className="mt-4 text-sm font-semibold">{project.title}</h2><p className="mt-2 font-mono text-[9px] text-(--muted)">{project.tools}</p></div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><p className="font-mono text-[9px] text-(--muted)">SHOWING 1–3 OF 15</p><Pagination /></div>
      </main>
    </PageShell>
  );
}
