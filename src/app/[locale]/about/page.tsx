import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.about" });

  return buildPageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
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
