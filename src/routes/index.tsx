import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Building2,
  FileCheck2,
  UserPlus,
  Briefcase,
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, SectionHeading } from "@/components/site/Section";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CategoryIcon } from "@/components/site/CategoryIcon";
import { jobCategories, jobOpenings, getCategory, featuredCompanies } from "@/data/jobs";

const WHATSAPP_NUMBER = "923015748038";
const PHONE = "03015748038";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Saudi Embassy Karachi – Jobs Portal" },
      {
        name: "description",
        content:
          "Official job opportunities in Saudi Arabia for Pakistani workers. Direct embassy recruitment, no middlemen, no registration fees.",
      },
      { property: "og:title", content: "Saudi Embassy Karachi – Jobs Portal" },
      {
        property: "og:description",
        content: "Jobs in Saudi Arabia – opportunities for Pakistani workers.",
      },
    ],
  }),
});

function Index() {
  // Always include umrah-hajj-visa, fill rest from top job categories
  const visaCat = jobCategories.find((c) => c.slug === "umrah-hajj-visa")!;
  const jobCats = jobCategories.filter((c) => c.slug !== "umrah-hajj-visa").slice(0, 7);
  const featuredCategories = [...jobCats, visaCat];
  const latestJobs = jobOpenings.filter((j) => j.categorySlug !== "umrah-hajj-visa").slice(0, 6);
  const visaOpening = jobOpenings.find((j) => j.categorySlug === "umrah-hajj-visa");
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 10%, white 0%, transparent 35%), radial-gradient(circle at 85% 90%, white 0%, transparent 35%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/image.png"
                alt="Saudi Visa Embassy – Islamabad Logo"
                className="h-16 w-16 rounded-full object-cover border-2 border-gold/60 shadow-lg"
              />
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                Kingdom of Saudi Arabia
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
              Saudi Visa Embassy – Islamabad
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Official job opportunities for Pakistani workers in Saudi Arabia. Direct recruitment with no agents and no fees. Also offering Umrah & Hajj visa services.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-saudi-green shadow-elegant transition hover:bg-cream"
              >
                View Available Jobs <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Register Your CV
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {[
                "Government Approved",
                "Direct Recruitment",
                "No Middlemen",
              ].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="size-4 text-white" /> {b}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden md:block"
          >
            <div className="relative ml-auto max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur shadow-elegant">
              <p className="text-xs uppercase tracking-wider text-white/70">Now Hiring</p>
              <h3 className="mt-1 font-display text-2xl font-bold">18+ Positions</h3>
              <p className="mt-1 text-sm text-white/80">Across Riyadh, Jeddah, Dammam, Mecca, Medina & Tabuk</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {featuredCategories.slice(0, 6).map((c) => (
                  <div
                    key={c.slug}
                    className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm"
                  >
                    <CategoryIcon name={c.icon} className="size-4 text-white" />
                    <span className="truncate">{c.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white/10 px-3 py-2 text-sm flex items-center gap-2">
                <MessageCircle className="size-4 text-green-300" />
                <span>WhatsApp: <strong>{PHONE}</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section alt>
        <SectionHeading
          eyebrow="Job Categories"
          title="Skilled Trades in Demand"
          subtitle="Browse popular job categories hiring across Saudi Arabia."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCategories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to="/jobs/$slug"
                params={{ slug: c.slug }}
                className="group block h-full rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-saudi-green hover:shadow-elegant"
              >
                <div className="mb-3 inline-flex size-11 items-center justify-center rounded-lg bg-accent text-saudi-green transition group-hover:bg-saudi-green group-hover:text-white">
                  <CategoryIcon name={c.icon} className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saudi-green">
                  View Jobs <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 rounded-md bg-saudi-green px-5 py-3 font-semibold text-white shadow-card transition hover:bg-saudi-green-dark"
          >
            See All Jobs <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* UMRAH & HAJJ VISA BANNER */}
      <section className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center md:flex-row md:text-left md:px-6">
          <div className="flex-1">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
              ✦ Visa Services
            </span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Umrah & Hajj Visa
            </h2>
            <p className="mt-3 max-w-xl text-white/85 text-base">
              Complete Umrah and Hajj visa processing for Pakistani pilgrims. We handle all documentation, embassy submission and follow-up. Individual and group packages available.
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 justify-center md:justify-start">
              {["Valid passport required", "Meningitis vaccination", "Group & individual packages", "Fast processing"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-yellow-200" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Assalam o Alaikum, I need information about Umrah/Hajj Visa services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-amber-700 shadow-lg transition hover:bg-yellow-50"
              >
                <MessageCircle className="size-4" /> Inquire on WhatsApp
              </a>
              <Link
                to="/jobs/$slug"
                params={{ slug: "umrah-hajj-visa" }}
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Details <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur min-w-[220px]">
            <span className="text-6xl">🕌</span>
            <p className="mt-3 font-display text-xl font-bold">Umrah & Hajj</p>
            <p className="mt-1 text-sm text-white/80">Visa Processing</p>
            <p className="mt-3 text-xs text-white/70 text-center">Contact us for<br />current packages</p>
          </div>
        </div>
      </section>

      {/* FEATURED COMPANIES */}
      <Section>
        <SectionHeading
          eyebrow="Hiring Partners"
          title="Featured Companies"
          subtitle="We recruit directly for these leading Saudi companies."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCompanies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="mb-3 flex items-center gap-3">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-14 w-14 rounded-lg object-contain border border-border bg-white p-1"
                  />
                ) : (
                  <div className="inline-flex size-14 items-center justify-center rounded-lg bg-saudi-green text-white">
                    <Building2 className="size-6" />
                  </div>
                )}
                <div>
                  <h3 className="font-display text-base font-bold leading-tight text-foreground">{company.name}</h3>
                  {company.nameAr && (
                    <p className="text-xs text-gold font-semibold" dir="rtl">{company.nameAr}</p>
                  )}
                </div>
              </div>
              <span className="mt-1 inline-block rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-saudi-green-dark">
                {company.industry}
              </span>
              <p className="mt-2 text-sm text-muted-foreground">{company.description}</p>
              <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> {company.location}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW TO APPLY */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="How to Apply"
          subtitle="A simple 3-step process directly through the Embassy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: UserPlus,
              title: "1. Register Your CV",
              text: "Fill the online application form with your personal and professional details.",
            },
            {
              icon: FileCheck2,
              title: "2. Document Verification",
              text: "Submit passport, education and experience documents for verification.",
            },
            {
              icon: Briefcase,
              title: "3. Job Matching",
              text: "The Embassy matches you with verified Saudi employers and arranges interviews.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-saudi-green text-white">
                <s.icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* REQUIREMENTS */}
      <Section alt>
        <SectionHeading
          eyebrow="Requirements"
          title="What You'll Need"
          subtitle="Standard documentation needed for processing your application."
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Valid Pakistani passport",
            "Educational certificates (as per job)",
            "Experience letters (minimum 2–3 years)",
            "Police clearance certificate",
            "Medical fitness certificate",
            "No criminal record",
          ].map((r) => (
            <div
              key={r}
              className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-card"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-saudi-green" />
              <span className="text-sm text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* LATEST OPENINGS */}
      <Section>
        <SectionHeading
          eyebrow="Now Hiring"
          title="Latest Job Openings"
          subtitle="A snapshot of currently open positions across Saudi Arabia."
        />
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-saudi-green text-left text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Job Title</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Location</th>
                  <th className="px-4 py-3 font-semibold">Requirements</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {latestJobs.map((j) => {
                  const cat = getCategory(j.categorySlug);
                  return (
                    <tr key={j.id} className="hover:bg-accent/50">
                      <td className="px-4 py-3 font-semibold text-foreground">{j.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{cat?.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5" /> {j.city}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {j.experience} • {j.education}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-saudi-green/10 px-3 py-1 text-xs font-semibold text-saudi-green">
                          Open
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ PREVIEW */}
      <Section alt>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-saudi-green">
              FAQ
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Common questions from applicants about jobs in Saudi Arabia.
            </p>
            <Link
              to="/faq"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-saudi-green hover:gap-3 transition-all"
            >
              View all FAQs <ArrowRight className="size-4" />
            </Link>
          </div>
          <FAQAccordion
            defaultOpen={0}
            items={[
              {
                q: "How to apply for jobs through Saudi Embassy?",
                a: "Register online by filling the CV form, submit your documents for verification and the Embassy will match you with a suitable Saudi employer.",
              },
              {
                q: "What documents are required?",
                a: "Valid passport, educational certificates, experience letters, police clearance and medical fitness certificate.",
              },
              {
                q: "Is there any registration fee?",
                a: "No. Registration through the Embassy is completely free of charge.",
              },
              {
                q: "How long does the process take?",
                a: "Typically 4 to 8 weeks depending on document verification, employer interviews and visa processing.",
              },
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-saudi-green text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-14 md:grid-cols-[1fr_auto] md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Ready to work in Saudi Arabia?
            </h2>
            <p className="mt-2 text-white/85">
              Register your CV today — our team will contact you for the next steps.
            </p>
            <p className="mt-1 text-sm text-white/70">
              📍 House No. 14, N Service Rd, G-4 Diplomatic Enclave, Islamabad &nbsp;|&nbsp; 📞 {PHONE}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-saudi-green shadow-elegant transition hover:bg-cream"
            >
              Register Your CV
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="size-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
