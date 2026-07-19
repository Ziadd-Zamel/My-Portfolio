"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  FEATURED_SKILLS,
  SKILL_CATEGORIES,
  SKILLS,
  type SkillAccent,
  type SkillCategoryId,
  type SkillItem,
} from "@/components/constants/skills.constant";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  SkillAccent,
  { soft: string; text: string; ring: string; glow: string; border: string }
> = {
  brand: {
    soft: "bg-brand/12",
    text: "text-brand",
    ring: "ring-brand/20",
    glow: "group-hover:shadow-[0_0_32px_-12px_var(--glow-brand)]",
    border: "group-hover:border-brand/40",
  },
  copper: {
    soft: "bg-copper/12",
    text: "text-copper",
    ring: "ring-copper/20",
    glow: "group-hover:shadow-[0_0_32px_-12px_color-mix(in_oklab,var(--copper)_50%,transparent)]",
    border: "group-hover:border-copper/40",
  },
  info: {
    soft: "bg-info/12",
    text: "text-info",
    ring: "ring-info/20",
    glow: "group-hover:shadow-[0_0_32px_-12px_color-mix(in_oklab,var(--info)_50%,transparent)]",
    border: "group-hover:border-info/40",
  },
};

const DARK_INVERT_LOGOS = new Set(["nextjs", "next-auth"]);

function SkillLogo({
  src,
  alt,
  id,
  size,
}: {
  src: string;
  alt: string;
  id: string;
  size: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn(
        "object-contain",
        DARK_INVERT_LOGOS.has(id) && "dark:invert",
      )}
      style={{ width: size, height: size }}
      unoptimized
    />
  );
}

function FeaturedTile({
  skill,
  label,
}: {
  skill: (typeof FEATURED_SKILLS)[number];
  label: string;
}) {
  const a = accentStyles[skill.accent];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-canvas-raised/80 p-6 transition-all duration-300",
        "hover:-translate-y-1",
        a.border,
        a.glow,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-12 -inset-e-10 size-32 rounded-full blur-3xl transition-opacity",
          a.soft,
          "opacity-50 group-hover:opacity-100",
        )}
      />

      <div
        className={cn(
          "relative grid size-14 place-items-center rounded-2xl bg-canvas ring-1",
          a.ring,
        )}
      >
        <SkillLogo src={skill.logo} alt={skill.label} id={skill.id} size={30} />
      </div>

      <p className="relative mt-5 text-lg font-semibold text-ink">{skill.label}</p>
      <p className={cn("relative mt-1.5 text-sm", a.text)}>{label}</p>
    </div>
  );
}

function SkillTile({
  skill,
  blurb,
  active,
  onSelect,
}: {
  skill: SkillItem;
  blurb: string;
  active: boolean;
  onSelect: () => void;
}) {
  const a = accentStyles[skill.accent];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "group flex flex-col items-center gap-3 rounded-2xl border border-line bg-canvas/70 px-3 py-5 text-center transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-canvas-raised",
        a.border,
        a.glow,
        active && "border-brand/45 bg-canvas-raised ring-1 ring-brand/20",
      )}
    >
      <span className="grid size-12 place-items-center rounded-xl bg-canvas ring-1 ring-line">
        <SkillLogo src={skill.logo} alt="" id={skill.id} size={26} />
      </span>
      <span className="text-sm font-semibold text-ink">{skill.label}</span>
      <span className="sr-only">{blurb}</span>
    </button>
  );
}

export function SkillsShowcase() {
  const t = useTranslations("HomePage.skills");
  const [category, setCategory] = useState<SkillCategoryId | "all">("all");
  const [activeId, setActiveId] = useState<string | null>(FEATURED_SKILLS[0].id);

  const filtered =
    category === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === category);

  const activeSkill =
    filtered.find((skill) => skill.id === activeId) ?? filtered[0] ?? SKILLS[0];

  function selectCategory(next: SkillCategoryId | "all") {
    setCategory(next);
    const nextList =
      next === "all" ? SKILLS : SKILLS.filter((skill) => skill.category === next);
    if (!nextList.some((skill) => skill.id === activeId)) {
      setActiveId(nextList[0]?.id ?? null);
    }
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {FEATURED_SKILLS.map((skill) => (
          <FeaturedTile
            key={skill.id}
            skill={skill}
            label={t(`featured.${skill.id}`)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-brand ltr:tracking-[0.18em] ltr:uppercase">
            {t("toolbox.eyebrow")}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
            {t("toolbox.title")}
          </h3>
          <p className="mt-2 text-sm leading-7 text-ink-muted">
            {t("toolbox.description")}
          </p>
        </div>

        <div
          role="tablist"
          aria-label={t("filtersLabel")}
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={category === "all"}
            onClick={() => selectCategory("all")}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              category === "all"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-line bg-canvas-raised/70 text-ink-secondary hover:border-brand/35 hover:text-ink",
            )}
          >
            {t("categories.all")}
          </button>
          {SKILL_CATEGORIES.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={category === id}
              onClick={() => selectCategory(id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                category === id
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-line bg-canvas-raised/70 text-ink-secondary hover:border-brand/35 hover:text-ink",
              )}
            >
              {t(`categories.${id}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((skill) => (
            <SkillTile
              key={skill.id}
              skill={skill}
              blurb={t(`items.${skill.id}`)}
              active={activeSkill?.id === skill.id}
              onSelect={() => setActiveId(skill.id)}
            />
          ))}
        </div>

        <aside className="sticky top-28 overflow-hidden rounded-2xl border border-line bg-canvas-raised/80 p-6 sm:p-7">
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute -top-16 -inset-e-10 size-40 rounded-full blur-3xl",
              accentStyles[activeSkill.accent].soft,
            )}
          />

          <div className="relative flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-2xl bg-canvas ring-1 ring-line">
              <SkillLogo
                src={activeSkill.logo}
                alt={activeSkill.label}
                id={activeSkill.id}
                size={30}
              />
            </span>
            <div>
              <p className="text-xs font-semibold text-brand ltr:tracking-[0.16em] ltr:uppercase">
                {t(`categories.${activeSkill.category}`)}
              </p>
              <h4 className="mt-1 text-xl font-bold text-ink">
                {activeSkill.label}
              </h4>
            </div>
          </div>

          <p className="relative mt-5 text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">
            {t(`items.${activeSkill.id}`)}
          </p>
        </aside>
      </div>
    </div>
  );
}
