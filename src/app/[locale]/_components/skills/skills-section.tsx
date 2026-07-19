import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { SkillsShowcase } from "./skills-showcase";

export default async function SkillsSection() {
  const t = await getTranslations("HomePage.skills");

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-canvas-muted/40 py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="motion-glow pointer-events-none absolute -top-24 inset-e-0 size-96 rounded-full bg-brand/8 blur-3xl dark:bg-brand/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 inset-s-0 size-88 rounded-full bg-copper/10 blur-3xl dark:bg-transparent"
      />

      <div className="box-container relative">
        <Reveal variant="blur">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand ltr:tracking-[0.2em] ltr:uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {t("title")}{" "}
              <span className="text-brand">{t("titleAccent")}</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-ink-muted sm:text-lg sm:leading-9">
              {t("description")}
            </p>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100} className="mt-12">
          <SkillsShowcase />
        </Reveal>
      </div>
    </section>
  );
}
