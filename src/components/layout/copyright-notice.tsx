"use client";

import { siteConfig } from "@/lib/site-config";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function currentYear() {
  return new Date().getFullYear();
}

function establishedYear() {
  return siteConfig.established;
}

export function CopyrightNotice() {
  const year = useSyncExternalStore(subscribe, currentYear, establishedYear);

  return (
    <span suppressHydrationWarning>
      © {year} {siteConfig.name}
    </span>
  );
}
