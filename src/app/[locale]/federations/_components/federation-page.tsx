"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import NewsGrid from "./news-grid";
import NewsListSection from "./news-list-section";
import FeaturedNewsSection from "./featured-news-section";

export default function FederationPage() {
  const t = useTranslations("Federation");
  const router = useRouter();

  const zones = [
    { key: "zone1", path: "zone-1" },
    { key: "zone2", path: "zone-2" },
    { key: "zone3", path: "zone-3" },
  ];

  return (
    <div className="p-12 box-container">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">{t("title")}</h1>

      {/* Zones Navigation */}
      <div className="flex gap-2 flex-wrap mb-6">
        {zones.map((zone) => (
          <button
            key={zone.key}
            onClick={() => router.push(`/federations/${zone.path}`)}
            className="bg-black text-white text-xs px-2 py-1  cursor-pointer rounded hover:bg-gray-800"
          >
            {t(`zones.${zone.key}`)}
          </button>
        ))}
      </div>

      <NewsGrid />
      <div className="w-full">
        <div className="w-full md:max-w-1/2 lg:max-w-2/3">
          <NewsListSection />
        </div>
      </div>
    </div>
  );
}
