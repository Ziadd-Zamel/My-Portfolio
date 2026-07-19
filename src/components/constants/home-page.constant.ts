export const HERO_STATS = [
  { key: "experience", value: "3+" },
  { key: "projects", value: "20+" },
  { key: "clients", value: "6+" },
] as const;

export const SOCIAL_LINKS = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Ziadd-Zamel",
    logo: "/social/github.svg",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ziaddmahmoud/",
    logo: "/social/linkedin.svg",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/201091732409",
    logo: "/social/whatsapp.svg",
  },
] as const;

export const CONTACT_CHANNELS = [
  {
    key: "email",
    label: "Email",
    value: "ziadzzamel@gmail.com",
    href: "mailto:ziadzzamel@gmail.com",
    action: "copy",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "+20 109 173 2409",
    href: "https://wa.me/201091732409",
    action: "open",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/ziaddmahmoud",
    href: "https://www.linkedin.com/in/ziaddmahmoud/",
    action: "open",
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/Ziadd-Zamel",
    href: "https://github.com/Ziadd-Zamel",
    action: "open",
  },
  {
    key: "cv",
    label: "CV",
    value: "ziad-cv.pdf",
    href: "/ziad/ziad%20mahmoud%20Frontend%20Developer%20cv_251130_103619.pdf",
    action: "download",
  },
] as const;

export const CONTACT_INTENTS = ["project", "hire", "chat", "collab"] as const;

export { FEATURED_PROJECTS } from "./projects";

export const ABOUT_HIGHLIGHTS = [
  { key: "experience", value: "3+" },
  { key: "projects", value: "20+" },
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
    { text: "  company", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "'Acwady'", cls: "text-copper" },
    { text: ",", cls: "text-ink-muted" },
  ],
  [
    { text: "  since", cls: "text-brand" },
    { text: ": ", cls: "text-ink-muted" },
    { text: "'Jan 2026'", cls: "text-copper" },
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
  [{ text: "};", cls: "text-ink-muted" }],
] as const;
