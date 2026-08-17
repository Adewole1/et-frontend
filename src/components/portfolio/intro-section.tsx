import Image from "next/image";
import { useEffect, useState } from "react";
import { Orbit, SectionNumber } from "./ui";
import portrait from "@/assets/images/emmanuel-portrait.jpg";

const roles = ["Data Analyst", "Project Manager", "Operations Lead"];

export default function IntroSection({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRoleIndex((index) => (index + 1) % roles.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="intro"
      className="section-shell flex min-h-screen h-full flex-col justify-center"
    >
      <SectionNumber>01</SectionNumber>
      <div className="dot-field absolute top-24 left-0 h-40 w-40 opacity-70" />
      <Orbit className="animate-spin-slower pointer-events-none absolute -top-32 -right-40 size-140 opacity-55" />
      <span className="floating-plus absolute bottom-32 left-[7%] text-3xl font-extralight text-(--line)">
        +
      </span>
      <span className="absolute top-[34%] left-[4%] size-3 rotate-45 border border-(--accent) opacity-50" />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-15 h-55 w-105 opacity-50"
        viewBox="0 0 420 220"
        fill="none"
      >
        <path
          d="M0 180 L60 140 L120 160 L180 90 L240 120 L300 40 L360 70 L420 10"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-[dash-flow_6s_linear_infinite]"
        />
        <circle cx="180" cy="90" r="4" fill="var(--accent)" />
        <circle cx="300" cy="40" r="4" fill="var(--accent)" />
      </svg>

      <div className="relative grid items-end gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(230px,.7fr)] md:gap-14 max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <div>
          <div className="mb-3 flex items-center gap-2.5 font-mono text-[10px] tracking-[0.18em] text-(--accent) md:mb-5 md:text-[11px]">
            <span className="size-1.5 rounded-full bg-(--accent)" />
            HI, I&apos;M EMMANUEL
          </div>
          <h1 className="font-display mb-3 max-w-[14ch] text-[clamp(2.35rem,11vw,4.7rem)] font-semibold leading-[1.03] tracking-[-0.01em] md:mb-6">
            Turning complexity into clear decisions.
          </h1>
          <p className="role-window mb-3 h-6 font-mono text-sm text-(--muted) md:mb-5 md:text-base">
            <span key={roleIndex} className="role-in">
              {roles[roleIndex]}
            </span>
          </p>
          <p className="mb-4 max-w-[44ch] text-sm leading-[1.6] text-(--muted) md:mb-7 md:text-[15px] md:leading-[1.75]">
            I turn raw data and moving parts into systems that ship — dashboards
            leadership opens weekly, and projects that land on time.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("work")}
            className="cursor-pointer border-b-2 border-(--accent) pb-1 text-sm font-semibold"
          >
            View selected work →
          </button>
        </div>

        <div className="relative mx-auto hidden w-full max-w-85 md:block">
          <div className="relative aspect-3/4 overflow-hidden rounded-md">
            <Image
              src={portrait}
              alt="Portrait of Emmanuel Tobiloba"
              fill
              sizes="32vw"
              className="object-cover grayscale contrast-[1.08]"
              priority
            />
            <div className="absolute inset-0 bg-(--accent) opacity-25 mix-blend-multiply" />
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 border-t border-(--line) sm:grid-cols-4 md:mt-13 max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        {[
          ["$700K", "COST IMPACT"],
          ["98%", "ON-TIME DELIVERY"],
          ["100%", "SLA MET"],
          ["40", "TEAM SCALE"],
        ].map(([value, label], index) => (
          <div
            key={label}
            className={`relative py-2.5 sm:px-8 sm:py-0 ${
              index === 0 ? "pl-0 sm:pl-0" : ""
            } ${
              index % 2 === 1
                ? "border-l border-(--line) pl-4 sm:pl-8"
                : "pl-0"
            } ${index > 0 ? "sm:border-l sm:border-(--line)" : ""}`}
          >
            <span
              aria-hidden="true"
              className={`absolute top-[-4.5px] left-[-4.5px] size-2 rounded-full border bg-(--paper) ${
                index === 0 ? "border-(--accent)" : "border-(--line)"
              } ${index < 2 ? "block" : "hidden sm:block"}`}
            />
            <span
              className={`font-display mt-2 block text-[1.55rem] font-bold md:mt-4 md:text-[1.9rem] lg:mt-6 xl:mt-8 ${
                index === 0 ? "text-(--accent)" : "text-(--ink)"
              }`}
            >
              {value}
            </span>
            <span className="mt-1 block font-mono text-[9px] tracking-[0.08em] text-(--muted) md:mt-1.5 md:text-[10px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
