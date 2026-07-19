import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";
import {
  ALL_PROJECTS,
  getProjectById,
  getProjectContent,
} from "@/components/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { buildPageMetadata, projectJsonLd } from "@/lib/seo";
import { ProjectGallery } from "./_components/project-gallery";
import { ProjectVideo } from "./_components/project-video";
import { ProjectCompanyBadge } from "../../_components/featured-projects/project-company-badge";

export function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; projectId: string }>;
}): Promise<Metadata> {
  const { locale, projectId } = await params;
  const project = getProjectById(projectId);
  if (!project) return {};

  const content = getProjectContent(project, locale);
  const image =
    project.coverImage ?? project.brandImages?.[0] ?? "/brand/logo-mark.png";

  return buildPageMetadata({
    locale,
    path: `/projects/${project.id}`,
    title: content.title,
    description: content.cardDescription,
    image,
  });
}

const linkIcon = {
  live: ArrowUpRight,
  github: Github,
  linkedin: Linkedin,
  other: ExternalLink,
} as const;

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; projectId: string }>;
}) {
  const { locale, projectId } = await params;
  setRequestLocale(locale);

  const project = getProjectById(projectId);

  if (!project) notFound();

  const content = getProjectContent(project, locale);
  const t = await getTranslations("ProjectDetails");
  const live = project.links.find((link) => link.kind === "live");
  const image = project.coverImage ?? project.brandImages?.[0];

  return (
    <main className="relative overflow-hidden bg-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectJsonLd({
              locale,
              id: project.id,
              title: content.title,
              description: content.cardDescription,
              image,
              tech: project.tech,
              liveUrl: live?.href,
            }),
          ),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-112 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand)_14%,transparent),transparent_65%)]"
      />

      <div className="box-container relative py-14 sm:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("back")}
        </Link>

        {/* Hero */}
        <header className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            {content.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {content.headline}
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <ProjectCompanyBadge companyId={project.company} size="md" />
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant={tag === "team" || tag === "solo" ? "success" : "info"}
                tone="solid"
                shape="pill"
              >
                {t(`tags.${tag}`)}
              </Badge>
            ))}
          </div>

          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            {content.cardDescription}
          </p>

          {live ? (
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a href={live.href} target="_blank" rel="noreferrer">
                  {t("visitLive")}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          ) : null}
        </header>

        {/* Gallery */}
        <div className="mt-12 sm:mt-16">
          <ProjectGallery
            title={content.title}
            coverImage={project.coverImage}
            gallery={project.gallery}
            emptyHint={t("galleryEmpty")}
          />
        </div>

        {project.videoUrl ? (
          <div className="mt-8 sm:mt-10">
            <h2 className="mb-4 text-lg font-bold text-ink">{t("video")}</h2>
            <ProjectVideo
              videoUrl={project.videoUrl}
              title={`${content.title} — ${t("video")}`}
            />
          </div>
        ) : null}

        {/* Details grid */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
          <aside className="space-y-6">
            <section className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-6">
              <h2 className="text-base font-bold text-ink">{t("metaTitle")}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="text-ink-muted">{t("company")}</dt>
                  <dd className="sm:text-end">
                    <ProjectCompanyBadge companyId={project.company} />
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-ink-muted">{t("type")}</dt>
                  <dd className="font-medium text-ink sm:text-end">
                    {content.typeLabel}
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-ink-muted">{t("team")}</dt>
                  <dd className="font-medium text-ink sm:text-end">
                    {content.teamLabel}
                  </dd>
                </div>
              </dl>
            </section>

            <section className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-6">
              <h2 className="text-base font-bold text-ink">{t("skills")}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge key={item} variant="neutral" tone="soft" shape="pill">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>

            {project.links.length > 0 ? (
              <section className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-6">
                <h2 className="text-base font-bold text-ink">{t("links")}</h2>
                <ul className="mt-4 space-y-2">
                  {project.links.map((link) => {
                    const Icon = linkIcon[link.kind];
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-info transition-colors hover:text-brand"
                        >
                          <Icon className="size-4" />
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : null}
          </aside>

          <div className="space-y-6">
            <section className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-8">
              <h2 className="text-lg font-bold text-ink">{t("overview")}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-secondary sm:text-base">
                {content.overview}
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-8">
              <h2 className="text-lg font-bold text-ink">{t("features")}</h2>
              <ul className="mt-5 space-y-3">
                {content.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-ink-secondary sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-line bg-canvas-raised p-5 sm:p-8">
              <h2 className="text-lg font-bold text-ink">{t("challenges")}</h2>
              <ul className="mt-5 space-y-3">
                {content.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex gap-3 text-sm leading-relaxed text-ink-secondary sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-copper"
                    />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
