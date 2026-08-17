import type { Metadata } from "next";
import AdminShell from "@/components/admin/admin-shell";
import EditorForm from "@/components/admin/editor-form";
import { AdminHeading, AdminMain } from "@/components/admin/admin-ui";

export const metadata: Metadata = { title: "New post — Emmanuel Tobiloba" };

export default function NewPostPage() {
  return <AdminShell activeId="/admin/insights"><AdminMain narrow><AdminHeading title="New post" backHref="/admin/insights" /><EditorForm fields={[{ label: "Title", placeholder: "Post title" }, { label: "Category", placeholder: "e.g. Data Strategy" }]} textLabel="Body" textPlaceholder="Write your post..." toolbar submitLabel="Publish" /></AdminMain></AdminShell>;
}
