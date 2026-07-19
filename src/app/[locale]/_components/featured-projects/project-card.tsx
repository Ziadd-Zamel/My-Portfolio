import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import {
  ALL_PROJECTS,
  getProjectById,
  getProjectContent,
} from "@/components/constants/projects";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Project = (typeof ALL_PROJECTS)[number];

const accents = {
  brand: {
    wash: "from-brand/20 via-brand/8 to-canvas-raised",
    glow: "bg-brand/25",
    bar: "bg-brand",
    soft: "bg-brand/20",
    text: "text-brand",
    hover: "group-hover:border-brand/40",
  },
  copper: {
    wash: "from-copper/20 via-copper/8 to-canvas-raised",
    glow: "bg-copper/25",
    bar: "bg-copper",
    soft: "bg-copper/20",
    text: "text-copper",
    hover: "group-hover:border-copper/40",
  },
  info: {
    wash: "from-info/20 via-info/8 to-canvas-raised",
    glow: "bg-info/25",
    bar: "bg-info",
    soft: "bg-info/20",
    text: "text-info",
    hover: "group-hover:border-info/40",
  },
} as const;

function MockContent({ accent }: { accent: Project["accent"] }) {
  const a = accents[accent];

  if (accent === "brand") {
    return (
      <div className="grid gap-2.5">
        <div className={cn("h-1.5 w-1/3 rounded-full", a.bar)} />
        <div className="h-1.5 w-3/4 rounded-full bg-line" />
        <div className="mt-1 flex h-16 items-end gap-1.5 rounded-lg border border-line bg-canvas-muted/50 px-2 pb-2 pt-3">
          {[40, 65, 48, 78, 55, 88, 62].map((h, i) => (
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
          <div className="h-16 rounded-lg border border-line bg-canvas-muted/60" />
          <div className="grid gap-2">
            <div className={cn("h-7 rounded-lg", a.soft)} />
            <div className="h-7 rounded-lg border border-line bg-canvas-muted/50" />
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
        <div className="h-16 rounded-lg border border-line bg-canvas-muted/55 p-1.5">
          <div className="mb-1 h-1 w-6 rounded-full bg-line" />
          <div className="h-6 rounded-md bg-canvas-raised" />
        </div>
        <div className="h-16 rounded-lg border border-line bg-canvas-muted/55 p-1.5">
          <div className={cn("mb-1 h-1 w-6 rounded-full", a.bar)} />
          <div className="h-8 rounded-md bg-canvas-raised" />
        </div>
        <div className="h-16 rounded-lg border border-line bg-canvas-muted/55 p-1.5">
          <div className="mb-1 h-1 w-6 rounded-full bg-line" />
          <div className="h-4 rounded-md bg-canvas-raised" />
        </div>
      </div>
    </div>
  );
}

export async function ProjectCard({
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
  const image = project.image;

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <article
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas-raised transition-all duration-300",
          a.hover,
          "group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_60px_-42px_var(--glow-brand)]",
        )}
      >
        <div
          className={cn(
            "relative aspect-16/10 overflow-hidden border-b border-line bg-linear-to-br",
            a.wash,
          )}
        >
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0}
            />
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

              <div className="absolute inset-x-5 top-5 bottom-0 translate-y-4 rounded-t-xl border border-line/80 bg-canvas/95 p-3 shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)] transition-transform duration-500 group-hover:translate-y-2 dark:bg-canvas-muted/95">
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

          <span className="absolute inset-s-4 top-4 z-10 rounded-md border border-line bg-canvas/85 px-2 py-1 font-mono text-[11px] font-semibold text-ink-muted backdrop-blur">
            {String(index + 1).padStart(2, "0")} / {project.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.16em] uppercase",
              a.text,
            )}
          >
            {content.category}
          </p>

          <h3 className="mt-2 text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
            {content.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-4">
            {content.cardDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge key={item} variant="neutral" tone="soft" shape="rounded">
                {item}
              </Badge>
            ))}
          </div>

          <div
            className={cn(
              "mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold",
              a.text,
            )}
          >
            <span>{t("details")}</span>
            <span className="grid size-8 place-items-center rounded-lg border border-current/25 transition-all duration-300 group-hover:bg-current/10 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
              <ArrowUpRight className="size-3.5 rtl:-scale-x-100" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
