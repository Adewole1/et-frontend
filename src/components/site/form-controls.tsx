import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export function FormField({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="font-mono text-[9px] tracking-[0.12em] text-(--muted) uppercase">{label}</span>
      <input {...props} className="mt-2 w-full border-0 border-b border-(--line) bg-transparent px-0 pb-2 text-sm outline-none placeholder:text-(--muted)/70 focus:border-(--accent)" />
    </label>
  );
}

export function TextAreaField({ label, toolbar = false, ...props }: { label: string; toolbar?: boolean } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="font-mono text-[9px] tracking-[0.12em] text-(--muted) uppercase">{label}</span>
      <div className="mt-2 overflow-hidden rounded border border-(--line)">
        {toolbar ? <div className="flex flex-wrap gap-1 border-b border-(--line) bg-(--card) p-1.5">{["B", "I", "U", "H", "•", "1.", "❝", "▦", "▧", "↗"].map((tool) => <button key={tool} type="button" className="grid size-6 place-items-center rounded border border-(--line) font-mono text-[9px] text-(--muted)">{tool}</button>)}</div> : null}
        <textarea {...props} className="block min-h-36 w-full resize-y bg-transparent p-3 text-sm outline-none placeholder:text-(--muted)/70" />
      </div>
    </label>
  );
}

export function PrimaryButton({ children }: { children: ReactNode }) {
  return <button type="submit" className="rounded bg-(--ink) px-6 py-3 text-xs font-semibold text-(--paper)">{children}</button>;
}
