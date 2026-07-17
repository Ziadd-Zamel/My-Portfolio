import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSocials } from "../hero/hero-socials";
import { CONTACT_CHANNELS } from "@/components/constants/home-page.constant";
import { ContactVisual } from "./contact-visual";

const email = CONTACT_CHANNELS.find((c) => c.key === "email")!;
const cv = CONTACT_CHANNELS.find((c) => c.key === "cv")!;

export default async function ContactSection() {
  const t = await getTranslations("HomePage.contact");

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-canvas py-16 sm:py-24"
    >
      <div className="box-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-brand ltr:tracking-[0.2em] ltr:uppercase">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {t("title")}{" "}
              <span className="text-brand">{t("titleAccent")}</span>
            </h2>

            <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-ink-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/70" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {t("available")}
            </p>

            <p className="mt-6 max-w-md text-base leading-8 text-ink-muted sm:text-lg sm:leading-9">
              {t("description")}
            </p>

            <a
              href={email.href}
              dir="ltr"
              className="mt-6 inline-flex items-center gap-2 font-mono text-lg font-bold text-brand transition hover:text-brand-hover sm:text-xl"
            >
              <Mail className="size-5" />
              {email.value}
            </a>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={email.href}>
                  {t("primaryCta")}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={cv.href} download>
                  <Download className="size-4" />
                  {t("secondaryCta")}
                </a>
              </Button>
            </div>

            <div className="mt-7">
              <HeroSocials />
            </div>

            <p className="mt-8 text-sm text-ink-muted">
              {t("meta.responseLabel")}:{" "}
              <span className="font-semibold text-ink">
                {t("meta.responseValue")}
              </span>
              <span className="mx-2 text-line">·</span>
              {t("meta.basedLabel")}:{" "}
              <span className="font-semibold text-ink">
                {t("meta.basedValue")}
              </span>
            </p>
          </div>

          <ContactVisual />
        </div>
      </div>
    </section>
  );
}
