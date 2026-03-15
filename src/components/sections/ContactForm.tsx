"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useTranslate } from "@/src/components/ui/LocalizedText";
import { demoRequestMessagesByIntent, serviceTypeOptions } from "@/src/content/siteContent";

type FormState = {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  message: string;
};

type ContactFormProps = {
  mode?: "service" | "studio";
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  serviceType: "",
  message: ""
};

export function ContactForm({ mode = "service" }: ContactFormProps) {
  const t = useTranslate();
  const searchParams = useSearchParams();
  const hasPrefilled = useRef(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [toast, setToast] = useState<string>("");

  useEffect(() => {
    if (mode === "studio" || hasPrefilled.current) {
      return;
    }

    const serviceTypeFromQuery = searchParams.get("serviceType") ?? "";
    const intentFromQuery = searchParams.get("intent") ?? "";
    const selectedServiceType = serviceTypeOptions.includes(serviceTypeFromQuery)
      ? serviceTypeFromQuery
      : "";
    const messageKey = demoRequestMessagesByIntent[intentFromQuery];
    const prefilledMessage = messageKey ? t(messageKey) : "";

    if (!selectedServiceType && !prefilledMessage) {
      hasPrefilled.current = true;
      return;
    }

    setForm((prev) => ({
      ...prev,
      serviceType: selectedServiceType || prev.serviceType,
      message: prefilledMessage || prev.message
    }));
    hasPrefilled.current = true;
  }, [mode, searchParams, t]);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const canSubmit = useMemo(
    () => Boolean(form.name && form.email && form.company && form.serviceType && form.message),
    [form]
  );

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = t("Please enter your name.");
    }
    if (!form.email.trim()) {
      nextErrors.email = t("Please enter your email.");
    } else if (!isValidEmail(form.email)) {
      nextErrors.email = t("Please enter a valid email address.");
    }
    if (!form.company.trim()) {
      nextErrors.company = t("Please enter your company name.");
    }
    if (!form.serviceType.trim()) {
      nextErrors.serviceType =
        mode === "studio"
          ? t("Please describe what you want to build.")
          : t("Please choose a service type.");
    }
    if (!form.message.trim()) {
      nextErrors.message = t("Please enter a short project message.");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setToast(t("Thanks. Your request has been captured. We will reach out shortly."));
    setForm(initialState);
    setErrors({});

    window.setTimeout(() => {
      setToast("");
    }, 3500);
  };

  const fieldClasses =
    mode === "studio"
      ? "focus-ring w-full rounded-2xl border border-[#d8cfbf] bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
      : "focus-ring w-full rounded-lg border border-slate-600 bg-slate-900/70 px-4 py-3 text-sm text-slate-100";

  const labelClasses =
    mode === "studio"
      ? "mb-2 block text-sm font-medium text-slate-700"
      : "mb-2 block text-sm font-medium text-slate-200";

  const submitClasses =
    mode === "studio"
      ? "focus-ring inline-flex rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      : "focus-ring inline-flex rounded-md border border-slate-100 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="space-y-5">
      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-2xl px-4 py-3 text-sm ${
            mode === "studio"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
          }`}
        >
          {toast}
        </div>
      ) : null}

      <form noValidate onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={labelClasses}>
            {t("Name")}
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className={fieldClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-rose-500">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="company" className={labelClasses}>
              {t("Company")}
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
              className={fieldClasses}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company ? (
              <p id="company-error" className="mt-1 text-xs text-rose-500">
                {errors.company}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              {t("Email")}
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className={fieldClasses}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1 text-xs text-rose-500">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className={labelClasses}>
            {mode === "studio" ? t("What do you want to build?") : t("Service Type")}
          </label>
          {mode === "studio" ? (
            <input
              id="serviceType"
              type="text"
              value={form.serviceType}
              onChange={(event) => setForm((prev) => ({ ...prev, serviceType: event.target.value }))}
              className={fieldClasses}
              aria-invalid={Boolean(errors.serviceType)}
              aria-describedby={errors.serviceType ? "service-error" : undefined}
            />
          ) : (
            <select
              id="serviceType"
              value={form.serviceType}
              onChange={(event) => setForm((prev) => ({ ...prev, serviceType: event.target.value }))}
              className={fieldClasses}
              aria-invalid={Boolean(errors.serviceType)}
              aria-describedby={errors.serviceType ? "service-error" : undefined}
            >
              <option value="">{t("Select a service")}</option>
              {serviceTypeOptions.map((option) => (
                <option value={option} key={option}>
                  {t(option)}
                </option>
              ))}
            </select>
          )}
          {errors.serviceType ? (
            <p id="service-error" className="mt-1 text-xs text-rose-500">
              {errors.serviceType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            {t("Message")}
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            className={fieldClasses}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-xs text-rose-500">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button type="submit" disabled={!canSubmit} className={submitClasses}>
          {mode === "studio" ? t("Send brief") : t("Submit request")}
        </button>
      </form>
    </div>
  );
}
