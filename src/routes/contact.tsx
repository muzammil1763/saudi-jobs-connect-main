import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, Mail, Clock, AlertTriangle, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

const PHONE = "03015748038";
const WHATSAPP_NUMBER = "923015748038";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact – Saudi Embassy Islamabad Jobs Portal" },
      { name: "description", content: "Contact the Saudi Embassy Islamabad for job inquiries, visa, document attestation and worker support." },
      { property: "og:title", content: "Contact Saudi Embassy Islamabad" },
      { property: "og:description", content: "Reach out for job inquiries, visa and worker support." },
    ],
  }),
});

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saudi-green";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines = [
      `*New Contact Message*`,
      `Name: ${data.get("name") || "—"}`,
      `Email: ${data.get("email") || "—"}`,
      `Phone: ${data.get("phone") || "—"}`,
      `CNIC: ${data.get("cnic") || "—"}`,
      `Subject: ${data.get("subject") || "—"}`,
      `Message: ${data.get("message") || "—"}`,
    ];
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSent(true);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Get in touch" title="Contact Saudi Embassy Islamabad" subtitle="For job inquiries, document attestation, visa or worker support." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center py-10">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-green-500 text-white"><CheckCircle2 className="size-6" /></div>
                <h3 className="font-display text-xl font-bold">Message sent via WhatsApp</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our team will respond to you shortly on WhatsApp.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  <MessageCircle className="size-4" /> Open WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h2 className="font-display text-xl font-bold">Send us a message</h2>
                <FW label="Full Name" required><input name="name" required className={inputCls} /></FW>
                <FW label="Email" required><input name="email" type="email" required className={inputCls} /></FW>
                <FW label="Phone Number" required><input name="phone" type="tel" required className={inputCls} /></FW>
                <FW label="CNIC (optional)"><input name="cnic" className={inputCls} /></FW>
                <FW label="Subject" required>
                  <select name="subject" required className={inputCls}>
                    <option value="">Select a subject…</option>
                    <option>Job Inquiry</option><option>Document Attestation</option><option>Visa</option><option>Complaint</option><option>General</option>
                  </select>
                </FW>
                <FW label="Message" required><textarea name="message" required rows={5} className={inputCls} /></FW>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white shadow-card transition hover:bg-green-600">
                  <MessageCircle className="size-4" /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
          <div className="space-y-5">
            <Info icon={<MapPin />} label="Office Address">
              House No. 14, N Service Rd<br />
              G-4 Diplomatic Enclave<br />
              Islamabad, 44000
            </Info>
            <Info icon={<Phone />} label="Phone">
              <a href={`tel:${PHONE}`} className="hover:text-saudi-green font-semibold">{PHONE}</a>
            </Info>
            <Info icon={<MessageCircle />} label="WhatsApp">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp: {PHONE}
              </a>
            </Info>
            <Info icon={<Mail />} label="Email">
              <a href="mailto:info@saudivisaembassy.com" className="hover:text-saudi-green font-semibold">info@saudivisaembassy.com</a>
            </Info>
            <Info icon={<Clock />} label="Working Hours">Monday – Thursday: 9:00 AM – 5:00 PM<br />Friday: 9:00 AM – 12:00 PM<br />Closed on Saturday & Sunday</Info>
            <Info icon={<AlertTriangle />} label="Important Notice">Registration is completely <strong>free of charge</strong>. Beware of agents charging fees.</Info>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="aspect-video w-full bg-gradient-to-br from-saudi-green-dark via-saudi-green to-saudi-green-light flex items-center justify-center text-white/80 text-sm">Map placeholder — Embassy Location, Islamabad</div>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function FW({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (<div><label className="mb-1.5 block text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label>{children}</div>);
}
function Info({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-saudi-green [&>svg]:size-5">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
