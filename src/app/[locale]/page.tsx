import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="mt-3 text-muted-foreground">{t("description")}</p>
    </section>
  );
}
