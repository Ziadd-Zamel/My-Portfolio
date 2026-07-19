import Image from "next/image";
import { SOCIAL_LINKS } from "@/components/constants/home-page.constant";
import { cn } from "@/lib/utils";

export function HeroSocials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.key}
          href={item.href}
          aria-label={item.label}
          target="_blank"
          rel="noreferrer"
          className="grid size-10 place-items-center rounded-lg border border-line bg-canvas-raised/60 transition-colors hover:border-brand/40 hover:bg-brand-subtle"
        >
          <Image
            src={item.logo}
            alt=""
            width={20}
            height={20}
            className={cn(
              "size-5",
              item.key === "github" && "dark:invert",
            )}
            unoptimized
          />
        </a>
      ))}
    </div>
  );
}
