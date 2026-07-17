"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "../config";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" || pathname === "" : false;
}

export function DesktopNav() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  return (
    <nav
      aria-label={t("navAriaLabel")}
      className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
    >
      {NAV_ITEMS.map((item) => {
        const active = isActive(pathname, item.href);
        const className = cn(
          "relative px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink",
          "after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform rtl:after:origin-right",
          "hover:after:scale-x-100",
          active && "text-brand after:scale-x-100",
        );

        if (item.href.startsWith("#")) {
          return (
            <a key={item.key} href={item.href} className={className}>
              {t(`nav.${item.key}`)}
            </a>
          );
        }

        return (
          <Link key={item.key} href={item.href} className={className}>
            {t(`nav.${item.key}`)}
          </Link>
        );
      })}
    </nav>
  );
}
