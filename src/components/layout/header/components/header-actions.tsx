"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/components/constants/home-page.constant";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const whatsapp = SOCIAL_LINKS.find((link) => link.key === "whatsapp")!;

export function HeaderActions() {
  const t = useTranslations("Header");

  return (
    <div className="hidden items-center gap-1 lg:flex">
      <ThemeToggle />
      <LanguageSwitcher />
      <Button asChild size="sm" className="ms-1">
        <a href={whatsapp.href} target="_blank" rel="noreferrer">
          {t("cta")}
          <ArrowUpRight className="size-3.5" />
        </a>
      </Button>
    </div>
  );
}
