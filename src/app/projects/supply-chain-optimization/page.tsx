import type { Metadata } from "next";
import PageShell from "@/components/site/page-shell";
import { BackLink, DataArtwork } from "@/components/site/patterns";
import { publicNavigation } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Supply chain optimization — Emmanuel Tobiloba" };

export default function ProjectDetailPage() {
  return (
    <PageShell navigation={publicNavigation} activeId="/projects">
      <div className="pointer-events-none absolute -top-28 -left-28 size-52 rounded-full border border-(--accent) opacity-50" />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-[760px] px-7 pt-28 pb-16">
        <BackLink href="/projects">Projects</BackLink>
        <div className="mt-5 grid gap-6 md:grid-cols-[1fr_130px]">
          <div><p className="font-mono text-[9px] tracking-[0.16em] text-(--accent)">SUPPLY CHAIN · SQL · PYTHON · TABLEAU</p><h1 className="font-display mt-3 text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-none">Supply chain optimization</h1><p className="mt-4 font-mono text-[10px] text-(--muted)">6-month engagement · Ops & analytics</p></div>
          <div className="h-fit rounded-lg border border-(--line) p-4"><p className="font-mono text-[8px] text-(--muted)">RESULT</p><strong className="font-display mt-2 block text-3xl text-(--accent)">−22%</strong><p className="font-mono text-[8px] text-(--muted)">CYCLE TIME</p><div className="mt-4 flex h-12 items-end gap-2">{[20, 24, 44, 27].map((height, index) => <span key={index} style={{ height }} className="flex-1 bg-(--accent) opacity-70" />)}</div></div>
        </div>
        <DataArtwork className="mt-6 aspect-[16/9]"><div className="absolute bottom-8 left-8 flex items-end gap-2">{[20, 34, 45, 58].map((height, index) => <span key={index} style={{ height }} className="w-3 bg-white/55" />)}</div></DataArtwork>
        <article className="mt-6 space-y-5 text-[15px] leading-7"><p>A mid-size distributor was losing visibility into cycle times across three regional warehouses. We built a unified data model, automated the reporting layer, and rebuilt the escalation workflow around it.</p><p>Cycle time dropped 22% within the first quarter, and the dashboard became the team&apos;s single source of truth for weekly ops reviews.</p></article>
      </main>
    </PageShell>
  );
}
