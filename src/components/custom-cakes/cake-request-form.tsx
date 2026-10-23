"use client";

import { CakeFlavourSelector } from "@/components/custom-cakes/cake-flavour-selector";
import { CakeSizeSelector } from "@/components/custom-cakes/cake-size-selector";
import { EnquiryHandoff } from "@/components/custom-cakes/enquiry-handoff";
import { Button } from "@/components/ui/button";
import { describedBy, FormField } from "@/components/ui/form-field";
import { occasions } from "@/data/cake-options";
import { accraTodayIso, addMonthsIso } from "@/lib/dates";
import { buildWhatsAppUrl, customCakeMessage, type CakeEnquiry } from "@/lib/whatsapp";
import { hasErrors, validateCakeRequest, type CakeField, type FieldErrors } from "@/lib/validation";
import { useState, type FormEvent } from "react";

const emptyEnquiry: CakeEnquiry = {
  name: "",
  phone: "",
  email: "",
  occasion: "",
  flavour: "",
  size: "",
  date: "",
  message: "",
};

export function CakeRequestForm() {
  const [enquiry, setEnquiry] = useState<CakeEnquiry>(emptyEnquiry);
  const [acknowledged, setAcknowledged] = useState(false);
  const [errors, setErrors] = useState<FieldErrors<CakeField>>({});
  const [preparing, setPreparing] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [handoff, setHandoff] = useState<{ message: string; url: string; opened: boolean } | null>(null);

  function ensureDateBounds() {
    if (minDate) return;
    const today = accraTodayIso(new Date());
    setMinDate(today);
    setMaxDate(addMonthsIso(today, 18));
  }

  function update<K extends keyof CakeEnquiry>(key: K, value: CakeEnquiry[K]) {
    setEnquiry((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (preparing) return;
    const nextErrors = validateCakeRequest({ ...enquiry, acknowledged }, new Date());
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setPreparing(true);
    const message = customCakeMessage(enquiry);
    const url = buildWhatsAppUrl(message);
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    setHandoff({ message, url, opened: popup !== null });
    setPreparing(false);
  }

  if (handoff) {
    return (
      <EnquiryHandoff
        title="Your cake enquiry is ready."
        description="Continue to WhatsApp to send your request to Cloud Nine Bakery. Your date and design will need to be confirmed by the bakery."
        message={handoff.message}
        url={handoff.url}
        opened={handoff.opened}
        onEdit={() => setHandoff(null)}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <FormField id="name" label="Full name" error={errors.name}>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={enquiry.name}
          onChange={(event) => update("name", event.target.value)}
          className="field"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy("name", undefined, errors.name)}
          required
        />
      </FormField>
      <FormField
        id="phone"
        label="Telephone number"
        hint="A number the bakery can use to reach you."
        error={errors.phone}
      >
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={enquiry.phone}
          onChange={(event) => update("phone", event.target.value)}
          className="field"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={describedBy("phone", "A number the bakery can use to reach you.", errors.phone)}
          required
        />
      </FormField>
      <FormField id="email" label="Email address (optional)" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={enquiry.email}
          onChange={(event) => update("email", event.target.value)}
          className="field"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email", undefined, errors.email)}
        />
      </FormField>
      <FormField id="occasion" label="Occasion" error={errors.occasion}>
        <select
          id="occasion"
          name="occasion"
          value={enquiry.occasion}
          onChange={(event) => update("occasion", event.target.value)}
          className="field"
          aria-invalid={errors.occasion ? true : undefined}
          aria-describedby={describedBy("occasion", undefined, errors.occasion)}
          required
        >
          <option value="">Choose an occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion.value} value={occasion.value}>
              {occasion.label}
            </option>
          ))}
        </select>
      </FormField>
      <CakeFlavourSelector value={enquiry.flavour} error={errors.flavour} onChange={(value) => update("flavour", value)} />
      <CakeSizeSelector value={enquiry.size} error={errors.size} onChange={(value) => update("size", value)} />
      <FormField
        id="date"
        label="Desired collection or event date"
        hint="Dates follow the Accra calendar. Choosing a date does not reserve it."
        error={errors.date}
      >
        <input
          id="date"
          name="date"
          type="date"
          value={enquiry.date}
          min={minDate || undefined}
          max={maxDate || undefined}
          onFocus={ensureDateBounds}
          onChange={(event) => update("date", event.target.value)}
          className="field"
          aria-invalid={errors.date ? true : undefined}
          aria-describedby={describedBy("date", "Dates follow the Accra calendar. Choosing a date does not reserve it.", errors.date)}
          required
        />
      </FormField>
      <FormField
        id="message"
        label="Message and design details"
        hint="You might mention colours, wording on the cake, number of guests, dietary needs, or anything else the bakery should know. Dietary requirements should be discussed directly with the bakery."
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          value={enquiry.message}
          onChange={(event) => update("message", event.target.value)}
          className="field"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy(
            "message",
            "You might mention colours, wording on the cake, number of guests, dietary needs, or anything else the bakery should know. Dietary requirements should be discussed directly with the bakery.",
            errors.message,
          )}
          required
        />
      </FormField>
      <p className="text-sm leading-6 text-muted">
        Have a reference photo? Attach it in the WhatsApp chat after your enquiry opens. This page cannot upload images.
      </p>
      <div className="grid gap-2">
        <label className="flex items-start gap-3 text-sm leading-6 text-espresso">
          <input
            id="acknowledged"
            type="checkbox"
            checked={acknowledged}
            onChange={(event) => setAcknowledged(event.target.checked)}
            className="mt-1 h-4 w-4"
            aria-invalid={errors.acknowledged ? true : undefined}
            aria-describedby={errors.acknowledged ? "acknowledged-error" : undefined}
          />
          <span>
            I understand this prepares a WhatsApp enquiry for Cloud Nine Bakery. It does not confirm a booking, price, or collection date.
          </span>
        </label>
        {errors.acknowledged ? (
          <p id="acknowledged-error" role="alert" className="text-sm text-danger">
            {errors.acknowledged}
          </p>
        ) : null}
      </div>
      <div>
        <Button type="submit" disabled={preparing}>
          {preparing ? "Preparing enquiry" : "Prepare WhatsApp enquiry"}
        </Button>
      </div>
    </form>
  );
}
