type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="text-4xl leading-none sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base sm:text-lg">{description}</p>
    </div>
  );
}
