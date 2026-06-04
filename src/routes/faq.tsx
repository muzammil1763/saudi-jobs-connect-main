import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { FAQAccordion, type FAQItem } from "@/components/site/FAQAccordion";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ – Saudi Embassy Karachi Jobs Portal" },
      { name: "description", content: "Frequently asked questions about Saudi Arabia jobs, visa, registration and worker rights." },
      { property: "og:title", content: "FAQ – Saudi Embassy Karachi" },
      { property: "og:description", content: "Answers to common questions about jobs in Saudi Arabia." },
    ],
  }),
});

const groups: { title: string; items: FAQItem[] }[] = [
  { title: "General Questions", items: [
    { q: "Is there any registration fee?", a: "No, registration is completely free through the Embassy." },
    { q: "How do I know if a job is genuine?", a: "All jobs listed are verified by the Embassy and posted by registered Saudi employers." },
    { q: "Can I apply for multiple jobs?", a: "Yes, you can apply for up to 3 job categories during registration." },
  ]},
  { title: "Registration", items: [
    { q: "How to register for jobs?", a: "Fill the online CV registration form on this portal and submit your documents for verification." },
    { q: "What documents are needed?", a: "Valid passport, educational certificates, experience letters, police clearance and recent photographs." },
    { q: "Can I register without a passport?", a: "A valid Pakistani passport is mandatory before final processing, but you can begin registration with your CNIC." },
  ]},
  { title: "Job Application", items: [
    { q: "How long does the process take?", a: "Typically 4–8 weeks from registration to departure." },
    { q: "Will the Embassy guarantee a job?", a: "The Embassy facilitates the recruitment process but cannot guarantee a job. Final selection is decided by the employer." },
    { q: "Can I choose my city in Saudi Arabia?", a: "You can mention preferences during registration. Final placement depends on the employer." },
  ]},
  { title: "Visa", items: [
    { q: "Who pays for the visa?", a: "Employment visa fees are typically borne by the employer in Saudi Arabia." },
    { q: "How long is the work visa valid?", a: "Standard Saudi work visas (Iqama) are issued for 1–2 years and renewable as per the employer." },
  ]},
  { title: "Work Conditions", items: [
    { q: "What are the working hours in Saudi Arabia?", a: "Standard hours are 8 per day, 48 per week, with one weekly rest day." },
    { q: "Is accommodation provided?", a: "Most employers provide accommodation or a housing allowance — refer to your employment contract." },
    { q: "What about medical insurance?", a: "Saudi law requires the employer to provide medical insurance for all expatriate workers." },
  ]},
  { title: "Document Verification", items: [
    { q: "Are educational certificates mandatory?", a: "For technical roles requiring a diploma or certification — yes. For general labor, basic identity documents are sufficient." },
    { q: "Is an experience letter required for all jobs?", a: "Recommended for trades requiring experience. General labor positions may not require it." },
  ]},
  { title: "Contact & Support", items: [
    { q: "How do I contact the labor department?", a: "Use the contact form on this portal or call the embassy labor desk during working hours." },
    { q: "What if I face issues in Saudi Arabia?", a: "Contact the Pakistani Consulate or report to the Embassy's welfare officer immediately." },
  ]},
];

function FAQPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Help Center" title="Frequently Asked Questions" subtitle="Answers to the most common questions about jobs in Saudi Arabia." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="mb-4 font-display text-xl font-bold">{g.title}</h2>
              <FAQAccordion items={g.items} />
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
