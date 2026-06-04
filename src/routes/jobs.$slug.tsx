import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { JobCard } from "@/components/site/JobCard";
import { CategoryIcon } from "@/components/site/CategoryIcon";
import { getCategory, jobsByCategory, jobCategories } from "@/data/jobs";
import { CheckCircle2, ArrowRight, Briefcase, GraduationCap, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/jobs/$slug")({
  component: JobDetailPage,
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ params }) => {
    const cat = getCategory(params.slug);
    const title = cat ? `${cat.name} Jobs in Saudi Arabia` : "Job Details";
    return { meta: [
      { title: `${title} – Saudi Embassy Karachi` },
      { name: "description", content: cat?.description ?? "Job opportunities in Saudi Arabia." },
      { property: "og:title", content: title },
      { property: "og:description", content: cat?.short ?? "" },
    ]};
  },
  notFoundComponent: () => (
    <SiteLayout><Section><div className="text-center"><h1 className="font-display text-3xl font-bold">Job not found</h1><Link to="/jobs" className="mt-5 inline-flex rounded-md bg-saudi-green px-4 py-2 font-semibold text-white">Back to jobs</Link></div></Section></SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout><Section><div className="text-center"><h1 className="font-display text-2xl font-bold">Something went wrong</h1><p className="mt-2 text-muted-foreground">{error.message}</p><button onClick={reset} className="mt-5 rounded-md bg-saudi-green px-4 py-2 font-semibold text-white">Try again</button></div></Section></SiteLayout>
  ),
});

function JobDetailPage() {
  const { cat } = Route.useLoaderData();
  const openings = jobsByCategory(cat.slug);
  const opening = openings[0];
  const related = jobCategories.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero eyebrow={cat.name} title={`${cat.name} Jobs in Saudi Arabia`} subtitle={cat.description} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold">Job Overview</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat icon={<Briefcase className="size-4" />} label="Job Type" value={opening?.type ?? "Full-time"} />
                <Stat icon={<MapPin className="size-4" />} label="Locations" value={[...new Set(openings.map((o) => o.city))].join(", ") || "Multiple cities"} />
                <Stat icon={<Briefcase className="size-4" />} label="Experience" value={opening?.experience ?? "2+ years"} />
                <Stat icon={<GraduationCap className="size-4" />} label="Education" value={opening?.education ?? "As per role"} />
                <Stat icon={<Users className="size-4" />} label="Vacancies" value={`${openings.reduce((s, o) => s + o.vacancies, 0)} positions`} />
                <Stat icon={<CheckCircle2 className="size-4" />} label="Industries" value={cat.industries.join(", ")} />
              </div>
            </div>
            <Block title="Job Responsibilities" items={cat.responsibilities} />
            <Block title="Requirements" items={cat.requirements} />
            <Block title="Documents Required" items={["CV / Resume","Educational certificates","Experience letters","Passport copy (valid)","Recent photographs","Police clearance certificate"]} />
            <div>
              <h2 className="font-display text-2xl font-bold">Application Process</h2>
              <ol className="mt-4 space-y-3">
                {["Register online with your details","Submit documents for verification","Embassy screening and shortlisting","Employer interview","Visa processing & medical","Departure to Saudi Arabia"].map((step, i) => (
                  <li key={step} className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-saudi-green text-xs font-bold text-white">{i + 1}</span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 h-fit">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-saudi-green text-white"><CategoryIcon name={cat.icon} className="size-5" /></div>
              <h3 className="font-display text-lg font-bold">Apply for {cat.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Registration is free through the Embassy.</p>
              <Link to="/register" className="mt-4 block rounded-md bg-saudi-green px-4 py-3 text-center font-semibold text-white hover:bg-saudi-green-dark">Register Your CV</Link>
              <Link to="/contact" className="mt-2 block rounded-md border border-border px-4 py-3 text-center text-sm font-medium hover:bg-accent">Contact Embassy</Link>
            </div>
            <div className="rounded-xl bg-cream p-5 border border-border">
              <p className="text-sm font-semibold text-gold">No registration fee</p>
              <p className="mt-1 text-xs text-muted-foreground">All embassy services for job registration are free of charge.</p>
            </div>
          </aside>
        </div>
      </Section>
      {openings.length > 0 && (
        <Section alt>
          <SectionHeading eyebrow="Open Positions" title={`Current ${cat.name} Openings`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {openings.map((j, i) => <JobCard key={j.id} job={j} index={i} />)}
          </div>
        </Section>
      )}
      <Section>
        <SectionHeading eyebrow="Explore" title="Related Job Categories" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((c) => (
            <Link key={c.slug} to="/jobs/$slug" params={{ slug: c.slug }} className="group rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-3 inline-flex size-11 items-center justify-center rounded-lg bg-accent text-saudi-green group-hover:bg-saudi-green group-hover:text-white"><CategoryIcon name={c.icon} className="size-5" /></div>
              <h3 className="font-display text-lg font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.short}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-saudi-green">View jobs <ArrowRight className="size-4" /></span>
            </Link>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-card">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"><span className="text-saudi-green">{icon}</span>{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-card">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-saudi-green" />
            <span className="text-sm">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}