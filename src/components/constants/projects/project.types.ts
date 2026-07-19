export type ProjectLocale = "en" | "ar" | "fr";

export type ProjectAccent = "brand" | "copper" | "info";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "github" | "linkedin" | "other";
};

export type ProjectLocalizedContent = {
  title: string;
  category: string;
  headline: string;
  cardDescription: string;
  overview: string;
  features: string[];
  challenges: string[];
  typeLabel: string;
  teamLabel: string;
};

export type ProjectContent = {
  id: string;
  year: string;
  completedAt: string;
  accent: ProjectAccent;
  coverImage?: string;
  /** Optional YouTube (or similar) preview — omit when the project has no video */
  videoUrl?: string;
  /** Add screenshot paths later — gallery reads this array */
  gallery: string[];
  tech: string[];
  links: ProjectLink[];
  tags: Array<"team" | "fullStack" | "solo" | "frontend">;
  content: Record<ProjectLocale, ProjectLocalizedContent>;
};

export function getProjectContent(
  project: ProjectContent,
  locale: string,
): ProjectLocalizedContent {
  if (locale === "ar" || locale === "fr") {
    return project.content[locale];
  }
  return project.content.en;
}

/** Supports youtube.com/watch?v=… and youtu.be/… */
export function getYouTubeEmbedId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "") || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

/** Resolves YouTube or Google Drive preview/embed URLs for an iframe */
export function getVideoEmbedSrc(url: string): string | null {
  const youtubeId = getYouTubeEmbedId(url);
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
  }

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("drive.google.com")) {
      const fileMatch = parsed.pathname.match(/\/file\/d\/([^/]+)/);
      if (fileMatch?.[1]) {
        return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
      }
      if (parsed.pathname.includes("/preview")) {
        return `${parsed.origin}${parsed.pathname}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}
