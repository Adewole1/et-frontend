import type { Metadata } from "next";
import AdminShell from "@/components/admin/admin-shell";
import EditorForm from "@/components/admin/editor-form";
import { AdminHeading, AdminMain } from "@/components/admin/admin-ui";

export const metadata: Metadata = { title: "Send newsletter — Emmanuel Tobiloba" };

export default function NewNewsletterPage() {
  return <AdminShell><AdminMain narrow><AdminHeading title="Send newsletter" backHref="/admin" /><EditorForm fields={[{ label: "Subject", placeholder: "Newsletter subject" }]} textLabel="Message" textPlaceholder="Write to your subscribers..." note="Sending to 847 subscribers" submitLabel="Send" /></AdminMain></AdminShell>;
}
