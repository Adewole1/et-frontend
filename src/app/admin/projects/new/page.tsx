import type { Metadata } from "next";
import AdminShell from "@/components/admin/admin-shell";
import EditorForm from "@/components/admin/editor-form";
import { AdminHeading, AdminMain } from "@/components/admin/admin-ui";

export const metadata: Metadata = { title: "New project — Emmanuel Tobiloba" };

export default function NewProjectPage() {
  return <AdminShell activeId="/admin/projects"><AdminMain narrow><AdminHeading title="New project" backHref="/admin/projects" /><EditorForm fields={[{ label: "Project name", placeholder: "e.g. Supply chain optimization" }, { label: "Tools used", placeholder: "e.g. SQL · Python · Tableau" }, { label: "Result / metric", placeholder: "e.g. −22% cycle time" }]} textLabel="Description" textPlaceholder="Describe the project..." toolbar submitLabel="Add project" /></AdminMain></AdminShell>;
}
