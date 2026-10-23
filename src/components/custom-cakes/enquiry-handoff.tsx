"use client";

import { Button } from "@/components/ui/button";
import { copyText } from "@/lib/clipboard";
import { useState } from "react";

export function EnquiryHandoff({
  title,
  description,
  message,
  url,
  opened,
  onEdit,
}: {
  title: string;
  description: string;
  message: string;
  url: string;
  opened: boolean;
  onEdit: () => void;
}) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function onCopy() {
    const copied = await copyText(message);
    setCopyState(copied ? "copied" : "failed");
  }

  return (
    <div className="border border-line bg-ivory px-5 py-8 sm:px-8" role="status">
      <h2 tabIndex={-1} className="font-display text-4xl text-espresso">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-cocoa">{description}</p>
      {!opened ? (
        <p className="mt-4 text-sm leading-6 text-danger">
          The WhatsApp window did not open. Use the button below, or copy the enquiry and paste it into a chat with the bakery.
        </p>
      ) : (
        <p className="mt-4 text-sm leading-6 text-cocoa">
          If WhatsApp opened, you still need to press send. Cloud Nine Bakery has not received this enquiry until you do.
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={url} target="_blank" rel="noopener noreferrer">
          Continue to WhatsApp
        </Button>
        <Button type="button" variant="secondary" onClick={onCopy}>
          {copyState === "copied" ? "Enquiry copied" : "Copy enquiry"}
        </Button>
        <Button type="button" variant="ghost" onClick={onEdit}>
          Edit details
        </Button>
      </div>
      {copyState === "failed" ? (
        <p className="mt-4 text-sm text-danger">
          Copying is unavailable in this browser. Select the enquiry below and copy it manually.
        </p>
      ) : null}
      <h3 className="mt-8 text-sm font-semibold tracking-[0.14em] text-espresso uppercase">Your enquiry</h3>
      <textarea readOnly value={message} className="field mt-3 min-h-56 font-sans" aria-label="Enquiry summary" />
    </div>
  );
}
