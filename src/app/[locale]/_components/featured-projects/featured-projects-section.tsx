import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { FEATURED_PROJECTS } from "@/components/constants/home-page.constant";
import {
  getProjectById,
  getProjectContent,
} from "@/components/constants/projects";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCardMedia } from "./project-card-media";
import { ProjectCompanyBadge } from "./project-company-badge";

type Project = (typeof FEATURED_PROJECTS)[number];

const accents = {
  brand: {
    wash: "from-brand/20 via-brand/8 to-canvas-raised",
    glow: "bg-brand/25",
    bar: "bg-brand",
    soft: "bg-brand/20",
    text: "text-brand",
    border: "group-hover:border-brand/40",
  },
  copper: {
    wash: "from-copper/20 via-copper/8 to-canvas-raised",
    glow: "bg-copper/25",
    bar: "bg-copper",
    soft: "bg-copper/20",
    text: "text-copper",
    border: "group-hover:border-copper/40",
  },
  info: {
    wash: "from-info/20 via-info/8 to-canvas-raised",
    glow: "bg-info/25",
    bar: "bg-info",
    soft: "bg-info/20",
    text: "text-info",
    border: "group-hover:border-info/40",
  },
} as const;

function MockContent({ accent }: { accent: Project["accent"] }) {
  const a = accents[accent];

  if (accent === "brand") {
    return (
      <div className="grid gap-2.5">
        <div className={cn("h-1.5 w-1/3 rounded-full", a.bar)} />
        <div className="h-1.5 w-3/4 rounded-full bg-line" />
        <div className="mt-1 flex h-20 items-end gap-1.5 rounded-lg border border-line bg-canvas-muted/50 px-2 pb-2 pt-3">
          {[40, 65, 48, 78, 55, 88, 62, 70].map((h, i) => (
            <span
              key={i}
              className={cn("w-full rounded-t-sm", i % 2 ? a.bar : a.soft)}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (accent === "copper") {
    return (
      <div className="grid gap-2.5">
        <div className={cn("h-1.5 w-1/3 rounded-full", a.bar)} />
        <div className="h-1.5 w-2/3 rounded-full bg-line" />
        <div className="mt-1 grid grid-cols-[1.2fr_0.8fr] gap-2">
          <div className="h-20 rounded-lg border border-line bg-canvas-muted/60" />
          <div className="grid gap-2">
            <div className={cn("h-9 rounded-lg", a.soft)} />
            <div className="h-9 rounded-lg border border-line bg-canvas-muted/50" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2.5">
      <div className={cn("h-1.5 w-1/3 rounded-full", a.bar)} />
      <div className="h-1.5 w-3/5 rounded-full bg-line" />
      <div className="mt-1 grid grid-cols-3 gap-1.5">
        <div className="h-20 rounded-lg border border-line bg-canvas-muted/55 p-1.5">
          <div className="mb-1 h-1 w-6 rounded-full bg-line" />
          <div className="h-8 rounded-md bg-canvas-raised" />
        </div>
        <div className="h-20 rounded-lg border border-line bg-canvas-muted/55 p-1.5">
          <div className={cn("mb-1 h-1 w-6 rounded-full", a.bar)} />
          <div className="h-10 rounded-md bg-canvas-raised" />
        </div>
        <div className="h-20 rounded-lg border border-line bg-canvas-muted/55 p-1.5">
          <div className="mb-1 h-1 w-6 rounded-full bg-line" />
          <div className="h-5 rounded-md bg-canvas-raised" />
        </div>
      </div>
    </div>
  );
}

function RowPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const a = accents[project.accent];
  const brandImages = project.brandImages;

  return (
    <div
      className={cn(
        "relative min-h-64 overflow-hidden border-b border-line bg-linear-to-br md:min-h-full md:border-b-0 md:border-e",
        a.wash,
      )}
    >
      {brandImages.length > 0 ? (
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectCardMedia
            images={brandImages}
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      ) : (
        <>
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute -top-12 -inset-e-10 size-44 rounded-full blur-3xl",
              a.glow,
            )}
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.035)_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.045)_1px,transparent_1px)]" />

          <div className="absolute inset-x-5 top-5 bottom-0 translate-y-4 rounded-t-xl border border-line/80 bg-canvas/95 p-3 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)] transition-transform duration-500 group-hover:translate-y-2 dark:bg-canvas-muted/95 md:inset-x-6 md:top-6">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-danger/70" />
              <span className="size-2 rounded-full bg-warning/70" />
              <span className="size-2 rounded-full bg-success/70" />
              <span className="ms-2 h-1.5 w-20 rounded-full bg-line" />
            </div>
            <MockContent accent={project.accent} />
          </div>
        </>
      )}

      <span className="absolute inset-s-4 top-4 z-10">
        <ProjectCompanyBadge companyId={project.company} />
      </span>
    </div>
  );
}

async function ProjectRowCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const t = await getTranslations("HomePage.featuredProjects");
  const locale = await getLocale();
  const full = getProjectById(project.id);
  const content = full
    ? getProjectContent(full, locale)
    : { category: "", title: project.id, cardDescription: "" };
  const a = accents[project.accent];

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <article
        className={cn(
          "grid overflow-hidden rounded-2xl border border-line bg-canvas-raised transition-all duration-300 md:grid-cols-[minmax(16rem,0.9fr)_minmax(0,1.1fr)]",
          a.border,
          "group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_-42px_var(--glow-brand)]",
        )}
      >
        <RowPreview project={project} index={index} />

        <div className="flex min-h-72 flex-col justify-center p-5 sm:min-h-80 sm:p-8">
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.16em] uppercase",
              a.text,
            )}
          >
            {content.category}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
            {content.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-muted sm:text-base sm:leading-8 line-clamp-5">
            {content.cardDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink-secondary"
              >
                {item}
              </span>
            ))}
          </div>

          <div
            className={cn(
              "mt-6 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold",
              a.text,
            )}
          >
            <span>{t("details")}</span>
            <span className="grid size-8 place-items-center rounded-lg border border-current/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-current/10 rtl:group-hover:-translate-x-0.5">
              <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function FeaturedProjectsSection() {
  const t = await getTranslations("HomePage.featuredProjects");

  return (
    <section
      id="work"
      className="relative scroll-mt-24 bg-canvas py-16 sm:py-20"
    >
      <div className="box-container">
        <Reveal variant="blur">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t("title")}
            </h2>

            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
            >
              {t("viewAll")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {FEATURED_PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 120}
              variant={index % 2 === 0 ? "up" : "left"}
            >
              <ProjectRowCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
