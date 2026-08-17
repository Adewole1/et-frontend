import type { Metadata } from "next";
import PageShell from "@/components/site/page-shell";
import BookCard from "@/components/site/book-card";
import { PageHeading } from "@/components/site/patterns";
import { books, publicNavigation } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Books — Emmanuel Tobiloba" };

export default function BooksPage() {
  return (
    <PageShell navigation={publicNavigation} activeId="/books">
      <main className="relative z-10 min-h-screen max-w-360 w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20 pt-[clamp(110px,16vh,160px)] pb-12">
        <PageHeading
          eyebrow="Books by Emmanuel"
          title="Long-form ideas for people who make things move"
          description="Working and forthcoming books by Emmanuel Tobiloba on data, decisions, operations, and dependable delivery."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <BookCard key={book.title} book={book} index={index} />
          ))}
        </div>
      </main>
    </PageShell>
  );
}
