import Link from "next/link";
import BookCard from "@/components/site/book-card";
import { books } from "@/lib/portfolio-data";
import { Eyebrow, SectionNumber } from "./ui";

export default function BooksSection() {
  return (
    <section
      id="books"
      className="section-shell flex min-h-screen h-full flex-col justify-center"
    >
      <SectionNumber withDivider>05</SectionNumber>
      <div className="diagonal-field pointer-events-none absolute top-32 -left-12 h-28 w-44 opacity-40" />
      <svg
        aria-hidden="true"
        className="animate-spin-slower pointer-events-none absolute -right-28 -bottom-36 size-80 opacity-35"
        viewBox="0 0 320 320"
        fill="none"
      >
        <circle cx="160" cy="160" r="150" stroke="var(--line)" />
        <circle cx="160" cy="160" r="105" stroke="var(--accent)" strokeDasharray="2 10" />
        <path d="M160 10v38M310 160h-38" stroke="var(--accent)" />
      </svg>

      <div className="relative max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <Eyebrow>05 — Books</Eyebrow>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3 md:mt-3">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold">
            Ideas, made tangible.
          </h2>
          <Link
            href="/books"
            className="border-b border-(--accent) pb-1 text-xs font-semibold"
          >
            Explore the books →
          </Link>
        </div>
        <p className="mt-3 max-w-[54ch] text-sm leading-6 text-(--muted)">
          Working and forthcoming books by Emmanuel on data, decisions, and
          dependable delivery.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-5 md:mt-7 md:max-w-4xl">
          {books.map((book, index) => (
            <BookCard key={book.title} book={book} index={index} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
