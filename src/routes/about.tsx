import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Building2, FileCheck2, ShieldCheck, Users, MapPin, Phone, Mail, Clock, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About – Saudi Embassy Karachi Jobs Portal" },
      { name: "description", content: "About the Embassy of the Kingdom of Saudi Arabia in Karachi — consular services, job recruitment and worker support." },
      { property: "og:title", content: "About Saudi Embassy Karachi" },
      { property: "og:description", content: "Consular services, job recruitment and Pakistani worker support." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="About Saudi Visa Embassy – Islamabad" subtitle="Saudi Visa Embassy – Islamabad, facilitating job opportunities and consular services for Pakistani citizens." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold">Embassy Information</h2>
              <p className="mt-3 text-muted-foreground">The Saudi Visa Embassy in Islamabad serves as an official representative facilitating employment for skilled Pakistani workers in Saudi Arabia, providing consular services and direct recruitment from the capital.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Consular Services</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[{i: Building2, l: "Visa Processing"},{i: BadgeCheck, l: "Job Registration"},{i: FileCheck2, l: "Document Attestation"},{i: Users, l: "Pakistani Worker Support"}].map((s) => (
                  <div key={s.l} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-saudi-green"><s.i className="size-5" /></span>
                    <span className="font-medium">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Job Recruitment</h2>
              <p className="mt-3 text-muted-foreground">The Embassy facilitates direct job placement for Pakistani workers in Saudi Arabia, eliminating middlemen and unauthorized agents. Our recruitment process is transparent, free of charge and ensures workers' rights are protected throughout the journey.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Direct recruitment with verified Saudi employers","No agents and no service fees","Transparent screening and matching","Worker protection and support in Saudi Arabia"].map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-saudi-green" /><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Worker Rights in Saudi Arabia</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {["Fair wages as per contract","Accommodation provided by employer","Medical insurance coverage","Weekly rest days","End-of-service benefits","Right to file complaints with the labor office"].map((r) => (
                  <li key={r} className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-card"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-saudi-green" /><span>{r}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 h-fit">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-bold">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 text-saudi-green" /><span>House No. 14, N Service Rd, G-4 Diplomatic Enclave, Islamabad, 44000</span></li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 size-4 text-saudi-green" /><a href="tel:03015748038" className="hover:underline">0301 5748038</a></li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 size-4 text-saudi-green" /><a href="mailto:info@saudivisaembassy.com" className="hover:underline">info@saudivisaembassy.com</a></li>
                <li className="flex items-start gap-3"><Clock className="mt-0.5 size-4 text-saudi-green" /><span>Mon–Thu 9am–5pm | Fri 9am–12pm</span></li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-bold">Key Officers</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Labor Attaché:</strong> [Name placeholder]</li>
                <li><strong className="text-foreground">Welfare Officer:</strong> [Name placeholder]</li>
                <li><strong className="text-foreground">Consul General:</strong> [Name placeholder]</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
