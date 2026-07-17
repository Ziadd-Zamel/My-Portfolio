"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  en: "EN",
  ar: "العربية",
  fr: "FR",
};

const localeFullLabels: Record<string, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t("languageSwitcherLabel")}
          className={cn(
            // Match the social icon pill exactly — same height, same border-radius, same font weight
            "inline-flex items-center gap-1.5 rounded-sm border border-neutral-200 bg-white px-2.5",
            // Mobile matches size-8 (32px), desktop matches size-9 (36px)
            "h-8 text-xs lg:h-9.5 cursor-pointer lg:text-sm",
            "font-semibold text-neutral-800 tracking-wide",
            "transition-all duration-200 ease-out",
            "hover:border-[#2d7a6b]/40 hover:bg-[#2d7a6b]/5 hover:text-[#2d7a6b]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7a6b]/50 focus-visible:ring-offset-2",
            "active:bg-[#2d7a6b]/10",
            className,
          )}
        >
          {/* Globe icon — same size as social icons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="shrink-0 text-[#2d7a6b]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span>{localeLabels[locale] ?? locale.toUpperCase()}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[11rem]">
        <DropdownMenuLabel>{t("languageSwitcherLabel")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(next) => {
            if (next !== locale) router.replace(pathname, { locale: next });
          }}
        >
          {routing.locales.map((loc) => (
            <DropdownMenuRadioItem
              className="cursor-pointer"
              key={loc}
              value={loc}
            >
              {localeFullLabels[loc] ?? loc}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
