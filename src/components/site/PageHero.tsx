import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SaudiFlag } from "./SaudiFlag";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, white 0%, transparent 40%), radial-gradient(circle at 80% 100%, white 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <SaudiFlag className="h-7 w-11" />
            {eyebrow && (
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                {eyebrow}
              </span>
            )}
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-balance md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}