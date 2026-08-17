"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-(--accent)"
      style={{ transform: `scaleX(${progress})` }}
      role="progressbar"
      aria-label="Article reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    />
  );
}

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const shareData = { title, url: window.location.href };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--paper) px-4 py-2 font-mono text-[9px] tracking-wider text-(--muted) uppercase transition hover:border-(--accent) hover:text-(--accent)"
    >
      <span aria-hidden="true">↗</span>
      {copied ? "Link copied" : "Share article"}
    </button>
  );
}

type Comment = {
  name: string;
  body: string;
  date: string;
};

const initialComments: Comment[] = [
  {
    name: "Maya A.",
    body: "The distinction between queue time and work time is useful. We found the same thing when we stopped averaging every escalation together.",
    date: "May 24, 2026",
  },
  {
    name: "Daniel K.",
    body: "I especially like the weekly operating rhythm. A dashboard only matters when it has a place in the team’s decisions.",
    date: "May 23, 2026",
  },
];

export function ArticleComments() {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  return (
    <section id="comments" className="mt-16 border-t border-(--line) pt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.16em] text-(--accent) uppercase">
            Discussion
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold">
            {comments.length} comments
          </h2>
        </div>
        <a href="#new-comment" className="text-xs font-semibold text-(--accent)">
          Join in ↓
        </a>
      </div>

      <div className="mt-7 divide-y divide-(--line) border-y border-(--line)">
        {comments.map((comment, index) => (
          <article key={`${comment.name}-${index}`} className="py-6">
            <div className="flex items-center justify-between gap-4">
              <strong className="text-sm">{comment.name}</strong>
              <time className="font-mono text-[8px] text-(--muted)">{comment.date}</time>
            </div>
            <p className="mt-3 max-w-[68ch] text-sm leading-6 text-(--muted)">
              {comment.body}
            </p>
          </article>
        ))}
      </div>

      <form
        id="new-comment"
        className="mt-10 rounded-xl border border-(--line) bg-(--card) p-5 sm:p-7"
        onSubmit={(event) => {
          event.preventDefault();
          const trimmedName = name.trim();
          const trimmedBody = body.trim();
          if (!trimmedName || !trimmedBody) return;

          setComments((current) => [
            ...current,
            {
              name: trimmedName,
              body: trimmedBody,
              date: "Just now",
            },
          ]);
          setName("");
          setBody("");
        }}
      >
        <p className="font-mono text-[9px] tracking-[0.14em] text-(--accent) uppercase">
          Add a comment
        </p>
        <label className="mt-5 block">
          <span className="font-mono text-[8px] tracking-wider text-(--muted) uppercase">Name</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full border-0 border-b border-(--line) bg-transparent pb-2 text-sm outline-none focus:border-(--accent)"
            placeholder="Your name"
          />
        </label>
        <label className="mt-5 block">
          <span className="font-mono text-[8px] tracking-wider text-(--muted) uppercase">Comment</span>
          <textarea
            required
            rows={5}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="mt-2 block w-full resize-y rounded-lg border border-(--line) bg-(--paper) p-3 text-sm leading-6 outline-none focus:border-(--accent)"
            placeholder="Add to the discussion…"
          />
        </label>
        <button
          type="submit"
          className="mt-5 rounded bg-(--ink) px-5 py-3 text-xs font-semibold text-(--paper)"
        >
          Post comment
        </button>
        <p className="mt-3 font-mono text-[8px] text-(--muted)">
          Comments added here are previewed in this browser session.
        </p>
      </form>
    </section>
  );
}
