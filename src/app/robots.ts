import { siteConfig } from "@/lib/site-config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: origin ? `${origin}/sitemap.xml` : undefined,
  };
}
