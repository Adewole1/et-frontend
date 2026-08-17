import type { Metadata } from "next";
import AdminCollection from "@/components/admin/admin-collection";
import AdminShell from "@/components/admin/admin-shell";
import {
  AdminHeading,
  AdminMain,
} from "@/components/admin/admin-ui";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Manage projects — Emmanuel Tobiloba",
};

export default function AdminProjectsPage() {
  return (
    <AdminShell activeId="/admin/projects">
      <AdminMain>
        <AdminHeading
          title="Projects"
          backHref="/admin"
          actionHref="/admin/projects/new"
          actionLabel="New project"
        />
        <AdminCollection
          filters={["All", "Supply Chain", "Analytics", "Logistics"]}
          pageSize={2}
          items={projects.map((project) => ({
            eyebrow: project.tools,
            title: project.title,
            meta: project.result,
            filters: [project.category],
          }))}
        />
      </AdminMain>
    </AdminShell>
  );
}
