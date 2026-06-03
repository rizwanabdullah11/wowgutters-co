/** Reserved height for below-the-fold dynamic sections — reduces CLS while chunks load. */
export default function SectionPlaceholder({ minHeight = 320 }: { minHeight?: number }) {
  return (
    <div
      aria-hidden
      className="w-full bg-slate-50"
      style={{ minHeight }}
    />
  );
}
