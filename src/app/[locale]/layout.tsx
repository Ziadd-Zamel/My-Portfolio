import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Inter, Zain } from "next/font/google";
import Providers from "@/components/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { HashScroll } from "@/components/layout/hash-scroll";
import { JsonLd } from "@/components/seo/json-ld";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  SITE_CREATOR,
  SITE_NAME,
  SITE_URL,
  buildPageMetadata,
} from "@/lib/seo";

const zain = Zain({
  subsets: ["arabic"],
  variable: "--font-zain",
  weight: ["400", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-fr",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo" });
  const page = buildPageMetadata({
    locale,
    path: "",
    title: t("home.title"),
    description: t("home.description"),
  });

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_CREATOR.name, url: SITE_URL }],
    creator: SITE_CREATOR.name,
    publisher: SITE_CREATOR.name,
    category: "technology",
    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    title: {
      default: t("home.title"),
      template: t("titleTemplate"),
    },
    description: t("home.description"),
    alternates: page.alternates,
    openGraph: page.openGraph,
    twitter: page.twitter,
    robots: page.robots,
    icons: {
      icon: [
        { url: "/brand/logo-mark.svg", type: "image/svg+xml" },
        { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/favicon-48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const localeBodyFont =
    locale === "ar"
      ? zain.className
      : locale === "fr"
        ? dmSans.className
        : inter.className;

  const fontSansBody =
    locale === "ar"
      ? "var(--font-zain), system-ui, sans-serif"
      : locale === "fr"
        ? "var(--font-fr), ui-sans-serif, system-ui, sans-serif"
        : "var(--font-en), ui-sans-serif, system-ui, sans-serif";

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        zain.variable,
        inter.variable,
        dmSans.variable,
        geistMono.variable,
        localeBodyFont,
      )}
      style={{ "--font-sans-body": fontSansBody } as React.CSSProperties}
    >
      <body>
        <JsonLd locale={locale} />
        <Providers>
          <HashScroll />
          <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden">
            <Header />
            <main className="min-w-0 flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
