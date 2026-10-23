export type OpeningDay = {
  day: string;
  hours: string;
};

export type SiteConfig = {
  name: string;
  established: number;
  tagline: string;
  announcement: string;
  shortDescription: string;
  description: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    country: string;
  };
  hours: {
    summary: string;
    sunday: string;
    days: OpeningDay[];
  };
  social: {
    instagram: string;
    facebook: string;
  };
  siteUrl: string;
};

export const siteConfig: SiteConfig = {
  name: "Cloud Nine Bakery",
  established: 2026,
  tagline: "Where every bite feels like a celebration.",
  announcement: "Freshly baked moments, made to celebrate.",
  shortDescription:
    "An artisan bakery and cake shop in Ashongman Estate, Accra, making celebration cakes, pastries, bread, and everyday treats.",
  description:
    "Discover beautiful celebration cakes, cupcakes, pastries, bread, and desserts at Cloud Nine Bakery in Ashongman Estate, Accra, Ghana.",
  phoneDisplay: "+233 53 974 0552",
  phoneTel: "+233539740552",
  whatsappNumber: "233539740552",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim() ?? "",
  address: {
    street: "GS 5562 – 234",
    area: "Ashongman Estate",
    city: "Accra",
    country: "Ghana",
  },
  hours: {
    summary: "Monday–Saturday, 8:00 AM–5:00 PM",
    sunday: "Sunday: Closed",
    days: [
      { day: "Monday", hours: "8:00 AM–5:00 PM" },
      { day: "Tuesday", hours: "8:00 AM–5:00 PM" },
      { day: "Wednesday", hours: "8:00 AM–5:00 PM" },
      { day: "Thursday", hours: "8:00 AM–5:00 PM" },
      { day: "Friday", hours: "8:00 AM–5:00 PM" },
      { day: "Saturday", hours: "8:00 AM–5:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() ?? "",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "",
};

export function addressLine(): string {
  const { street, area, city, country } = siteConfig.address;
  return `${street}, ${area}, ${city}, ${country}`;
}

export function mapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine())}`;
}

export function telHref(): string {
  return `tel:${siteConfig.phoneTel}`;
}

export function configuredUrl(value: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function configuredEmail(value: string): string | null {
  const trimmed = value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return null;
  return trimmed;
}

export function metadataBaseUrl(): URL | undefined {
  if (!siteConfig.siteUrl) return undefined;
  try {
    return new URL(siteConfig.siteUrl);
  } catch {
    return undefined;
  }
}
