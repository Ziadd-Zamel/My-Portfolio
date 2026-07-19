export type SkillCategoryId =
  | "frontend"
  | "state"
  | "tooling"
  | "craft";

export type SkillAccent = "brand" | "copper" | "info";

export type SkillItem = {
  id: string;
  label: string;
  accent: SkillAccent;
  category: SkillCategoryId;
  logo: string;
};

export const SKILL_CATEGORIES: SkillCategoryId[] = [
  "frontend",
  "state",
  "tooling",
  "craft",
];

export const FEATURED_SKILLS = [
  {
    id: "nextjs",
    label: "Next.js",
    accent: "brand" as const,
    logo: "/skills/nextjs.svg",
  },
  {
    id: "react",
    label: "React",
    accent: "info" as const,
    logo: "/skills/react.svg",
  },
  {
    id: "typescript",
    label: "TypeScript",
    accent: "brand" as const,
    logo: "/skills/typescript.svg",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    accent: "copper" as const,
    logo: "/skills/tailwind.svg",
  },
] as const;

export const SKILLS: SkillItem[] = [
  { id: "nextjs", label: "Next.js", accent: "brand", category: "frontend", logo: "/skills/nextjs.svg" },
  { id: "react", label: "React", accent: "info", category: "frontend", logo: "/skills/react.svg" },
  { id: "typescript", label: "TypeScript", accent: "brand", category: "frontend", logo: "/skills/typescript.svg" },
  { id: "javascript", label: "JavaScript", accent: "copper", category: "frontend", logo: "/skills/javascript.svg" },
  { id: "tailwind", label: "Tailwind CSS", accent: "copper", category: "frontend", logo: "/skills/tailwind.svg" },
  { id: "html-css", label: "HTML / CSS", accent: "brand", category: "frontend", logo: "/skills/html-css.svg" },
  { id: "rtl-i18n", label: "RTL & i18n", accent: "info", category: "frontend", logo: "/skills/rtl-i18n.svg" },

  { id: "tanstack", label: "TanStack Query", accent: "brand", category: "state", logo: "/skills/tanstack.svg" },
  { id: "zustand", label: "Zustand", accent: "info", category: "state", logo: "/skills/zustand.svg" },
  { id: "zod", label: "Zod", accent: "copper", category: "state", logo: "/skills/zod.svg" },
  { id: "react-hook-form", label: "React Hook Form", accent: "brand", category: "state", logo: "/skills/react-hook-form.svg" },
  { id: "next-auth", label: "NextAuth", accent: "info", category: "state", logo: "/skills/next-auth.svg" },

  { id: "nodejs", label: "Node.js", accent: "brand", category: "tooling", logo: "/skills/nodejs.svg" },
  { id: "git", label: "Git / GitHub", accent: "copper", category: "tooling", logo: "/skills/git.svg" },
  { id: "sentry", label: "Sentry", accent: "info", category: "tooling", logo: "/skills/sentry.svg" },
  { id: "chartjs", label: "Chart.js", accent: "brand", category: "tooling", logo: "/skills/chartjs.svg" },
  { id: "rest-api", label: "REST APIs", accent: "copper", category: "tooling", logo: "/skills/rest-api.svg" },

  { id: "figma", label: "Figma", accent: "copper", category: "craft", logo: "/skills/figma.svg" },
  { id: "ui-systems", label: "UI Systems", accent: "brand", category: "craft", logo: "/skills/ui-systems.svg" },
  { id: "accessibility", label: "Accessibility", accent: "info", category: "craft", logo: "/skills/accessibility.svg" },
  { id: "performance", label: "Web Performance", accent: "brand", category: "craft", logo: "/skills/performance.svg" },
  { id: "responsive", label: "Responsive UX", accent: "copper", category: "craft", logo: "/skills/responsive.svg" },
];
