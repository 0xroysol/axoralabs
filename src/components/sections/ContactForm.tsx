"use client";

import { FormEvent, useMemo, useState } from "react";
import { serviceTypeOptions } from "@/src/content/siteContent";

type FormState = {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  serviceType: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [toast, setToast] = useState<string>("");

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const canSubmit = useMemo(
    () => Boolean(form.name && form.email && form.company && form.serviceType && form.message),
    [form]
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) {
      nextErrors.company = "Please enter your company name.";
    }
    if (!form.serviceType.trim()) {
      nextErrors.serviceType = "Please choose a service type.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please enter a short project message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setToast("Thanks. Your request has been captured. We will reach out shortly.");
    setForm(initialState);
    setErrors({});

    window.setTimeout(() => {
      setToast("");
    }, 3500);
  };

  return (
    <div className="space-y-5">
      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200"
        >
          {toast}
        </div>
      ) : null}

      <form noValidate onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="focus-ring w-full rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-3 text-sm text-slate-100"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-rose-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="focus-ring w-full rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-3 text-sm text-slate-100"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-rose-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="focus-ring w-full rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-3 text-sm text-slate-100"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company ? (
            <p id="company-error" className="mt-1 text-xs text-rose-300">
              {errors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="serviceType" className="mb-2 block text-sm font-medium text-slate-200">
            Service Type
          </label>
          <select
            id="serviceType"
            value={form.serviceType}
            onChange={(event) => setForm((prev) => ({ ...prev, serviceType: event.target.value }))}
            className="focus-ring w-full rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-3 text-sm text-slate-100"
            aria-invalid={Boolean(errors.serviceType)}
            aria-describedby={errors.serviceType ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceTypeOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.serviceType ? (
            <p id="service-error" className="mt-1 text-xs text-rose-300">
              {errors.serviceType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            className="focus-ring w-full rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-3 text-sm text-slate-100"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-xs text-rose-300">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="focus-ring inline-flex rounded-md border border-slate-100 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit request
        </button>
      </form>
    </div>
  );
}
