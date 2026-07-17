"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function HeaderActions() {
  const t = useTranslations("Header");

  return (
    <div className="hidden items-center gap-1 lg:flex">
      <ThemeToggle />
      <LanguageSwitcher />
      <Button asChild size="sm" className="ms-1">
        <a href="#contact">
          {t("cta")}
          <ArrowUpRight className="size-3.5" />
        </a>
      </Button>
    </div>
  );
}
