import { ACWADY_PROJECT } from "./acwady.constant";
import { HIGH_COURT_PROJECT } from "./high-court.constant";
import { ORDERLY_PROJECT } from "./orderly.constant";
import { TASWERA_PROJECT } from "./taswera.constant";
import { TRADE_LINK_PROJECT } from "./trade-link.constant";
import { TIBBI_PROJECT } from "./tibbi.constant";
import type { ProjectContent } from "./project.types";

export type { ProjectContent, ProjectLocalizedContent, ProjectAccent } from "./project.types";
export { getProjectContent, getYouTubeEmbedId, getVideoEmbedSrc } from "./project.types";

export const PROJECTS: ProjectContent[] = [
  ACWADY_PROJECT,
  TIBBI_PROJECT,
  HIGH_COURT_PROJECT,
  TASWERA_PROJECT,
  TRADE_LINK_PROJECT,
  ORDERLY_PROJECT,
];

export function getProjectById(id: string): ProjectContent | undefined {
  return PROJECTS.find((project) => project.id === id);
}

type ProjectCardMeta = {
  id: string;
  year: string;
  tech: string[];
  accent: ProjectContent["accent"];
  image?: string;
  liveUrl?: string;
};

function toCardMeta(project: ProjectContent): ProjectCardMeta {
  return {
    id: project.id,
    year: project.year,
    tech: project.tech.slice(0, 4),
    accent: project.accent,
    image: project.coverImage,
    liveUrl: project.links.find((link) => link.kind === "live")?.href,
  };
}

/** All projects — used on /projects and details routes */
export const ALL_PROJECTS = PROJECTS.map(toCardMeta);

/** Home featured strip only */
export const FEATURED_PROJECTS = PROJECTS.filter(
  (project) => project.featured !== false,
).map(toCardMeta);
