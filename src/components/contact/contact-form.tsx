"use client";

import { EnquiryHandoff } from "@/components/custom-cakes/enquiry-handoff";
import { Button } from "@/components/ui/button";
import { describedBy, FormField } from "@/components/ui/form-field";
import { contactSubjects } from "@/data/cake-options";
import { buildWhatsAppUrl, contactEnquiryMessage, type ContactEnquiry } from "@/lib/whatsapp";
import { hasErrors, validateContactRequest, type ContactField, type FieldErrors } from "@/lib/validation";
import { useState, type FormEvent } from "react";

const emptyEnquiry: ContactEnquiry = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [enquiry, setEnquiry] = useState<ContactEnquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<FieldErrors<ContactField>>({});
  const [preparing, setPreparing] = useState(false);
  const [handoff, setHandoff] = useState<{ message: string; url: string; opened: boolean } | null>(null);

  function update<K extends keyof ContactEnquiry>(key: K, value: ContactEnquiry[K]) {
    setEnquiry((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (preparing) return;
    const nextErrors = validateContactRequest(enquiry);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setPreparing(true);
    const message = contactEnquiryMessage(enquiry);
    const url = buildWhatsAppUrl(message);
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    setHandoff({ message, url, opened: popup !== null });
    setPreparing(false);
  }

  if (handoff) {
    return (
      <EnquiryHandoff
        title="Your message is ready to send."
        description="This form does not deliver messages to a server. Continue to WhatsApp and press send so Cloud Nine Bakery can read it."
        message={handoff.message}
        url={handoff.url}
        opened={handoff.opened}
        onEdit={() => setHandoff(null)}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <p className="text-sm leading-6 text-cocoa">
        The form checks your details in the browser, then prepares a WhatsApp message. Nothing is stored or sent until you send it yourself in WhatsApp.
      </p>
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
      <FormField id="phone" label="Telephone number" error={errors.phone}>
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
          aria-describedby={describedBy("phone", undefined, errors.phone)}
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
      <FormField id="subject" label="Subject" error={errors.subject}>
        <select
          id="subject"
          name="subject"
          value={enquiry.subject}
          onChange={(event) => update("subject", event.target.value)}
          className="field"
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={describedBy("subject", undefined, errors.subject)}
          required
        >
          <option value="">Choose a subject</option>
          {contactSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          value={enquiry.message}
          onChange={(event) => update("message", event.target.value)}
          className="field"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message", undefined, errors.message)}
          required
        />
      </FormField>
      <div>
        <Button type="submit" disabled={preparing}>
          {preparing ? "Preparing message" : "Prepare WhatsApp message"}
        </Button>
      </div>
    </form>
  );
}
