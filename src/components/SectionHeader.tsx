type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-500">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl font-bold text-petrol-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-urban-700">{description}</p> : null}
    </div>
  );
}
