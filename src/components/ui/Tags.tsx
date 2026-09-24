export function Tags({ items }: { items: readonly string[] }) {
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line px-3 py-1.5 font-mono text-[11px] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
