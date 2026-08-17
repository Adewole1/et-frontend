import { Eyebrow, Orbit, SectionNumber } from "./ui";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-shell flex min-h-screen h-full flex-col justify-center"
    >
      <SectionNumber withDivider>06</SectionNumber>
      <Orbit className="animate-spin-slower pointer-events-none absolute -top-48 -left-52 size-120 opacity-30" />
      <div className="grid-field pointer-events-none absolute right-5 bottom-5 size-52 opacity-50" />

      <div className="flex flex-col relative max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <Eyebrow>06 — Contact</Eyebrow>
        <h2 className="font-display mt-4 max-w-[20ch] text-[clamp(2.5rem,4.6vw,3.7rem)] font-semibold">
          Let&apos;s work together.
        </h2>
        <a
          href="mailto:emmanueltobilola@gmail.com"
          className="font-display mt-6 w-full max-w-full border-b-2 border-(--accent) text-[clamp(1.25rem,2.6vw,1.95rem)] font-medium break-all text-(--ink)"
        >
          emmanueltobilola@gmail.com
        </a>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="relative z-2 mt-10 w-full"
        >
          <label
            htmlFor="subscription-email"
            className="font-mono text-[10px] tracking-[0.16em] text-(--accent) uppercase"
          >
            Subscribe to insights
          </label>
          <div className="mt-3 flex items-center gap-4 border-b border-(--line) focus-within:border-(--accent)">
            <input
              id="subscription-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--ink) outline-none placeholder:text-(--muted)"
            />
            <button
              type="submit"
              className="shrink-0 py-3 font-mono text-[10px] font-medium tracking-[0.08em] text-(--accent) uppercase"
            >
              Subscribe →
            </button>
          </div>
        </form>
        <p className="mt-11 font-mono text-[11px] text-(--muted) mx-auto">
          © Emmanuel Tobiloba
        </p>
      </div>
    </section>
  );
}
