export const HERO_STATS = [
  { key: "experience", value: "3+" },
  { key: "projects", value: "40+" },
  { key: "clients", value: "9+" },
] as const;

export const SOCIAL_LINKS = [
  { key: "github", label: "GitHub", href: "#" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "whatsapp", label: "WhatsApp", href: "#" },
] as const;

export const CONTACT_CHANNELS = [
  {
    key: "email",
    label: "Email",
    value: "hello@ziad.dev",
    href: "mailto:hello@ziad.dev",
    action: "copy",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "WhatsApp",
    href: "#",
    action: "open",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ziad",
    href: "#",
    action: "open",
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/ziad",
    href: "#",
    action: "open",
  },
  {
    key: "cv",
    label: "CV",
    value: "ziad-cv.pdf",
    href: "/cv.pdf",
    action: "download",
  },
] as const;

export const CONTACT_INTENTS = ["project", "hire", "chat", "collab"] as const;

export const FEATURED_PROJECTS = [
  {
    id: "pulse-analytics",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Recharts"],
    accent: "brand",
  },
  {
    id: "atelier-studio",
    year: "2024",
    tech: ["React", "Tailwind", "Framer Motion"],
    accent: "copper",
  },
  {
    id: "flowdesk",
    year: "2024",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    accent: "info",
  },
] as const;

export const ABOUT_HIGHLIGHTS = [
  { key: "experience", value: "3+" },
  { key: "projects", value: "40+" },
  { key: "performance", value: "30%" },
  { key: "efficiency", value: "47%" },
] as const;

export const ABOUT_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Figma",
] as const;

export const CODE_LINES = [
  [
    { text: "const", cls: "text-copper" },
    { text: " developer", cls: "text-ink" },
    { text: " = ", cls: "text-ink-muted" },
    { text: "{", cls: "text-ink-muted" },
  ],
  [
    { text: "  name", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "'Ziad'", cls: "text-copper" },
    { text: ",", cls: "text-ink-muted" },
  ],
  [
    { text: "  role", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "'Software Engineer'", cls: "text-copper" },
    { text: ",", cls: "text-ink-muted" },
  ],
  [
    { text: "  location", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "'Egypt'", cls: "text-copper" },
    { text: ",", cls: "text-ink-muted" },
  ],
  [
    { text: "  stack", cls: "text-brand" },
    { text: ": [", cls: "text-ink-muted" },
    { text: "'Next.js'", cls: "text-copper" },
    { text: ", ", cls: "text-ink-muted" },
    { text: "'React'", cls: "text-copper" },
    { text: ", ", cls: "text-ink-muted" },
    { text: "'TS'", cls: "text-copper" },
    { text: "],", cls: "text-ink-muted" },
  ],
  [
    { text: "  focus", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "'clean UI + DX'", cls: "text-copper" },
    { text: ",", cls: "text-ink-muted" },
  ],
  [
    { text: "  available", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "true", cls: "text-info" },
    { text: ",", cls: "text-ink-muted" },
  ],
  [{ text: "};", cls: "text-ink-muted" }],
] as const;
