import Link from "next/link";
import { Eyebrow, SectionNumber } from "./ui";

const projects = [
  {
    title: "Supply chain optimization",
    tools: "SQL · Python · Tableau",
    result: "−22% cycle time",
  },
  {
    title: "Escalation analytics",
    tools: "Power BI · Excel",
    result: "340 hrs saved",
  },
  {
    title: "Logistics program",
    tools: "Python · Looker",
    result: "+35% visibility",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="section-shell flex min-h-screen h-full flex-col justify-center"
    >
      <SectionNumber withDivider>02</SectionNumber>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-15 right-15 h-7.5 w-22.5 opacity-55"
        viewBox="0 0 90 30"
        fill="none"
      >
        <path
          d="M0 15 L15 0 M10 30 L30 0 M25 30 L45 0 M40 30 L60 0 M55 30 L75 0 M70 30 L90 0"
          stroke="var(--line)"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-35 size-4 rotate-20 opacity-50"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M8 0 L16 8 L8 16 L0 8 Z" stroke="var(--accent)" />
      </svg>
      <svg
        aria-hidden="true"
        className="animate-spin-slower pointer-events-none absolute -top-15 -right-25 size-90 opacity-40"
        viewBox="0 0 360 360"
        fill="none"
      >
        <circle
          cx="180"
          cy="180"
          r="170"
          stroke="var(--line)"
          strokeDasharray="1 12"
        />
        <path
          d="M180 20 L180 60 M340 180 L300 180 M180 340 L180 300 M20 180 L60 180"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 h-20 w-35 opacity-45"
        viewBox="0 0 140 80"
        fill="none"
      >
        <path
          d="M0 60 L20 40 L40 55 L60 20 L80 35 L100 5 L120 25 L140 10"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="5 5"
          className="animate-[dash-flow_5s_linear_infinite]"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-62.5 right-10 h-px w-30 opacity-40"
        viewBox="0 0 120 1"
      >
        <line
          x1="0"
          y1="0.5"
          x2="120"
          y2="0.5"
          stroke="var(--line)"
          strokeDasharray="3 5"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-[40%] size-7.5 opacity-40"
        viewBox="0 0 30 30"
        fill="none"
      >
        <circle cx="15" cy="15" r="14" stroke="var(--line)" />
        <circle cx="15" cy="15" r="2" fill="var(--accent)" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-27.5 left-5 size-2.5 opacity-55"
        viewBox="0 0 10 10"
        fill="none"
      >
        <rect
          width="10"
          height="10"
          stroke="var(--line)"
          transform="rotate(45 5 5)"
        />
      </svg>
      <div className="flex flex-col relative max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="font-display mt-3 text-[clamp(1.8rem,3vw,2.3rem)] font-semibold">
          Recent case studies
        </h2>
        <div className="relative mt-5 md:mt-7">
          <span className="absolute top-10 bottom-10 left-[9.5px] w-px bg-(--line)" />
          {projects.map((project, index) => (
            <Link
              href="/projects/supply-chain-optimization"
              key={project.title}
              className="group flex flex-wrap items-start justify-between gap-3 border-t border-(--line) py-4 md:gap-5 md:py-6 last:border-b"
            >
              <div className="flex min-w-55 flex-1 items-start gap-5">
                <span
                  className={`relative z-10 mt-1 grid size-5 shrink-0 place-items-center rounded-full border-[1.5px] bg-(--paper) font-mono text-[9px] ${index === 0 ? "border-(--accent) text-(--accent)" : "border-(--line) text-(--muted)"}`}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-[1.25rem] font-semibold transition group-hover:text-(--accent) md:text-[1.35rem]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] text-(--muted) md:mt-2 md:text-[11px]">
                    {project.tools}
                  </p>
                </div>
              </div>
              <span className="pl-10 font-mono text-[11px] whitespace-nowrap text-(--accent) md:pl-0 md:text-xs">
                {project.result}
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 w-fit border-b border-(--accent) pb-1 text-[13px] font-semibold md:mt-8"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
