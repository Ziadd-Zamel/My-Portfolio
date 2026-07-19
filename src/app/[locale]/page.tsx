import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroSection from "./_components/hero/hero-section";
import FeaturedProjectsSection from "./_components/featured-projects/featured-projects-section";
import AboutSection from "./_components/about/about-section";
import SkillsSection from "./_components/skills/skills-section";
import ContactSection from "./_components/contact/contact-section";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.home" });

  return buildPageMetadata({
    locale,
    path: "",
    title: t("title"),
    description: t("description"),
    absoluteTitle: true,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
