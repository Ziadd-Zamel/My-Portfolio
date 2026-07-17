import { ACWADY_PROJECT } from "./acwady.constant";
import { ATELIER_STUDIO_PROJECT } from "./atelier-studio.constant";
import { FLOWDESK_PROJECT } from "./flowdesk.constant";
import type { ProjectContent } from "./project.types";

export type { ProjectContent, ProjectLocalizedContent, ProjectAccent } from "./project.types";
export { getProjectContent, getYouTubeEmbedId } from "./project.types";

export const PROJECTS: ProjectContent[] = [
  ACWADY_PROJECT,
  ATELIER_STUDIO_PROJECT,
  FLOWDESK_PROJECT,
];

export function getProjectById(id: string): ProjectContent | undefined {
  return PROJECTS.find((project) => project.id === id);
}

/** Slim list used by home / grid cards */
export const FEATURED_PROJECTS = PROJECTS.map((project) => ({
  id: project.id,
  year: project.year,
  tech: project.tech.slice(0, 4),
  accent: project.accent,
  image: project.coverImage,
  liveUrl: project.links.find((link) => link.kind === "live")?.href,
})) as readonly {
  id: string;
  year: string;
  tech: string[];
  accent: ProjectContent["accent"];
  image?: string;
  liveUrl?: string;
}[];
