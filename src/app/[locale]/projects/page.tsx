import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ALL_PROJECTS } from "@/components/constants/projects";
import { ProjectCard } from "../_components/featured-projects/project-card";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Seo.projects" });

  return buildPageMetadata({
    locale,
    path: "/projects",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage.featuredProjects");

  return (
    <section className="relative bg-canvas py-16 sm:py-20">
      <div className="box-container">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {t("allTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-ink-muted">
          {t("allDescription")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ALL_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
