import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/** Production origin — override with NEXT_PUBLIC_SITE_URL */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziad.dev"
).replace(/\/$/, "");

export const SITE_NAME = "Ziad.dev";

export const SITE_CREATOR = {
  name: "Ziad Mahmoud",
  shortName: "Ziad",
  role: "Software Engineer",
  email: "ziadzzamel@gmail.com",
  location: "Egypt",
  company: "Acwady",
  github: "https://github.com/Ziadd-Zamel",
  linkedin: "https://www.linkedin.com/in/ziaddmahmoud/",
  whatsapp: "https://wa.me/201091732409",
} as const;

export const OG_IMAGE = {
  url: "/brand/logo-mark.png",
  width: 1024,
  height: 1024,
  alt: "Ziad.dev — Software Engineer",
} as const;

export type AppLocale = (typeof routing.locales)[number];

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function localePath(locale: string, path = ""): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  const suffix = clean.startsWith("/") ? clean : clean ? `/${clean}` : "";
  return `/${locale}${suffix}`;
}

export function localeAbsoluteUrl(locale: string, path = ""): string {
  return absoluteUrl(localePath(locale, path));
}

/** hreflang map for a path across all locales */
export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localeAbsoluteUrl(locale, path);
  }
  languages["x-default"] = localeAbsoluteUrl(routing.defaultLocale, path);
  return languages;
}

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  image,
  noIndex = false,
  absoluteTitle = false,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  /** When true, ignore the layout title template (use for the home page). */
  absoluteTitle?: boolean;
}): Metadata {
  const url = localeAbsoluteUrl(locale, path);
  const ogImage = image
    ? { url: image, alt: title }
    : {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      url,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [typeof ogImage.url === "string" ? ogImage.url : OG_IMAGE.url],
      creator: "@Ziadd-Zamel",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

function ogLocale(locale: string): string {
  switch (locale) {
    case "ar":
      return "ar_EG";
    case "fr":
      return "fr_FR";
    default:
      return "en_US";
  }
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CREATOR.name,
    alternateName: SITE_CREATOR.shortName,
    url: SITE_URL,
    email: SITE_CREATOR.email,
    jobTitle: SITE_CREATOR.role,
    worksFor: {
      "@type": "Organization",
      name: SITE_CREATOR.company,
      url: "https://acwady.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [
      SITE_CREATOR.github,
      SITE_CREATOR.linkedin,
      SITE_CREATOR.whatsapp,
    ],
    image: absoluteUrl(OG_IMAGE.url),
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Frontend Engineering",
      "Web Performance",
      "UI Systems",
    ],
  };
}

export function websiteJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: localeAbsoluteUrl(locale),
    description:
      "Portfolio of Ziad Mahmoud — Software Engineer at Acwady building products with Next.js, React, and TypeScript.",
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: SITE_CREATOR.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CREATOR.name,
    },
  };
}

export function projectJsonLd({
  locale,
  id,
  title,
  description,
  image,
  tech,
  liveUrl,
}: {
  locale: string;
  id: string;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  liveUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: localeAbsoluteUrl(locale, `/projects/${id}`),
    image: image ? absoluteUrl(image) : absoluteUrl(OG_IMAGE.url),
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: SITE_CREATOR.name,
      url: SITE_URL,
    },
    keywords: tech.join(", "),
    ...(liveUrl ? { sameAs: [liveUrl] } : {}),
  };
}
