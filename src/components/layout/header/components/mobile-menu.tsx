"use client";

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/components/constants/home-page.constant";
import { NAV_ITEMS, getNavHref, type NavItem } from "../config";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const whatsapp = SOCIAL_LINKS.find((link) => link.key === "whatsapp")!;

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

export function MobileMenu() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  function onSectionClick(event: MouseEvent<HTMLAnchorElement>, item: NavItem) {
    if (!("hash" in item) || !item.hash) return;
    if (!isHome(pathname)) return;
    event.preventDefault();
    scrollToSection(item.hash);
  }

  return (
    <div className="flex items-center gap-1 lg:hidden">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon-sm" aria-label={t("openMenu")}>
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex h-full w-[min(22rem,90vw)] flex-col p-0">
          <SheetHeader className="border-b border-line px-5 py-4 text-start">
            <SheetTitle>{t("menuTitle")}</SheetTitle>
            <SheetDescription>{t("menuDescription")}</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item);
              const className = cn(
                "rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-muted transition-colors hover:bg-canvas-muted hover:text-ink",
                active && "bg-brand-subtle text-brand",
              );

              return (
                <SheetClose key={item.key} asChild>
                  <Link
                    href={getNavHref(item)}
                    className={className}
                    onClick={(event) => onSectionClick(event, item)}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>

          <div className="border-t border-line p-5">
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Button asChild className="flex-1">
                <a href={whatsapp.href} target="_blank" rel="noreferrer">
                  {t("cta")}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
