type BookCardData = {
  title: string;
  author: string;
  category: string;
  status: string;
  description: string;
  accent: string;
};

export default function BookCard({
  book,
  compact = false,
  index = 0,
}: {
  book: BookCardData;
  compact?: boolean;
  index?: number;
}) {
  return (
    <article className="group min-w-0">
      <div
        className={`relative isolate overflow-hidden rounded-sm text-white shadow-[0_18px_45px_rgba(16,19,26,.15)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_55px_rgba(16,19,26,.22)] ${compact ? "aspect-2/3" : "aspect-2/3"}`}
        style={{ backgroundColor: book.accent }}
      >
        <div className="dot-field absolute inset-0 opacity-20 mix-blend-screen" />
        <div className="absolute -top-[18%] -right-[38%] aspect-square w-[90%] rounded-full border border-white/30" />
        <div className="absolute -top-[5%] -right-[25%] aspect-square w-[62%] rounded-full border border-dashed border-white/45" />
        <span className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.18em] text-white/70">
          ET / {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute right-4 bottom-4 left-4">
          <span className="mb-3 block h-px w-10 bg-white/55" />
          <h3 className={`font-display font-semibold leading-[.94] ${compact ? "text-[clamp(1rem,3vw,1.5rem)]" : "text-[clamp(1.45rem,3vw,2.3rem)]"}`}>
            {book.title}
          </h3>
          <p className="mt-3 font-mono text-[7px] tracking-[0.12em] text-white/70 uppercase sm:text-[8px]">
            Emmanuel Tobiloba
          </p>
        </div>
      </div>
      <p className="mt-4 font-mono text-[8px] tracking-wider text-(--accent) uppercase">
        {book.category} · {book.status}
      </p>
      {!compact ? (
        <>
          <h2 className="font-display mt-2 text-xl font-semibold">{book.title}</h2>
          <p className="mt-2 max-w-[42ch] text-sm leading-6 text-(--muted)">
            {book.description}
          </p>
        </>
      ) : null}
    </article>
  );
}
