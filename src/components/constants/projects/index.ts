import { ACWADY_PROJECT } from "./acwady.constant";
import { AI_CHAT_PROJECT } from "./ai-chat.constant";
import { ALREDWAN_PROJECT } from "./alredwan.constant";
import { DIRBAL_PROJECT } from "./dirbal-website.constant";
import { GOE_PROJECT } from "./goe.constant";
import { HIGH_COURT_PROJECT } from "./high-court.constant";
import { ORDERLY_PROJECT } from "./orderly.constant";
import { TASWERA_PROJECT } from "./taswera.constant";
import { TRADE_LINK_PROJECT } from "./trade-link.constant";
import { TIBBI_PROJECT } from "./tibbi.constant";
import type { CompanyId } from "./companies.constant";
import type { ProjectContent } from "./project.types";

export type { ProjectContent, ProjectLocalizedContent, ProjectAccent } from "./project.types";
export type { CompanyId, Company } from "./companies.constant";
export { COMPANIES, getCompany } from "./companies.constant";
export { getProjectContent, getYouTubeEmbedId, getVideoEmbedSrc } from "./project.types";

export const PROJECTS: ProjectContent[] = [
  ACWADY_PROJECT,
  TIBBI_PROJECT,
  HIGH_COURT_PROJECT,
  TASWERA_PROJECT,
  TRADE_LINK_PROJECT,
  ORDERLY_PROJECT,
  AI_CHAT_PROJECT,
  ALREDWAN_PROJECT,
  DIRBAL_PROJECT,
  GOE_PROJECT,
].map((project) => ({
  ...project,
  /** All freelance until you assign Acwady / Evyx / XAI per project */
  company: project.company ?? ("freelance" as CompanyId),
}));

export function getProjectById(id: string): ProjectContent | undefined {
  return PROJECTS.find((project) => project.id === id);
}

type ProjectCardMeta = {
  id: string;
  company: CompanyId;
  tech: string[];
  accent: ProjectContent["accent"];
  image?: string;
  brandImages: string[];
  liveUrl?: string;
};

function toCardMeta(project: ProjectContent): ProjectCardMeta {
  const brandImages =
    project.brandImages?.length
      ? project.brandImages
      : project.coverImage
        ? [project.coverImage]
        : [];

  return {
    id: project.id,
    company: project.company ?? "freelance",
    tech: project.tech.slice(0, 4),
    accent: project.accent,
    image: project.coverImage ?? brandImages[0],
    brandImages,
    liveUrl: project.links.find((link) => link.kind === "live")?.href,
  };
}

/** All projects — used on /projects and details routes */
export const ALL_PROJECTS = PROJECTS.map(toCardMeta);

/** Home featured strip only */
export const FEATURED_PROJECTS = PROJECTS.filter(
  (project) => project.featured !== false,
).map(toCardMeta);
