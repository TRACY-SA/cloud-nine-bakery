import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "light",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}) {
  const Title = as;
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto max-w-2xl text-center", !centered && "max-w-2xl")}>
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "dark" ? "text-blush" : "text-cocoa")}>{eyebrow}</p>
      ) : null}
      <Title
        className={cn(
          "font-display text-[clamp(2.05rem,4.4vw,3.6rem)] leading-[1.08] font-medium tracking-[-0.02em]",
          eyebrow && "mt-3",
          tone === "dark" ? "text-cream" : "text-espresso",
        )}
      >
        {title}
      </Title>
      {children ? (
        <div
          className={cn(
            "mt-4 space-y-3 text-base leading-7 sm:text-lg",
            tone === "dark" ? "text-cream/80" : "text-cocoa",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
