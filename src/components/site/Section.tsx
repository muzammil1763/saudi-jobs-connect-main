import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  alt = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${alt ? "bg-soft-gradient" : "bg-background"} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-saudi-green">{eyebrow}</p>
      )}
      <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}