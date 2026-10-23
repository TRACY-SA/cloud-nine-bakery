import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

export function IconButton({
  label,
  className,
  children,
  ref,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}) {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center border border-line bg-cream text-espresso transition-colors hover:bg-ivory",
        className,
      )}
    >
      {children}
    </button>
  );
}
