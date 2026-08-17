import type { Metadata } from "next";
import AdminShell from "@/components/admin/admin-shell";
import EditorForm from "@/components/admin/editor-form";
import { AdminHeading, AdminMain } from "@/components/admin/admin-ui";

export const metadata: Metadata = { title: "New book — Emmanuel Tobiloba" };

export default function NewBookPage() {
  return <AdminShell activeId="/admin/books"><AdminMain narrow><AdminHeading title="New book" backHref="/admin/books" /><EditorForm fields={[{ label: "Title", placeholder: "Book title" }, { label: "Category", placeholder: "e.g. Data & Delivery" }, { label: "Publication status", placeholder: "e.g. Forthcoming" }]} textLabel="Description" textPlaceholder="Describe the book..." toolbar submitLabel="Add book" /></AdminMain></AdminShell>;
}
