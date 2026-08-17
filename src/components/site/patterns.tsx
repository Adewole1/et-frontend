"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <header>
      <p className="font-mono text-[10px] tracking-[0.18em] text-(--accent) uppercase">
        ● {eyebrow}
      </p>
      <h1 className="font-display mt-3 max-w-190 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[.96] tracking-[-0.02em]">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-155 text-sm leading-6 text-(--muted)">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function DataArtwork({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`insight-art relative overflow-hidden rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}

export function FilterPills({
  items,
  activeItem = items[0],
  onChange,
}: {
  items: readonly string[];
  activeItem?: string;
  onChange?: (item: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Filter list">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={item === activeItem}
          onClick={onChange ? () => onChange(item) : undefined}
          className={`rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-wide transition duration-200 hover:border-(--accent) hover:text-(--accent) ${item === activeItem ? "border-(--accent) bg-(--accent-soft) text-(--accent)" : "border-(--line) bg-(--paper) text-(--muted)"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function Pagination({
  count = 3,
  currentPage = 1,
  onPageChange,
}: {
  count?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}) {
  const selectPage = (page: number) => {
    if (page >= 1 && page <= count) onPageChange?.(page);
  };

  return (
    <nav
      className="flex items-center gap-2 font-mono text-[10px] text-(--muted)"
      aria-label="Pagination"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => selectPage(currentPage - 1)}
        className="grid size-7 place-items-center rounded border border-(--line) transition hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-35"
      >
        ‹
      </button>
      {Array.from({ length: count }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          onClick={() => selectPage(page)}
          className={`grid size-7 place-items-center rounded border transition hover:border-(--accent) hover:text-(--accent) ${page === currentPage ? "border-(--accent) bg-(--accent-soft) text-(--accent)" : "border-(--line)"}`}
        >
          {String(page).padStart(2, "0")}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === count}
        onClick={() => selectPage(currentPage + 1)}
        className="grid size-7 place-items-center rounded border border-(--line) transition hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-35"
      >
        ›
      </button>
    </nav>
  );
}

export function BackLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="font-mono text-[10px] text-(--accent)">
      ← {children}
    </Link>
  );
}

export function PageDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="dot-field absolute top-24 -left-14 h-36 w-36 opacity-55" />
      <svg
        className="animate-spin-slower absolute -top-32 -right-32 size-96 opacity-45"
        viewBox="0 0 384 384"
        fill="none"
      >
        <circle cx="192" cy="192" r="178" stroke="var(--line)" />
        <circle
          cx="192"
          cy="192"
          r="126"
          stroke="var(--accent)"
          strokeDasharray="2 11"
        />
        <path
          d="M192 0v54M384 192h-54M192 384v-54M0 192h54"
          stroke="var(--accent)"
        />
        <circle cx="318" cy="192" r="5" fill="var(--accent)" />
      </svg>
      <svg
        className="absolute top-[38%] -left-8 hidden h-32 w-56 opacity-40 sm:block"
        viewBox="0 0 224 128"
        fill="none"
      >
        <path
          d="M0 108 38 76l32 18 42-58 42 26 38-47 32 19"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          className="animate-[dash-flow_7s_linear_infinite]"
        />
        <circle
          cx="112"
          cy="36"
          r="4"
          fill="var(--paper)"
          stroke="var(--accent)"
        />
        <circle
          cx="192"
          cy="15"
          r="4"
          fill="var(--paper)"
          stroke="var(--accent)"
        />
      </svg>
      <span className="floating-plus absolute top-[48%] right-[7%] text-4xl font-extralight text-(--line)">
        +
      </span>
      <span className="absolute top-[63%] left-[12%] size-3 rotate-45 border border-(--accent) opacity-45" />
      <div className="grid-field absolute right-5 bottom-3 h-44 w-44 opacity-45" />
      <svg
        className="absolute right-[13%] bottom-10 h-24 w-44 opacity-40"
        viewBox="0 0 176 96"
        fill="none"
      >
        <path
          d="M2 62c21-44 43 33 66-5s40 27 59-9 31 10 47-20"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className="animate-[dash-flow_6s_linear_infinite]"
        />
      </svg>
      <div className="absolute bottom-10 left-8 flex items-center gap-2 opacity-45">
        <span className="h-px w-16 bg-(--line)" />
        <span className="size-2 rounded-full bg-(--accent)" />
        <span className="h-px w-8 bg-(--line)" />
      </div>
    </div>
  );
}
