import { Github, Linkedin, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/components/constants/home-page.constant";
import { cn } from "@/lib/utils";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
} as const;

export function HeroSocials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = socialIcons[item.key];

        return (
          <a
            key={item.key}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-lg border border-line bg-canvas-raised/60 text-ink-muted transition-colors hover:border-brand/40 hover:bg-brand-subtle hover:text-brand"
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
