import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArticleComments,
  ReadingProgress,
  ShareButton,
} from "@/components/insights/article-interactions";
import PageShell from "@/components/site/page-shell";
import { BackLink, DataArtwork } from "@/components/site/patterns";
import authorImage from "@/assets/images/et-face.png";
import { publicNavigation } from "@/lib/portfolio-data";

const articleTitle = "How we cut disposition time 27% without adding headcount";

export const metadata: Metadata = {
  title: `${articleTitle} — Emmanuel Tobiloba`,
  description:
    "A practical case study on mapping escalation paths, fixing queue ownership, and using an operating dashboard to reduce disposition time.",
};

export default function InsightDetailPage() {
  return (
    <PageShell navigation={publicNavigation} activeId="/insights">
      <ReadingProgress />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-300 px-6 pt-28 pb-20 md:px-10">
        <BackLink href="/insights">Insights</BackLink>

        <header className="mt-7 max-w-220">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] tracking-[0.12em] text-(--accent) uppercase">
            <span>Operations analytics</span>
            <span className="size-1 rounded-full bg-(--line)" />
            <span>8 min read</span>
            <span className="size-1 rounded-full bg-(--line)" />
            <time dateTime="2026-05-21">May 21, 2026</time>
          </div>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5.25rem)] font-semibold leading-[.96] tracking-[-0.025em]">
            {articleTitle}
          </h1>
          <p className="mt-6 max-w-[68ch] text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            The team did not have a capacity problem. It had a visibility and
            ownership problem hiding inside one comfortable average.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-y border-(--line) py-4">
            <div className="flex items-center gap-3">
              <Image
                src={authorImage}
                alt="Emmanuel Tobiloba"
                className="size-10 rounded-full border border-(--line) bg-(--card) object-cover"
              />
              <div>
                <strong className="block text-xs">Emmanuel Tobiloba</strong>
                <span className="font-mono text-[8px] text-(--muted)">
                  DATA ANALYST · PROJECT MANAGER
                </span>
              </div>
            </div>
            <ShareButton title={articleTitle} />
          </div>
        </header>

        <figure className="mt-8 max-w-260">
          <DataArtwork className="aspect-[16/8] rounded-xl">
            <div className="absolute top-5 left-5 font-mono text-[8px] tracking-[0.16em] text-white/60">
              DISPOSITION TIME / BEFORE → AFTER
            </div>
            <svg
              aria-hidden="true"
              className="absolute inset-x-[8%] bottom-[12%] h-[62%] w-[84%] text-white/75"
              viewBox="0 0 800 300"
              fill="none"
            >
              <path d="M20 260H780M20 60V260" stroke="currentColor" opacity=".25" />
              {[100, 180, 260, 340, 420, 500, 580, 660, 740].map((x) => (
                <path key={x} d={`M${x} 60V260`} stroke="currentColor" opacity=".12" strokeDasharray="2 8" />
              ))}
              <path d="M20 94 110 108l90 12 90 30 90 18 90 44 90 9 90 22 130 8" stroke="currentColor" strokeWidth="4" strokeDasharray="9 9" />
              <circle cx="20" cy="94" r="7" fill="white" />
              <circle cx="780" cy="251" r="7" fill="white" />
            </svg>
            <strong className="font-display absolute right-6 bottom-5 text-4xl text-white md:text-6xl">−27%</strong>
          </DataArtwork>
          <figcaption className="mt-3 font-mono text-[8px] leading-4 text-(--muted)">
            Figure 01 — Median disposition time after the new queue model and
            operating rhythm were introduced.
          </figcaption>
        </figure>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,760px)_190px] lg:gap-16">
          <div>
            <article className="wysiwyg-content">
              <p className="article-lead">
                Operations teams often drown in escalations that look unique but
                repeat the same handful of failure patterns. Our weekly report
                showed a stable average, yet customers and operators described a
                system that felt increasingly unpredictable.
              </p>

              <h2 id="average">The average was hiding the queue</h2>
              <p>
                The headline metric combined three very different intervals:
                time waiting for an owner, time spent investigating, and time
                waiting for a final decision. It told us how long a case lived,
                but not where that time went.
              </p>
              <p>
                We rebuilt the event history from raw status changes and assigned
                every interval to a stage. That immediately exposed the real
                constraint: cases were moving quickly once somebody worked them,
                but they sat between teams with no visible next owner.
              </p>

              <blockquote>
                <p>
                  “A metric becomes operational only when it tells someone what
                  to inspect, decide, or change next.”
                </p>
              </blockquote>

              <h2 id="map">Map the path before building the dashboard</h2>
              <p>
                Before writing dashboard requirements, we ran working sessions
                with operations, support, and the regional leads. Every handoff
                was placed on one path, including the unofficial ones happening
                in chat and spreadsheets.
              </p>

              <figure>
                <div className="rounded-xl border border-(--line) bg-(--card) p-5 sm:p-8">
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                    {[
                      ["01", "Intake", "Validate the case"],
                      ["02", "Investigate", "Assign cause + owner"],
                      ["03", "Disposition", "Make and record decision"],
                    ].map(([number, label, note], index) => (
                      <div key={label} className="contents">
                        <div className="rounded-lg border border-(--line) p-4">
                          <span className="font-mono text-[8px] text-(--accent)">{number}</span>
                          <strong className="mt-2 block text-sm">{label}</strong>
                          <span className="mt-1 block text-xs text-(--muted)">{note}</span>
                        </div>
                        {index < 2 ? <span className="hidden text-(--accent) sm:block">→</span> : null}
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption>
                  Figure 02 — The simplified path used to align event data with
                  real operational ownership.
                </figcaption>
              </figure>

              <h3>Three definitions made the model useful</h3>
              <ul>
                <li><strong>Queue time:</strong> the case is ready, but nobody is actively responsible for the next action.</li>
                <li><strong>Work time:</strong> an owner is investigating, validating, or completing the disposition.</li>
                <li><strong>Blocked time:</strong> progress depends on information or approval outside the owner&apos;s control.</li>
              </ul>

              <h2 id="measurement">Build a measurement layer people can challenge</h2>
              <p>
                We kept the first model deliberately small. Each number could be
                traced back to a status event, an owner, and a timestamp. That
                mattered more than adding another page of charts.
              </p>

              <table>
                <thead><tr><th>Measure</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
                <tbody>
                  <tr><td>Median disposition time</td><td>4.8 days</td><td>3.5 days</td><td>−27%</td></tr>
                  <tr><td>Cases without a named owner</td><td>31%</td><td>6%</td><td>−25 pts</td></tr>
                  <tr><td>Weekly manual reporting</td><td>14 hrs</td><td>2 hrs</td><td>−86%</td></tr>
                  <tr><td>Reopened cases</td><td>12%</td><td>8%</td><td>−4 pts</td></tr>
                </tbody>
              </table>

              <aside className="article-callout">
                <span>DESIGN NOTE</span>
                <p>
                  We used medians for the operating view and kept the 90th
                  percentile beside them. The median showed normal flow; the tail
                  showed where customer pain was accumulating.
                </p>
              </aside>

              <h2 id="rhythm">The dashboard needed an operating rhythm</h2>
              <p>
                Shipping the dashboard was the midpoint. Every Monday, regional
                owners reviewed the oldest unassigned cases. On Wednesday, the
                program lead reviewed repeated blockers. Friday&apos;s review focused
                only on decisions and experiments—not chart narration.
              </p>
              <ol>
                <li>Start with exceptions that crossed the agreed threshold.</li>
                <li>Name an owner and the next observable action.</li>
                <li>Record the decision in the case system, not meeting notes.</li>
                <li>Review whether the action changed the following week&apos;s distribution.</li>
              </ol>

              <figure>
                <DataArtwork className="aspect-[16/9] rounded-xl">
                  <div className="absolute top-5 left-5 font-mono text-[8px] tracking-wider text-white/55">WEEKLY QUEUE PROFILE</div>
                  <div className="absolute right-[8%] bottom-[16%] left-[8%] flex h-[58%] items-end gap-[3%]">
                    {[82, 73, 69, 61, 56, 44, 38, 31].map((height, index) => (
                      <span key={height} className="relative flex-1 border-t border-white/70 bg-white/10" style={{ height: `${height}%` }}>
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[7px] text-white/40">W{index + 1}</span>
                      </span>
                    ))}
                  </div>
                </DataArtwork>
                <figcaption>
                  Figure 03 — The long tail contracted as unowned work became
                  visible in the weekly review.
                </figcaption>
              </figure>

              <h2 id="result">What changed—and what did not</h2>
              <p>
                Median disposition time fell 27% in the first quarter. Manual
                reporting dropped by twelve hours a week, and teams reopened fewer
                cases because final decisions carried clearer reason codes.
              </p>
              <p>
                We did not add headcount, automate judgment, or create a more
                aggressive SLA. The improvement came from making queue time,
                ownership, and exceptions visible at the moment a team could act.
              </p>

              <blockquote>
                <p>
                  “The dashboard worked because it became part of the meeting
                  where ownership changed hands—not because it contained more
                  charts.”
                </p>
                <cite>— Program operations lead</cite>
              </blockquote>

              <h2 id="takeaways">Takeaways</h2>
              <ul>
                <li>Decompose duration before trying to reduce it.</li>
                <li>Model ownership as carefully as status.</li>
                <li>Keep every metric traceable to an operational event.</li>
                <li>Design the review rhythm alongside the dashboard.</li>
                <li>Use the tail of the distribution to protect the customer experience.</li>
              </ul>
              <p>
                Good analytics does not end at explanation. It creates a shared
                view of the system, makes the next decision easier, and helps the
                team learn whether that decision worked.
              </p>
            </article>

            <footer className="mt-12 border-y border-(--line) py-7">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex flex-wrap gap-2">
                  {["Data strategy", "Operations", "Analytics", "Delivery"].map((tag) => (
                    <span key={tag} className="rounded-full bg-(--accent-soft) px-3 py-1 font-mono text-[8px] text-(--accent)">{tag}</span>
                  ))}
                </div>
                <ShareButton title={articleTitle} />
              </div>
            </footer>

            <section className="mt-10 flex gap-4 rounded-xl border border-(--line) bg-(--card) p-5 sm:p-7">
              <Image src={authorImage} alt="Emmanuel Tobiloba" className="size-14 shrink-0 rounded-full bg-(--paper) object-cover" />
              <div>
                <p className="font-mono text-[8px] tracking-wider text-(--accent) uppercase">Written by</p>
                <h2 className="font-display mt-1 text-xl font-semibold">Emmanuel Tobiloba</h2>
                <p className="mt-2 text-sm leading-6 text-(--muted)">Data analyst, project manager, and operations lead writing about the systems behind clearer decisions and dependable delivery.</p>
              </div>
            </section>

            <ArticleComments />
          </div>

          <aside className="order-first h-fit border-l border-(--line) pl-5 lg:order-last lg:mt-2">
            <p className="font-mono text-[8px] tracking-[0.15em] text-(--accent) uppercase">In this article</p>
            <nav className="mt-4 flex flex-col gap-3 font-mono text-[9px] leading-4 text-(--muted)" aria-label="Table of contents">
              <a href="#average" className="hover:text-(--accent)">01 / The hidden queue</a>
              <a href="#map" className="hover:text-(--accent)">02 / Map the path</a>
              <a href="#measurement" className="hover:text-(--accent)">03 / Measurement layer</a>
              <a href="#rhythm" className="hover:text-(--accent)">04 / Operating rhythm</a>
              <a href="#result" className="hover:text-(--accent)">05 / The result</a>
              <a href="#takeaways" className="hover:text-(--accent)">06 / Takeaways</a>
            </nav>
            <div className="mt-7 border-t border-(--line) pt-5">
              <p className="font-mono text-[8px] leading-4 text-(--muted)">2,431 views<br />Last updated May 24</p>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t border-(--line) pt-8">
          <p className="font-mono text-[9px] tracking-wider text-(--accent) uppercase">Keep reading</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Link href="/insights" className="rounded-xl border border-(--line) bg-(--card) p-5 transition hover:border-(--accent)">
              <span className="font-mono text-[8px] text-(--muted)">DATA ENGINEERING · 6 MIN</span>
              <h2 className="font-display mt-3 text-xl font-semibold">Designing data pipelines for reliability and scale</h2>
            </Link>
            <Link href="/insights" className="rounded-xl border border-(--line) bg-(--card) p-5 transition hover:border-(--accent)">
              <span className="font-mono text-[8px] text-(--muted)">ANALYTICS · 7 MIN</span>
              <h2 className="font-display mt-3 text-xl font-semibold">Cohort analysis that reveals what dashboards miss</h2>
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
