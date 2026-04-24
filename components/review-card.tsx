import { Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  quote: string;
};

export function ReviewCard({ name, quote }: ReviewCardProps) {
  return (
    <article className="glass-panel h-full p-7">
      <div className="mb-5 flex gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-base text-ink/75">“{quote}”</p>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-ink/55">
        {name}
      </p>
    </article>
  );
}
