import { metadataBaseUrl, siteConfig } from "@/lib/site-config";

export function LocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.area}`,
      addressLocality: siteConfig.address.city,
      addressCountry: "GH",
    },
    openingHoursSpecification: siteConfig.hours.days
      .filter((day) => day.hours !== "Closed")
      .map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.day,
        opens: "08:00",
        closes: "17:00",
      })),
  };

  const base = metadataBaseUrl();
  if (base) {
    data.url = base.toString();
    data.image = new URL("/images/white-floral-tiers.jpg", base).toString();
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
