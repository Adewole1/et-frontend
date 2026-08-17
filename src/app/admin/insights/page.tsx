import type { Metadata } from "next";
import AdminCollection from "@/components/admin/admin-collection";
import AdminShell from "@/components/admin/admin-shell";
import {
  AdminHeading,
  AdminMain,
} from "@/components/admin/admin-ui";
import { insightPosts } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Manage insights — Emmanuel Tobiloba",
};

export default function AdminInsightsPage() {
  return (
    <AdminShell activeId="/admin/insights">
      <AdminMain>
        <AdminHeading
          title="Insights"
          backHref="/admin"
          actionHref="/admin/insights/new"
          actionLabel="New post"
        />
        <AdminCollection
          filters={[
            "All",
            "Published",
            "Draft",
            "Data Strategy",
            "Data Engineering",
            "Analytics",
            "Data Ops",
          ]}
          pageSize={3}
          items={insightPosts.map((post) => ({
            eyebrow: post.category,
            title: post.title.replace(": building an analytics layer", ""),
            meta: post.date,
            status: post.status,
            filters: [post.status, post.category],
          }))}
        />
      </AdminMain>
    </AdminShell>
  );
}
