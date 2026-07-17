"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  ar: "AR",
  fr: "FR",
};

export function LanguageSwitcher() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label={t("language")}
          className="px-2"
        >
          <Languages className="size-4 text-brand" />
          <span className="text-xs font-semibold tracking-wide">
            {localeLabels[locale] ?? locale.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-32">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            variant={loc === locale ? "brand" : "default"}
            onClick={() => router.replace(pathname, { locale: loc })}
          >
            {localeLabels[loc] ?? loc.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
