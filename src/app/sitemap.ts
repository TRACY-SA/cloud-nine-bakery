import { siteConfig } from "@/lib/site-config";
import type { MetadataRoute } from "next";

function siteOrigin(): string {
  return (siteConfig.siteUrl || "http://localhost:3000").replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  const paths = ["", "/our-products", "/custom-cakes", "/about-us", "/contact"];

  return paths.map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
