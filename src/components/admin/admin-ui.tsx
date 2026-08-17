import Link from "next/link";
import type { ReactNode } from "react";

export function AdminHeading({
  title,
  backHref,
  actionHref,
  actionLabel,
}: {
  title: string;
  backHref?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <header className="flex items-end justify-between gap-4">
      <div>
        {backHref ? (
          <Link
            href={backHref}
            className="font-mono text-[9px] text-(--accent)"
          >
            ← Dashboard
          </Link>
        ) : (
          <p className="font-mono text-[9px] tracking-[0.18em] text-(--accent) uppercase">
            Admin
          </p>
        )}
        <h1 className="font-display mt-3 text-3xl font-semibold">{title}</h1>
      </div>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className="rounded bg-(--ink) px-5 py-3 text-xs font-semibold text-(--paper)"
        >
          + {actionLabel}
        </Link>
      ) : null}
    </header>
  );
}

export function AdminMain({
  children,
  narrow = false,
}: {
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <main
      className={`relative z-10 min-h-screen pt-28 pb-16 max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20 ${narrow ? "max-w-160" : ""}`}
    >
      {children}
    </main>
  );
}

export type AdminListItem = {
  eyebrow: string;
  title: string;
  meta: string;
  status?: string;
};

export function AdminList({
  items,
  emptyMessage = "No items match this filter.",
}: {
  items: readonly AdminListItem[];
  emptyMessage?: string;
}) {
  return (
    <div className="mt-7 border-t border-(--line)">
      {items.length === 0 ? (
        <div className="grid min-h-44 place-items-center border-b border-(--line) text-center">
          <p className="font-mono text-[10px] tracking-wide text-(--muted)">
            {emptyMessage}
          </p>
        </div>
      ) : null}
      {items.map((item) => (
        <article
          key={item.title}
          className="grid gap-2 border-b border-(--line) py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-8"
        >
          <div>
            <p className="font-mono text-[8px] tracking-wider text-(--accent) uppercase">
              ○ &nbsp;{item.eyebrow}
            </p>
            <h2 className="mt-2 text-sm font-semibold">{item.title}</h2>
          </div>
          {item.status ? (
            <span
              className={`font-mono text-[9px] ${item.status === "Draft" ? "text-amber-500" : "text-(--accent)"}`}
            >
              {item.status}
            </span>
          ) : (
            <span />
          )}
          <span className="font-mono text-[9px] text-(--muted)">
            {item.meta}
          </span>
        </article>
      ))}
    </div>
  );
}
