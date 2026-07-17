import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { FEATURED_PROJECTS } from "@/components/constants/home-page.constant";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({ projectId: project.id }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = FEATURED_PROJECTS.find((item) => item.id === projectId);

  if (!project) notFound();

  const t = await getTranslations("HomePage.featuredProjects");

  return (
    <main className="box-container py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
        {t(`items.${project.id}.category`)}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
        {t(`items.${project.id}.title`)}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
        {t(`items.${project.id}.description`)}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <Badge key={item} variant="neutral" tone="soft" shape="rounded">
            {item}
          </Badge>
        ))}
      </div>
    </main>
  );
}
