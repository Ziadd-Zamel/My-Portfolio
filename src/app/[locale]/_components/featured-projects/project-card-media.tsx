"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectCardMediaProps = {
  images: string[];
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

const FADE_MS = 3500;

export function ProjectCardMedia({
  images,
  alt = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 40vw",
  className,
}: ProjectCardMediaProps) {
  const slides = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, FADE_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className={cn("absolute inset-0", className)}>
      {slides.map((src, i) => {
        const active = i === index;
        return (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            className={cn(
              "object-cover object-top transition-opacity duration-700 ease-in-out",
              active ? "opacity-100" : "opacity-0",
            )}
          />
        );
      })}
    </div>
  );
}
