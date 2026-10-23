import { categoryLabel } from "@/data/categories";
import { formatCurrency } from "@/lib/format-currency";
import { formatDisplayDate } from "@/lib/dates";
import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/types";

export type CakeEnquiry = {
  name: string;
  phone: string;
  email: string;
  occasion: string;
  flavour: string;
  size: string;
  date: string;
  message: string;
};

export type ContactEnquiry = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generalEnquiryMessage(): string {
  return [
    "Hello Cloud Nine Bakery! I'd like to get in touch.",
    "",
    "Could you please help me with my question?",
    "",
    "Thank you!",
  ].join("\n");
}

export function customCakeMessage(input: CakeEnquiry): string {
  const lines = [
    "Hello Cloud Nine Bakery! I'd like to enquire about a custom cake.",
    "",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim()}`,
  ];

  if (input.email.trim()) {
    lines.push(`Email: ${input.email.trim()}`);
  }

  lines.push(
    `Occasion: ${input.occasion}`,
    `Flavour: ${input.flavour}`,
    `Size: ${input.size}`,
    `Requested date: ${formatDisplayDate(input.date)}`,
    "",
    "Design and additional details:",
    input.message.trim(),
    "",
    "Could you please let me know the availability and next steps?",
    "",
    "Thank you!",
  );

  return lines.join("\n");
}

export function productEnquiryMessage(product: Product): string {
  return [
    `Hello Cloud Nine Bakery! I'd like to enquire about ${product.name}.`,
    "",
    `Category: ${categoryLabel(product.category)}`,
    `Sample price shown on the website: ${formatCurrency(product.price)} ${product.unit}.`,
    "",
    "Could you please confirm current availability, the current price, and how to order?",
    "",
    "Thank you!",
  ].join("\n");
}

export function contactEnquiryMessage(input: ContactEnquiry): string {
  const lines = [
    "Hello Cloud Nine Bakery! I have a question.",
    "",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim()}`,
  ];

  if (input.email.trim()) {
    lines.push(`Email: ${input.email.trim()}`);
  }

  lines.push(`Subject: ${input.subject}`, "", input.message.trim(), "", "Thank you!");
  return lines.join("\n");
}
