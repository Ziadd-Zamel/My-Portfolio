"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import NewsGrid from "../_components/news-grid";
import FeaturedNewsSection from "../_components/featured-news-section";

export default function FederationPage() {
  const t = useTranslations("Federation");

  return (
    <div className="p-12 box-container">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">{t("title")}</h1>

      <NewsGrid />
      <div className="w-full">
        <div className="w-full md:max-w-1/2 lg:max-w-2/3">
          <FeaturedNewsSection />
        </div>
      </div>
    </div>
  );
}
