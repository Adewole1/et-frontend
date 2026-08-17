import type { Metadata } from "next";
import PageShell from "@/components/site/page-shell";
import { FormField, PrimaryButton } from "@/components/site/form-controls";

export const metadata: Metadata = { title: "Sign in — Emmanuel Tobiloba" };

export default function SigninPage() {
  return (
    <PageShell navigation={[{ id: "/", label: "Home" }]} activeId="/signin">
      <main className="relative z-10 grid min-h-screen place-items-center">
        <form action="/admin" className="w-full max-w-sm bg-(--paper) shadow-lg px-7 py-24 rounded-md">
          <p className="text-center font-mono text-[10px] tracking-[0.18em] text-(--accent)">SIGN IN</p><h1 className="font-display mt-3 text-center text-3xl font-semibold">Welcome back</h1><p className="mt-2 text-center text-xs text-(--muted)">Sign in to manage Insights and projects.</p>
          <div className="mt-8 space-y-5"><FormField label="Username" name="username" placeholder="Username" /><FormField label="Password" name="password" type="password" placeholder="Password" /><PrimaryButton>Log in</PrimaryButton></div>
        </form>
      </main>
    </PageShell>
  );
}
