import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <main className="bg-canvas py-16 sm:py-24">
      <div className="box-container max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-8 text-base leading-8 text-ink-muted sm:text-lg sm:leading-9">
          {t("description")}
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/#contact">{t("cta")}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
