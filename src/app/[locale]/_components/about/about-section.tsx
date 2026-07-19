import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { AboutPlayground } from "./about-playground";

export default async function AboutSection() {
  const t = await getTranslations("HomePage.about");

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-canvas py-16 sm:py-24"
    >
      <div className="box-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal variant="blur">
            <div>
              <p className="text-sm font-semibold text-brand ltr:tracking-[0.2em] ltr:uppercase">
                {t("eyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {t("title")}{" "}
                <span className="text-brand">{t("titleAccent")}</span>
              </h2>

              <p className="mt-3 text-sm font-medium text-ink-secondary">
                {t("role")} · {t("location")}
              </p>

              <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <span className="size-2 rounded-full bg-success" />
                {t("available")}
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-ink-muted sm:text-lg sm:leading-9">
                {t("description")}
              </p>

              <p className="mt-5 text-sm text-ink-secondary">
                {t("playground.prompt")}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/about">
                    {t("primaryCta")}
                    <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">{t("secondaryCta")}</a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal variant="left" delay={120}>
            <AboutPlayground />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
