"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Facebook, Instagram, X as XIcon, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  { key: "home" as const, href: "/" },
  { key: "cavb" as const, href: "#" },
  { key: "federations" as const, href: "/federations" },
  { key: "formations" as const, href: "#" },
  { key: "gallery" as const, href: "#" },
  { key: "contact" as const, href: "#" },
] as const;

const socialItems = [
  { Icon: Facebook, key: "socialFacebook" as const },
  { Icon: Instagram, key: "socialInstagram" as const },
  { Icon: XIcon, key: "socialX" as const },
  { Icon: Youtube, key: "socialYoutube" as const },
];

/** Black tiles; hover uses header teal. */
const socialBtn =
  "inline-flex items-center justify-center rounded-sm bg-neutral-950 text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#2d7a6b] hover:text-white hover:shadow-[0_6px_16px_-4px_rgba(45,122,107,0.45)] active:translate-y-0 active:bg-[#256b5e] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7a6b]/50 focus-visible:ring-offset-2";

function isNavActive(pathname: string, href: string): boolean {
  if (href === "#") return false;
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href;
}

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  return (
    <header className="relative z-10 w-full min-w-0 max-w-full border-b border-neutral-200/90 bg-white/95 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)]">
      <div className="box-container">
        <div className="flex min-h-18 min-w-0 max-w-full flex-col gap-4 py-4 lg:min-h-21 lg:flex-row lg:items-stretch lg:gap-0 lg:py-0">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-neutral-200 pb-4 lg:min-w-0 lg:justify-start lg:border-e lg:border-b-0 lg:pb-0 lg:pe-6 xl:pe-10">
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src="/assets/Logo.png"
                alt={t("logoAlt")}
                width={160}
                height={56}
                priority
                sizes="(max-width: 1024px) 140px, 180px"
                className="h-12 w-auto object-contain drop-shadow-sm sm:h-14"
              />
            </Link>
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              {socialItems.map(({ Icon, key }) => (
                <Link
                  key={`m-${key}`}
                  href="#"
                  aria-label={t(key)}
                  className={cn(socialBtn, "size-8")}
                >
                  <Icon
                    className="size-[18px]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          <nav
            aria-label={t("navAriaLabel")}
            className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 border-neutral-200 sm:gap-x-3 lg:flex-nowrap lg:items-stretch lg:gap-x-6 lg:border-e lg:border-t-0 lg:px-4 lg:py-0 xl:px-6"
          >
            {navItems.map(({ key, href }) => {
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={key}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex items-center px-1.5 py-2.5 text-sm font-semibold tracking-wide transition-colors after:absolute after:inset-x-0 after:h-[3px] after:bg-[#2d7a6b] after:transition-transform after:duration-200 after:content-[''] after:-bottom-1 after:origin-left rtl:after:origin-right",
                    "sm:px-2 lg:min-h-21 lg:justify-center lg:self-stretch lg:px-2.5 lg:py-0 lg:after:bottom-0",
                    active
                      ? "text-[#2d7a6b] after:scale-x-100"
                      : "text-neutral-900 after:scale-x-0 hover:text-[#2d7a6b] hover:after:scale-x-100",
                  )}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex lg:justify-end lg:ps-4 xl:ps-8">
            <LanguageSwitcher />
            {socialItems.map(({ Icon, key }) => (
              <Link
                key={key}
                href="#"
                aria-label={t(key)}
                className={cn(socialBtn, "size-9")}
              >
                <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
