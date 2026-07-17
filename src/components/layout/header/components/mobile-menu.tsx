"use client";

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
import { NAV_ITEMS } from "../config";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" || pathname === "" : false;
}

export function MobileMenu() {
  const t = useTranslations("Header");
  const pathname = usePathname();

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
              const active = isActive(pathname, item.href);
              const className = cn(
                "rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-muted transition-colors hover:bg-canvas-muted hover:text-ink",
                active && "bg-brand-subtle text-brand",
              );

              if (item.href.startsWith("#")) {
                return (
                  <SheetClose key={item.key} asChild>
                    <a href={item.href} className={className}>
                      {t(`nav.${item.key}`)}
                    </a>
                  </SheetClose>
                );
              }

              return (
                <SheetClose key={item.key} asChild>
                  <Link href={item.href} className={className}>
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
                <a href="#contact">
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
