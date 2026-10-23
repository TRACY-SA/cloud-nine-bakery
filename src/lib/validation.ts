import { contactSubjects, flavours, occasions, sizes } from "@/data/cake-options";
import { accraTodayIso, addMonthsIso, isIsoDate } from "@/lib/dates";
import type { CakeEnquiry, ContactEnquiry } from "@/lib/whatsapp";

export type FieldErrors<K extends string> = Partial<Record<K, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}][\p{L}\s.'’-]*$/u;

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!/^\+?[\d\s()-]{9,22}$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

function validateName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your full name.";
  if (trimmed.length < 2 || trimmed.length > 80 || !namePattern.test(trimmed)) {
    return "Please enter a name using letters, spaces, apostrophes, or hyphens.";
  }
  return undefined;
}

function validatePhone(value: string): string | undefined {
  if (!value.trim()) return "Please enter a telephone number.";
  if (!isValidPhone(value)) {
    return "Enter a valid telephone number. Include the country code if you are outside Ghana.";
  }
  return undefined;
}

function validateOptionalEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (trimmed.length > 120 || !emailPattern.test(trimmed)) {
    return "Enter a valid email address, or leave this field blank.";
  }
  return undefined;
}

export type CakeField =
  | "name"
  | "phone"
  | "email"
  | "occasion"
  | "flavour"
  | "size"
  | "date"
  | "message"
  | "acknowledged";

export function validateCakeRequest(
  input: CakeEnquiry & { acknowledged: boolean },
  now: Date,
): FieldErrors<CakeField> {
  const errors: FieldErrors<CakeField> = {};
  const nameError = validateName(input.name);
  const phoneError = validatePhone(input.phone);
  const emailError = validateOptionalEmail(input.email);
  if (nameError) errors.name = nameError;
  if (phoneError) errors.phone = phoneError;
  if (emailError) errors.email = emailError;

  if (!occasions.some((item) => item.value === input.occasion)) {
    errors.occasion = "Please choose an occasion.";
  }
  if (!flavours.some((item) => item.value === input.flavour)) {
    errors.flavour = "Please choose a flavour preference.";
  }
  if (!sizes.some((item) => item.value === input.size)) {
    errors.size = "Please choose a cake size.";
  }

  const today = accraTodayIso(now);
  const latest = addMonthsIso(today, 18);
  if (!input.date) {
    errors.date = "Please choose a collection or event date.";
  } else if (!isIsoDate(input.date)) {
    errors.date = "Please choose a valid date.";
  } else if (input.date < today) {
    errors.date = "Please choose today or a future date on the Accra calendar.";
  } else if (input.date > latest) {
    errors.date = "Please choose a date within the next 18 months.";
  }

  const message = input.message.trim();
  if (message.length < 10) {
    errors.message = "Add a short note about the design or celebration (at least 10 characters).";
  } else if (message.length > 800) {
    errors.message = "Please keep the message under 800 characters.";
  }

  if (!input.acknowledged) {
    errors.acknowledged = "Please confirm that this form prepares an enquiry and does not confirm an order.";
  }

  return errors;
}

export type ContactField = "name" | "phone" | "email" | "subject" | "message";

export function validateContactRequest(input: ContactEnquiry): FieldErrors<ContactField> {
  const errors: FieldErrors<ContactField> = {};
  const nameError = validateName(input.name);
  const phoneError = validatePhone(input.phone);
  const emailError = validateOptionalEmail(input.email);
  if (nameError) errors.name = nameError;
  if (phoneError) errors.phone = phoneError;
  if (emailError) errors.email = emailError;

  if (!contactSubjects.some((subject) => subject === input.subject)) {
    errors.subject = "Please choose a subject.";
  }

  const message = input.message.trim();
  if (message.length < 10) {
    errors.message = "Please write a short message (at least 10 characters).";
  } else if (message.length > 800) {
    errors.message = "Please keep the message under 800 characters.";
  }

  return errors;
}

export function hasErrors(errors: object): boolean {
  return Object.keys(errors).length > 0;
}
