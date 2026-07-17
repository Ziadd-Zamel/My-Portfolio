import { getYouTubeEmbedId } from "@/components/constants/projects/project.types";

type ProjectVideoProps = {
  videoUrl: string;
  title: string;
};

export function ProjectVideo({ videoUrl, title }: ProjectVideoProps) {
  const id = getYouTubeEmbedId(videoUrl);

  if (!id) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-canvas-raised shadow-[0_24px_60px_-40px_rgb(0_0_0/0.35)]">
      <div className="relative aspect-video bg-ink/5">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    </div>
  );
}
