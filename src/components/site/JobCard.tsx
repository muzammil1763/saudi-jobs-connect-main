import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Users, Building2, Banknote } from "lucide-react";
import type { JobOpening } from "@/data/jobs";
import { getCategory } from "@/data/jobs";

export function JobCard({ job, index = 0 }: { job: JobOpening; index?: number }) {
  const cat = getCategory(job.categorySlug);
  const isVisa = job.categorySlug === "umrah-hajj-visa";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">{job.title}</h3>
          <p className="text-xs text-muted-foreground">{cat?.short}</p>
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${isVisa ? "bg-gold/20 text-amber-700" : "bg-accent text-saudi-green-dark"}`}>
          {isVisa ? "Visa Service" : cat?.name}
        </span>
      </div>

      <ul className="mb-4 space-y-1.5 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <MapPin className="size-4 text-saudi-green" />
          {job.city}, Saudi Arabia
        </li>
        {job.company && (
          <li className="flex items-center gap-2">
            <Building2 className="size-4 text-saudi-green" />
            {job.company}
          </li>
        )}
        {job.salary && (
          <li className="flex items-center gap-2">
            <Banknote className="size-4 text-gold" />
            <span className="font-semibold text-foreground">{job.salary}</span>
            {job.salary !== "N/A" && job.salary !== "Contact for pricing" && <span className="text-xs">/ month</span>}
          </li>
        )}
        {!isVisa && (
          <>
            <li className="flex items-center gap-2">
              <Briefcase className="size-4 text-saudi-green" />
              Experience: {job.experience}
            </li>
            <li className="flex items-center gap-2">
              <GraduationCap className="size-4 text-saudi-green" />
              Education: {job.education}
            </li>
            <li className="flex items-center gap-2">
              <Users className="size-4 text-saudi-green" />
              {job.vacancies} positions • {job.type}
            </li>
          </>
        )}
      </ul>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {job.requirements.slice(0, 3).map((r) => (
          <span key={r} className="rounded-md bg-secondary px-2 py-1 text-[11px] text-secondary-foreground">{r}</span>
        ))}
      </div>

      <div className="mt-auto flex gap-2">
        <Link
          to="/jobs/$slug"
          params={{ slug: job.categorySlug }}
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-center text-sm font-medium text-foreground transition hover:bg-accent"
        >
          Details
        </Link>
        <Link
          to="/register"
          className="flex-1 rounded-md bg-saudi-green px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-saudi-green-dark"
        >
          {isVisa ? "Inquire Now" : "Apply Now"}
        </Link>
      </div>
    </motion.article>
  );
}
