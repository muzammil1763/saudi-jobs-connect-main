import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Upload, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { jobCategories } from "@/data/jobs";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Register Your CV – Saudi Visa Embassy – Islamabad Jobs & Visa Portal" },
      { name: "description", content: "Register your CV for direct recruitment to Saudi Arabia. Free of charge." },
      { property: "og:title", content: "Register Your CV – Saudi Visa Embassy – Islamabad" },
      { property: "og:description", content: "Register your CV for direct recruitment to Saudi Arabia. No fees." },
    ],
  }),
});

const WHATSAPP_NUMBER = "923015748038";

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const id = `SEK-${Date.now().toString().slice(-8)}`;
    setRefId(id);

    // Build WhatsApp message
    const lines = [
      `*New CV Registration – ${id}*`,
      ``,
      `*Personal Information*`,
      `Full Name: ${data.get("name") || "—"}`,
      `Father's Name: ${data.get("father") || "—"}`,
      `Date of Birth: ${data.get("dob") || "—"}`,
      `CNIC: ${data.get("cnic") || "—"}`,
      `Passport No: ${data.get("passport") || "—"}`,
      `Passport Expiry: ${data.get("passportExpiry") || "—"}`,
      ``,
      `*Contact Information*`,
      `Mobile: ${data.get("mobile") || "—"}`,
      `Alt Mobile: ${data.get("altMobile") || "—"}`,
      `Email: ${data.get("email") || "—"}`,
      `Current Address: ${data.get("currentAddress") || "—"}`,
      `Permanent Address: ${data.get("permanentAddress") || "—"}`,
      ``,
      `*Professional Information*`,
      `Job Category: ${data.get("category") || "—"}`,
      `Experience: ${data.get("experience") || "—"} years`,
      `Current Job: ${data.get("currentJob") || "—"}`,
      `Current Employer: ${data.get("currentEmployer") || "—"}`,
      `Previous Employers: ${data.get("previous") || "—"}`,
      ``,
      `*Education*`,
      `Qualification: ${data.get("qualification") || "—"}`,
      `Institution: ${data.get("institution") || "—"}`,
      `Year: ${data.get("year") || "—"}`,
      `Certification: ${data.get("cert") || "—"}`,
      ``,
      `*Additional*`,
      `Physical Disability: ${data.get("disability") || "no"}`,
      `Willing to work anywhere in KSA: ${data.get("willing") || "yes"}`,
      `Previous KSA Experience: ${data.get("ksaExp") || "no"}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Free Registration"
        title="Register Your CV"
        subtitle="Submit your details for direct recruitment by Saudi employers. Registration is completely free of charge."
      />

      <Section>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-2xl rounded-xl border border-saudi-green/30 bg-card p-10 text-center shadow-elegant"
            >
              <div className="mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full bg-saudi-green text-white">
                <CheckCircle2 className="size-7" />
              </div>
              <h2 className="font-display text-2xl font-bold">Application Submitted</h2>
              <p className="mt-3 text-muted-foreground">
                Your application has been sent via WhatsApp. Our team will contact you shortly. Please keep your phone available.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Reference ID: <span className="font-mono font-semibold text-foreground">{refId}</span>
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="size-4" /> Open WhatsApp Chat
              </a>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={onSubmit}
              className="mx-auto max-w-4xl space-y-10"
            >
              <FormSection title="Personal Information" subtitle="As per your passport.">
                <Field label="Full Name" name="name" required />
                <Field label="Father's Name" name="father" required />
                <Field label="Date of Birth" name="dob" type="date" required />
                <Field label="CNIC Number" name="cnic" placeholder="XXXXX-XXXXXXX-X" required />
                <Field label="Passport Number" name="passport" required />
                <Field label="Passport Expiry Date" name="passportExpiry" type="date" required />
              </FormSection>

              <FormSection title="Contact Information">
                <Field label="Mobile Number" name="mobile" type="tel" placeholder="+92 3XX XXXXXXX" required />
                <Field label="Alternative Number" name="altMobile" type="tel" />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Current Address (Pakistan)" name="currentAddress" required />
                <Field label="Permanent Address" name="permanentAddress" required />
              </FormSection>

              <FormSection title="Professional Information">
                <FieldWrapper label="Job Category Applying For" required>
                  <select required name="category" className={inputCls}>
                    <option value="">Select a category…</option>
                    {jobCategories.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </FieldWrapper>
                <Field label="Total Experience (years)" name="experience" type="number" min={0} required />
                <Field label="Current Job Title" name="currentJob" />
                <Field label="Current Employer" name="currentEmployer" />
                <FieldWrapper label="Previous Employers" full>
                  <textarea name="previous" rows={3} className={inputCls} placeholder="List previous employers and roles" />
                </FieldWrapper>
              </FormSection>

              <FormSection title="Education">
                <Field label="Highest Qualification" name="qualification" required />
                <Field label="Institution Name" name="institution" />
                <Field label="Year of Completion" name="year" type="number" min={1960} max={2030} />
                <Field label="Technical Certification (if any)" name="cert" />
              </FormSection>

              <FormSection title="Documents (Optional)" subtitle="You can also bring documents during verification.">
                <FileField label="CV / Resume" />
                <FileField label="Passport Copy" />
                <FileField label="Educational Certificates" />
                <FileField label="Experience Letters" />
                <FileField label="Photograph" />
              </FormSection>

              <FormSection title="Additional Information">
                <FieldWrapper label="Any physical disabilities?">
                  <YesNo name="disability" />
                </FieldWrapper>
                <FieldWrapper label="Willing to work anywhere in Saudi Arabia?">
                  <YesNo name="willing" defaultValue="yes" />
                </FieldWrapper>
                <FieldWrapper label="Previous KSA work experience?">
                  <YesNo name="ksaExp" />
                </FieldWrapper>
              </FormSection>

              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <label className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 size-4 accent-saudi-green" />
                  <span className="text-sm text-foreground">I confirm that all the information provided is accurate and true.</span>
                </label>
                <label className="mt-3 flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 size-4 accent-saudi-green" />
                  <span className="text-sm text-foreground">I agree to the terms & conditions for job registration.</span>
                </label>
              </div>

              <div className="flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-md bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-elegant transition hover:bg-green-600"
                >
                  <MessageCircle className="size-5" /> Submit via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground">
                  Your form will be sent directly to our WhatsApp: <strong>0301 5748038</strong>. Registration is completely free.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </Section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground transition focus:outline-none focus:ring-2 focus:ring-saudi-green focus:border-transparent";

function FormSection({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
      <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-5 grid gap-4 md:grid-cols-2">{children}</div>
    </div>
  );
}

function FieldWrapper({ label, children, required, full }: { label: string; children: React.ReactNode; required?: boolean; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : undefined}>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}{required && <span className="text-destructive"> *</span>}
      </label>
      {children}
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
};
function Field({ label, required, ...rest }: FieldProps) {
  return (
    <FieldWrapper label={label} required={required}>
      <input {...rest} required={required} className={inputCls} />
    </FieldWrapper>
  );
}

function FileField({ label }: { label: string }) {
  return (
    <FieldWrapper label={label}>
      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-border bg-background px-3 py-2.5 text-sm text-muted-foreground transition hover:border-saudi-green hover:text-saudi-green">
        <span>Choose file</span>
        <Upload className="size-4" />
        <input type="file" className="hidden" />
      </label>
    </FieldWrapper>
  );
}

function YesNo({ name, defaultValue = "no" }: { name: string; defaultValue?: "yes" | "no" }) {
  return (
    <div className="flex gap-2">
      {["yes", "no"].map((v) => (
        <label key={v} className="flex-1 cursor-pointer">
          <input type="radio" name={name} value={v} defaultChecked={v === defaultValue} className="peer sr-only" />
          <span className="block rounded-md border border-border bg-background px-3 py-2 text-center text-sm capitalize transition peer-checked:border-saudi-green peer-checked:bg-saudi-green peer-checked:text-white">
            {v}
          </span>
        </label>
      ))}
    </div>
  );
}
