"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { isActivePath, mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useLayoutEffect, useRef, useState, type MouseEvent } from "react";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  function close(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }

  function follow(href: string, event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    router.push(href);
    setOpen(false);
  }

  useLayoutEffect(() => {
    return () => setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );

    focusable()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <IconButton
        ref={buttonRef}
        label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close(false) : setOpen(true))}
      >
        {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </IconButton>
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="absolute top-full left-0 z-30 h-screen w-full bg-espresso/40"
            onClick={() => close(false)}
          />
          <div
            id={panelId}
            ref={panelRef}
            className="absolute top-full right-0 left-0 z-40 max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-line bg-cream px-5 py-6 shadow-soft"
          >
            <nav aria-label="Mobile">
              <ul className="grid">
                {mainNavigation.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center border-b border-line text-lg text-espresso",
                          active && "font-medium",
                        )}
                        onClick={(event) => follow(item.href, event)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-5">
              <Button
                href="/custom-cakes"
                className="w-full"
                onClick={(event) => follow("/custom-cakes", event)}
              >
                Order a Custom Cake
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
