import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase",
        tone === "dark" ? "bg-espresso text-cream" : "bg-ivory text-cocoa",
      )}
    >
      {children}
    </span>
  );
}
