import { getTranslations } from "next-intl/server";
import { ALL_PROJECTS } from "@/components/constants/projects";
import { ProjectCard } from "../_components/featured-projects/project-card";

export default async function ProjectsPage() {
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
