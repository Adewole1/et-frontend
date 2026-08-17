import Link from "next/link";
import { Eyebrow, Orbit, SectionNumber } from "./ui";

export default function InsightsSection() {
  return (
    <section
      id="insights"
      className="section-shell flex min-h-screen h-full flex-col justify-center"
    >
      <SectionNumber withDivider>03</SectionNumber>
      <Orbit className="animate-spin-slower pointer-events-none absolute -right-44 -bottom-48 size-105 opacity-30" />
      <div className="flex flex-col relative max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <Eyebrow>Insights</Eyebrow>
        <h2 className="font-display mt-2 mb-4 text-[clamp(1.8rem,3vw,2.3rem)] font-semibold md:mt-3 md:mb-7">
          Latest writing
        </h2>
        <article className="grid overflow-hidden rounded-xl border border-(--line) md:grid-cols-2">
          <div className="insight-art relative aspect-16/7 border-b border-(--line) md:aspect-4/3 md:border-r md:border-b-0">
            <span className="absolute top-3.5 left-3.5 rounded-[5px] bg-white px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-[#1c2530]">
              FEATURED
            </span>
            <svg
              aria-hidden="true"
              className="absolute inset-0 m-auto w-2/3 text-white/15"
              viewBox="0 0 300 180"
              fill="none"
            >
              <path
                d="M15 145 75 102l52 18 55-67 103 38"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M15 30v115h270" stroke="currentColor" />
              {[50, 100, 150, 200, 250].map((x) => (
                <path
                  key={x}
                  d={`M${x} 30v115`}
                  stroke="currentColor"
                  strokeDasharray="2 7"
                />
              ))}
            </svg>
          </div>
          <div className="flex flex-col justify-center p-5 md:p-8">
            <span className="font-mono text-[10px] tracking-[0.06em] text-(--accent) md:text-[11px]">
              DATA STRATEGY
            </span>
            <h3 className="font-display my-2 text-[clamp(1.25rem,2.5vw,1.7rem)] font-semibold leading-[1.3] md:my-3">
              How we cut disposition time 27% without adding headcount
            </h3>
            <p className="mb-3 font-mono text-[10px] text-(--muted) md:mb-5 md:text-[11px]">
              MAY 21, 2026 · 8 MIN READ
            </p>
            <Link
              href="/insights/how-we-cut-disposition-time"
              className="w-fit text-[13px] font-semibold text-(--accent)"
            >
              Read article →
            </Link>
          </div>
        </article>
        <Link
          href="/insights"
          className="mt-4 w-fit border-b border-(--accent) pb-1 text-[13px] font-semibold md:mt-8"
        >
          View all insights →
        </Link>
      </div>
    </section>
  );
}
