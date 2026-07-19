import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/components/constants/projects";
import { routing } from "@/i18n/routing";
import { languageAlternates, localeAbsoluteUrl } from "@/lib/seo";

const STATIC_PATHS = ["", "/about", "/projects"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    for (const locale of routing.locales) {
      const routePath = path || "/";
      entries.push({
        url: localeAbsoluteUrl(locale, routePath === "/" ? "" : routePath),
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/projects" ? 0.9 : 0.7,
        alternates: {
          languages: languageAlternates(routePath === "/" ? "" : routePath),
        },
      });
    }
  }

  for (const project of ALL_PROJECTS) {
    const path = `/projects/${project.id}`;
    for (const locale of routing.locales) {
      entries.push({
        url: localeAbsoluteUrl(locale, path),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: languageAlternates(path),
        },
      });
    }
  }

  return entries;
}
