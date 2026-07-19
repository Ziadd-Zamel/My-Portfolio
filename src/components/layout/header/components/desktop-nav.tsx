"use client";

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, getNavHref, type NavItem } from "../config";

function isHome(pathname: string) {
  return pathname === "/" || pathname === "";
}

function isActive(pathname: string, item: NavItem) {
  return !("hash" in item) && isHome(pathname);
}

function scrollToSection(hash: string) {
  const el = document.getElementById(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${hash}`);
}

export function DesktopNav() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  function onSectionClick(event: MouseEvent<HTMLAnchorElement>, item: NavItem) {
    if (!("hash" in item) || !item.hash) return;
    if (!isHome(pathname)) return;
    event.preventDefault();
    scrollToSection(item.hash);
  }

  return (
    <nav
      aria-label={t("navAriaLabel")}
      className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
    >
      {NAV_ITEMS.map((item) => {
        const active = isActive(pathname, item);
        const className = cn(
          "relative px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink",
          "after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform rtl:after:origin-right",
          "hover:after:scale-x-100",
          active && "text-brand after:scale-x-100",
        );

        return (
          <Link
            key={item.key}
            href={getNavHref(item)}
            className={className}
            onClick={(event) => onSectionClick(event, item)}
          >
            {t(`nav.${item.key}`)}
          </Link>
        );
      })}
    </nav>
  );
}
