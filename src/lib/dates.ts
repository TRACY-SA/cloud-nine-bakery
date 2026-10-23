const ACCRA_TIME_ZONE = "Africa/Accra";

/**
 * Calendar dates for cake enquiries use the bakery's local calendar in
 * Africa/Accra, not the visitor's device timezone. "Today" means today's
 * date in Accra. Call these helpers from event handlers or effects — not
 * during server rendering — because they read the current time.
 */

function readPart(parts: Intl.DateTimeFormatPart[], type: Intl.DateTimeFormatPartTypes): number {
  return Number(parts.find((part) => part.type === type)?.value);
}

export function accraTodayIso(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ACCRA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const year = readPart(parts, "year");
  const month = readPart(parts, "month");
  const day = readPart(parts, "day");
  return formatIsoDate(year, month, day);
}

export function formatIsoDate(year: number, month: number, day: number): string {
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  return (
    utc.getUTCFullYear() === year &&
    utc.getUTCMonth() === month - 1 &&
    utc.getUTCDate() === day
  );
}

export function addMonthsIso(iso: string, months: number): string {
  const [year, month, day] = iso.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1 + months, day));
  return formatIsoDate(utc.getUTCFullYear(), utc.getUTCMonth() + 1, utc.getUTCDate());
}

export function formatDisplayDate(iso: string): string {
  if (!isIsoDate(iso)) return iso;
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
