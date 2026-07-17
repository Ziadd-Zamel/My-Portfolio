import { HERO_STATS } from "@/components/constants/home-page.constant";
import { getTranslations } from "next-intl/server";

export async function HeroStats() {
  const t = await getTranslations("HomePage");

  return (
    <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-7 sm:gap-6">
      {HERO_STATS.map((stat) => (
        <div key={stat.key} className="min-w-0">
          <dt className="sr-only">{t(`hero.stats.${stat.key}`)}</dt>
          <dd>
            <span className="block text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {stat.value}
            </span>
            <span className="mt-1 block text-xs leading-snug text-ink-muted">
              {t(`hero.stats.${stat.key}`)}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
