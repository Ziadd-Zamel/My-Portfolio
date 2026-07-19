import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { HeroStats } from "./hero-stats";
import { HeroCard } from "./hero-card";
import { HeroSocials } from "./hero-socials";

export default async function HeroSection() {
  const t = await getTranslations("HomePage");

  return (
    <section className="relative overflow-hidden bg-canvas">
      <div
        aria-hidden
        className="motion-glow pointer-events-none absolute -top-32 -inset-e-24 size-120 rounded-full bg-brand/10 blur-3xl dark:bg-brand/6"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -inset-s-16 size-88 rounded-full bg-copper/8 blur-3xl dark:bg-transparent"
      />

      <div className="box-container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="max-w-xl">
          <Reveal immediate delay={40} variant="blur">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas-raised/70 px-3 py-1 text-xs font-semibold text-ink-secondary backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/70" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {t("hero.available")}
            </span>
          </Reveal>

          <Reveal immediate delay={120} variant="up">
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {t("hero.greeting")}{" "}
              <span className="text-brand">{t("hero.name")}</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={200} variant="up">
            <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-brand uppercase">
              {t("hero.role")}
            </p>
          </Reveal>

          <Reveal immediate delay={280} variant="blur">
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {t("hero.description")}
            </p>
          </Reveal>

          <Reveal immediate delay={360} variant="up">
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href="#work">
                    {t("hero.primaryCta")}
                    <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">{t("hero.secondaryCta")}</a>
                </Button>
              </div>

              <div className="hidden h-8 w-px bg-line sm:block" aria-hidden />

              <HeroSocials />
            </div>
          </Reveal>

          <Reveal immediate delay={460} variant="up">
            <HeroStats />
          </Reveal>
        </div>

        <Reveal
          immediate
          delay={220}
          variant="left"
          className="hidden lg:block"
        >
          <div className="motion-float">
            <HeroCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
