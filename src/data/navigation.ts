import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/our-products", label: "Our Products" },
  { href: "/custom-cakes", label: "Custom Cakes" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
