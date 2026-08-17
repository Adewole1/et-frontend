import type { Metadata } from "next";
import AdminShell from "@/components/admin/admin-shell";
import { AdminHeading, AdminList, AdminMain } from "@/components/admin/admin-ui";
import { books } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Manage books — Emmanuel Tobiloba" };

export default function AdminBooksPage() {
  return <AdminShell activeId="/admin/books"><AdminMain><AdminHeading title="Books" backHref="/admin" actionHref="/admin/books/new" actionLabel="New book" /><AdminList items={books.map((book) => ({ eyebrow: book.category, title: book.title, meta: book.status }))} /></AdminMain></AdminShell>;
}
