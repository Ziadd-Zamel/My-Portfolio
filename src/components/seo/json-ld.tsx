import {
  personJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export function JsonLd({ locale }: { locale: string }) {
  const graph = [personJsonLd(), websiteJsonLd(locale)];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
