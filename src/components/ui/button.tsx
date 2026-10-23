import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-espresso text-cream hover:bg-cocoa",
  secondary: "border border-espresso/25 bg-transparent text-espresso hover:border-espresso hover:bg-white",
  light: "bg-cream text-espresso hover:bg-white",
  ghost: "bg-transparent px-0 text-espresso underline-offset-4 hover:underline",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200";

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = Common & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function buttonClasses(variant: Variant | undefined, className?: string) {
  const chosen = variant ?? "primary";
  return cn(base, variants[chosen], chosen === "ghost" && "min-h-11 px-0", className);
}

function isLink(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof props.href === "string" && props.href.length > 0;
}

export function Button(props: ButtonProps | LinkProps) {
  if (isLink(props)) {
    const classes = buttonClasses(props.variant, props.className);
    const external = /^(https?:|tel:|mailto:)/.test(props.href);
    if (external) {
      return (
        <a href={props.href} className={classes} target={props.target} rel={props.rel} onClick={props.onClick}>
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  const { children, className, variant, ...rest } = props;
  return (
    <button className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
