import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group glass-panel flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-xl font-display text-ink">
        {title.charAt(0)}
      </div>
      <h3 className="text-3xl leading-none">{title}</h3>
      <p className="mt-4 flex-1 text-sm sm:text-base">{description}</p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3"
      >
        Prendre rendez-vous <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
