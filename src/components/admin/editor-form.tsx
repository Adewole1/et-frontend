import { FormField, PrimaryButton, TextAreaField } from "@/components/site/form-controls";

type Field = { label: string; placeholder: string };

export default function EditorForm({ fields, textLabel, textPlaceholder, submitLabel, note, toolbar = false }: { fields: Field[]; textLabel?: string; textPlaceholder?: string; submitLabel: string; note?: string; toolbar?: boolean }) {
  return (
    <form className="mt-8 space-y-5">
      {fields.map((field) => <FormField key={field.label} label={field.label} placeholder={field.placeholder} />)}
      {textLabel ? <TextAreaField label={textLabel} placeholder={textPlaceholder} toolbar={toolbar} /> : null}
      {note ? <p className="font-mono text-[9px] text-(--muted)">{note}</p> : null}
      <PrimaryButton>{submitLabel}</PrimaryButton>
    </form>
  );
}
