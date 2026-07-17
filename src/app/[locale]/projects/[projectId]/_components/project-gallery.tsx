"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  title: string;
  coverImage?: string;
  gallery: string[];
  emptyHint: string;
};

export function ProjectGallery({
  title,
  coverImage,
  gallery,
  emptyHint,
}: ProjectGalleryProps) {
  const slides = [
    ...(coverImage ? [coverImage] : []),
    ...gallery.filter((src) => src !== coverImage),
  ];

  const [index, setIndex] = useState(0);
  const current = slides[index];

  function go(delta: number) {
    if (slides.length < 2) return;
    setIndex((prev) => (prev + delta + slides.length) % slides.length);
  }

  if (!slides.length) {
    return (
      <div className="flex aspect-16/9 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-canvas-raised px-6 text-center">
        <ImageIcon className="size-10 text-ink-muted/50" />
        <p className="max-w-sm text-sm text-ink-muted">{emptyHint}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="group relative aspect-16/9 overflow-hidden rounded-2xl border border-line bg-canvas-raised">
        <Image
          src={current}
          alt={`${title} — ${index + 1}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority={index === 0}
        />

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute start-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-canvas/90 text-ink opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute end-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-canvas/90 text-ink opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="size-5 rtl:rotate-180" />
            </button>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-colors",
                i === index
                  ? "border-brand ring-2 ring-brand/30"
                  : "border-line opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      ) : gallery.length === 0 ? (
        <p className="text-center text-xs text-ink-muted">{emptyHint}</p>
      ) : null}
    </div>
  );
}
