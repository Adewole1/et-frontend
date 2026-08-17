import type { ReactNode } from "react";

export function Orbit({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 560 560" fill="none">
      <circle cx="280" cy="280" r="270" stroke="var(--line)" />
      <circle cx="280" cy="280" r="200" stroke="var(--line)" strokeDasharray="2 10" />
      <circle cx="280" cy="280" r="130" stroke="var(--accent)" strokeWidth="1.4" />
      <path d="M280 10v40M280 550v-40M10 280h40" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}

export function SectionNumber({
  children,
  withDivider = false,
}: {
  children: ReactNode;
  withDivider?: boolean;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute top-0 right-6 z-1 text-[min(22vw,15rem)] font-bold leading-none text-(--ink) opacity-[0.07] md:right-10"
      >
        {children}
      </span>
      {withDivider ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[min(22vw,15rem)] right-0 left-0 h-px bg-(--line)"
        />
      ) : null}
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.18em] text-(--accent) uppercase">
      {children}
    </p>
  );
}
