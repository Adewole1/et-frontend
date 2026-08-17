import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/page-shell";
import {
  DataArtwork,
  FilterPills,
  PageHeading,
  Pagination,
} from "@/components/site/patterns";
import { insightPosts, publicNavigation } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Insights — Emmanuel Tobiloba" };

export default function InsightsPage() {
  return (
    <PageShell navigation={publicNavigation} activeId="/insights">
      <main className="relative z-10 min-h-screen pt-28 pb-12 max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <PageHeading
          eyebrow="All insights"
          title={
            <>
              Analysis, delivery notes &<br />
              ops playbooks
            </>
          }
          description="Writing on data strategy, project delivery, and the operations behind it."
        />

        <Link
          href="/insights/how-we-cut-disposition-time"
          className="mt-8 grid overflow-hidden rounded-xl border border-(--line) md:grid-cols-[.65fr_1.35fr]"
        >
          <DataArtwork className="min-h-48 rounded-none md:min-h-56">
            <span className="absolute top-4 left-4 rounded bg-white px-2 py-1 font-mono text-[8px] text-[#1c2530]">
              FEATURED
            </span>
          </DataArtwork>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="font-mono text-[9px] tracking-wider text-(--accent)">
              DATA STRATEGY
            </p>
            <h2 className="font-display mt-3 text-[clamp(1.35rem,2.4vw,2rem)] font-semibold">
              How we cut disposition time 27% without adding headcount
            </h2>
            <p className="mt-2 text-xs text-(--muted)">
              How queue ownership, event-level measurement, and a weekly
              operating rhythm changed the result.
            </p>
            <p className="mt-4 font-mono text-[9px] text-(--muted)">
              MAY 21, 2026 · 8 MIN READ
            </p>
            <span className="mt-4 text-xs font-semibold text-(--accent)">
              Read article →
            </span>
          </div>
        </Link>

        <div className="mt-7">
          <FilterPills
            items={[
              "All",
              "Data Strategy",
              "Data Engineering",
              "Analytics",
              "Data Ops",
            ]}
          />
        </div>
        <div className="mt-6 border-t border-(--line)">
          {insightPosts.map((post) => (
            <Link
              key={post.title}
              href="/insights/how-we-cut-disposition-time"
              className="grid gap-2 border-b border-(--line) py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-8"
            >
              <div>
                <p className="font-mono text-[8px] tracking-wider text-(--accent) uppercase">
                  {post.category}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{post.title}</h3>
              </div>
              <span className="font-mono text-[9px] text-(--muted)">
                {post.time}
              </span>
              <span className="font-mono text-[9px] text-(--muted)">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[9px] text-(--muted)">
            SHOWING 1-4 OF 11
          </p>
          <Pagination />
        </div>
      </main>
    </PageShell>
  );
}
