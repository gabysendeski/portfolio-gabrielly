type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  id,
}: Props) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[.7fr_2fr] md:gap-12">
      <p className="eyebrow">
        <span className="text-muted">{index} /</span> {label}
      </p>
      <div>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
