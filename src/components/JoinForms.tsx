"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

type TabKey = "merchants" | "customers";

export default function JoinForms() {
  const search = useSearchParams();
  const initialTab = (search.get("tab") as TabKey) || "merchants";
  const [tab, setTab] = useState<TabKey>(initialTab);

  const tabs: { key: TabKey; label: string }[] = useMemo(
    () => [
      { key: "merchants", label: "Merchants" },
      { key: "customers", label: "Customers" },
    ],
    []
  );

  return (
    <div className="space-y-6">
      <div
        className="inline-flex rounded-full border border-black/10 dark:border-white/15 p-1 bg-white/60 dark:bg-white/[0.04]"
        role="tablist"
        aria-label="Join forms tabs"
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={`h-10 px-4 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_oklab,_var(--color-primary)_30%,_transparent)] ${
              tab === t.key ? "bg-[--color-primary] text-white" : "hover:text-[--color-primary]"
            }`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "merchants" ? <MerchantForm /> : <CustomerForm />}
    </div>
  );
}

function MerchantForm() {
  const [state, handleSubmit] = useForm("xqaybabv");
  if (state.succeeded) {
    return (
      <div className="card p-6 grid md:grid-cols-2 gap-6 card-dark">
        <div className="md:col-span-2">
          <p className="text-sm">Thanks! We'll reach out to schedule a demo.</p>
        </div>
      </div>
    );
  }
  return (
    <form
      className="card p-6 grid md:grid-cols-2 gap-6 card-dark"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form_type" value="merchant" />
      <Field label="Company Name" required>
        <input
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="Acme Inc."
          autoComplete="organization"
          name="company_name"
          required
        />
      </Field>
      <Field label="Industry" required>
        <select
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus"
          defaultValue=""
          name="industry"
          required
        >
          <option value="" disabled>
            Select industry
          </option>
          <option>Food & Beverage</option>
          <option>Retail & Fashion</option>
          <option>Entertainment</option>
          <option>Wellness & Fitness</option>
          <option>Travel & Hospitality</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Contact Name" required>
        <input
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="Jane Doe"
          autoComplete="name"
          name="contact_name"
          required
        />
      </Field>
      <Field label="Email" required>
        <input
          type="email"
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="jane@acme.com"
          autoComplete="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Field>
      <Field label="Phone">
        <input
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="Optional"
          autoComplete="tel"
          name="phone"
        />
      </Field>
      <div className="md:col-span-2">
        <Field label="Message">
          <textarea
            className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 min-h-32 py-3 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
            placeholder="Tell us about your loyalty needs"
            name="message"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Field>
      </div>
      <div className="md:col-span-2">
        <button className="btn btn-primary w-full md:w-auto">Request Demo</button>
      </div>
    </form>
  );
}

function CustomerForm() {
  const [state, handleSubmit] = useForm("xqaybabv");
  if (state.succeeded) {
    return (
      <div className="card p-6 grid md:grid-cols-2 gap-6 card-dark">
        <div className="md:col-span-2">
          <p className="text-sm">You're on the waitlist! We'll email you soon.</p>
        </div>
      </div>
    );
  }
  return (
    <form
      className="card p-6 grid md:grid-cols-2 gap-6 card-dark"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form_type" value="customer" />
      <Field label="Full Name" required>
        <input
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="Alex Smith"
          autoComplete="name"
          name="full_name"
          required
        />
      </Field>
      <Field label="Email" required>
        <input
          type="email"
          className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="alex@email.com"
          autoComplete="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Field>
      <div className="md:col-span-2">
        <Field label="How did you hear about us?">
          <select
            className="input w-full rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.03] px-4 h-11 ring-focus"
            defaultValue=""
            name="hear_about"
          >
            <option value="">Select one (optional)</option>
            <option>LinkedIn</option>
            <option>Twitter</option>
            <option>Friend / Colleague</option>
            <option>Event</option>
          </select>
        </Field>
      </div>
      <div className="md:col-span-2">
        <button className="btn btn-outline w-full md:w-auto">Join Waitlist</button>
      </div>
    </form>
  );
}

function Field({ label, required, children, hint }: { label: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block text-sm space-y-1.5">
      <span className="block text-black/70 dark:text-white/70">
        {label} {required && <em className="not-italic text-red-500">*</em>}
      </span>
      {children}
      {hint && <span className="block text-xs text-black/50 dark:text-white/50">{hint}</span>}
    </label>
  );
}


