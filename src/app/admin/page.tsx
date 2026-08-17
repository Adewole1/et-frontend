import type { Metadata } from "next";
import Link from "next/link";
import AdminShell from "@/components/admin/admin-shell";
import { AdminHeading, AdminMain } from "@/components/admin/admin-ui";

export const metadata: Metadata = { title: "Dashboard — Emmanuel Tobiloba" };

const stats = [
  ["2,431", "Visitors", "+18.2%"],
  ["12", "Posts", "+20%"],
  ["847", "Subscribers", "+14.7%"],
  ["15", "Projects", "+11.3%"],
];
const actions = [
  { label: "New post", href: "/admin/insights/new", pattern: "diagonal-field" },
  { label: "New project", href: "/admin/projects/new", pattern: "dot-field" },
  {
    label: "Send newsletter",
    href: "/admin/newsletter/new",
    pattern: "grid-field",
  },
];

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <AdminMain>
        <AdminHeading title="Dashboard" />
        <section className="mt-8 grid overflow-hidden rounded-lg border border-(--line) sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label, change]) => (
            <div
              key={label}
              className="min-h-36 border-b border-(--line) p-6 sm:border-r lg:border-b-0 last:border-r-0"
            >
              <strong className="font-display text-3xl">{value}</strong>
              <p className="mt-2 font-mono text-[8px] tracking-wider text-(--muted) uppercase">
                {label} · <span className="text-(--accent)">{change}</span>
              </p>
            </div>
          ))}
        </section>
        <section className="mt-5 rounded-lg border border-(--line) p-5">
          <h2 className="text-xs font-semibold">Quick actions</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`${action.pattern} min-h-28 rounded-lg border border-(--line) p-5 group`}
              >
                <strong className="text-sm group-hover:text-(--accent)">{action.label}</strong>
                <span className="mt-12 block text-(--accent)">→</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-5 rounded-lg border border-(--line) p-5">
          <h2 className="text-xs font-semibold">Recent activity</h2>
          <div className="mt-4 border-t border-(--line)">
            <div className="grid grid-cols-[1fr_auto_auto] gap-8 border-b border-(--line) py-3 text-xs">
              <span>
                ● &nbsp; From metrics to decisions: building an analytics layer
              </span>
              <span className="text-(--accent)">Published</span>
              <span className="font-mono text-[9px] text-(--muted)">
                May 21
              </span>
            </div>
            <div className="grid grid-cols-[1fr_auto_auto] gap-8 py-3 text-xs">
              <span className="before:text-amber-400 before:content-['●_']">
                Analytics Dashboard project
              </span>
              <span className="text-amber-500">In progress</span>
              <span className="font-mono text-[9px] text-(--muted)">
                May 12
              </span>
            </div>
          </div>
        </section>
      </AdminMain>
    </AdminShell>
  );
}
