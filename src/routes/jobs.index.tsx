import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { JobCard } from "@/components/site/JobCard";
import { jobCategories, jobOpenings, cities } from "@/data/jobs";
import { Search, X, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "923015748038";

export const Route = createFileRoute("/jobs/")({
  component: JobsPage,
  head: () => ({
    meta: [
      { title: "Available Jobs in Saudi Arabia – Saudi Embassy Karachi" },
      { name: "description", content: "Browse current job openings in Saudi Arabia for Pakistani workers." },
      { property: "og:title", content: "Available Jobs in Saudi Arabia" },
      { property: "og:description", content: "Browse all current openings for Pakistani workers." },
    ],
  }),
});

const expRanges = ["Any", "0-2 years", "2-5 years", "5+ years"];
const eduLevels = ["Any", "None", "Matric", "ITI", "Diploma", "Certificate"];

function inExp(jobExp: string, range: string) {
  if (range === "Any") return true;
  const n = parseInt(jobExp);
  if (range === "0-2 years") return n <= 2;
  if (range === "2-5 years") return n >= 2 && n <= 5;
  if (range === "5+ years") return n >= 5;
  return true;
}

const inputCls = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-saudi-green";

function JobsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");
  const [exp, setExp] = useState("Any");
  const [edu, setEdu] = useState("Any");

  const filtered = useMemo(() => jobOpenings.filter((j) => {
    // Always show umrah/hajj visa entry regardless of filters
    if (j.categorySlug === "umrah-hajj-visa") {
      return !search || j.title.toLowerCase().includes(search.toLowerCase());
    }
    const ms = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.city.toLowerCase().includes(search.toLowerCase());
    return ms
      && (category === "All" || j.categorySlug === category)
      && (city === "All" || j.city === city)
      && inExp(j.experience, exp)
      && (edu === "Any" || j.education.includes(edu));
  }), [search, category, city, exp, edu]);

  const reset = () => { setSearch(""); setCategory("All"); setCity("All"); setExp("Any"); setEdu("Any"); };

  return (
    <SiteLayout>
      <PageHero eyebrow="Now Hiring" title="Available Jobs in Saudi Arabia" subtitle="Browse all current openings for Pakistani workers across the Kingdom.">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-saudi-green" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by job title or city..." className="w-full rounded-md border-0 bg-white py-3 pl-10 pr-4 text-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-white/50" />
        </div>
      </PageHero>
      <Section>
        {/* Umrah & Hajj Visa Banner */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 p-6 text-white shadow-elegant flex flex-col sm:flex-row items-center gap-5">
          <span className="text-5xl">🕌</span>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-200">Visa Services</p>
            <h3 className="font-display text-xl font-bold mt-1">Umrah & Hajj Visa Processing</h3>
            <p className="mt-1 text-sm text-white/85">Complete visa processing for Pakistani pilgrims. Group & individual packages available.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Assalam o Alaikum, I need information about Umrah/Hajj Visa services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-yellow-50"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <Link
              to="/jobs/$slug"
              params={{ slug: "umrah-hajj-visa" }}
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Details <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-xl border border-border bg-card p-5 shadow-card lg:sticky lg:top-24 h-fit">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold">Filters</h3>
              <button onClick={reset} className="inline-flex items-center gap-1 text-xs font-medium text-saudi-green hover:underline">
                <X className="size-3" /> Reset
              </button>
            </div>
            <FF label="Category"><select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}><option value="All">All categories</option>{jobCategories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select></FF>
            <FF label="City"><select value={city} onChange={(e) => setCity(e.target.value)} className={inputCls}><option value="All">All cities</option>{cities.map((c) => <option key={c} value={c}>{c}</option>)}</select></FF>
            <FF label="Experience"><select value={exp} onChange={(e) => setExp(e.target.value)} className={inputCls}>{expRanges.map((c) => <option key={c} value={c}>{c}</option>)}</select></FF>
            <FF label="Education"><select value={edu} onChange={(e) => setEdu(e.target.value)} className={inputCls}>{eduLevels.map((c) => <option key={c} value={c}>{c}</option>)}</select></FF>
          </aside>
          <div>
            <p className="mb-5 text-sm text-muted-foreground">Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {jobOpenings.length} jobs</p>
            {filtered.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
                <p className="font-display text-lg font-semibold">No jobs match your filters</p>
                <p className="mt-1 text-sm text-muted-foreground">Try resetting filters or broaden your search.</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((j, i) => <JobCard key={j.id} job={j} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function FF({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 last:mb-0">
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}