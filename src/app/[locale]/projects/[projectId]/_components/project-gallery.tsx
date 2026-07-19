"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  title: string;
  coverImage?: string;
  gallery: string[];
  emptyHint: string;
};

const AUTO_MS = 5000;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

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
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const thumbBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const count = slides.length;
  const multi = count > 1;

  const goTo = useCallback(
    (next: number) => {
      if (!multi) return;
      setIndex(((next % count) + count) % count);
    },
    [count, multi],
  );

  const go = useCallback(
    (delta: number) => goTo(index + delta),
    [goTo, index],
  );

  useEffect(() => {
    if (!multi || paused) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [multi, paused, index, count]);

  useEffect(() => {
    if (!multi || paused) return;

    setProgress(0);
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / AUTO_MS);
      setProgress(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, paused, multi]);

  useEffect(() => {
    const scroller = thumbsRef.current;
    const thumb = thumbBtnRefs.current[index];
    if (!scroller || !thumb) return;

    const nextLeft =
      thumb.offsetLeft - (scroller.clientWidth - thumb.offsetWidth) / 2;

    scroller.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: "smooth",
    });
  }, [index]);

  useEffect(() => {
    if (!multi) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((prev) => (prev - 1 + count) % count);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((prev) => (prev + 1) % count);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, multi]);

  if (!slides.length) {
    return (
      <div className="flex aspect-16/9 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-canvas-raised px-6 text-center">
        <ImageIcon className="size-10 text-ink-muted/50" />
        <p className="max-w-sm text-sm text-ink-muted">{emptyHint}</p>
      </div>
    );
  }

  const trackStyle: CSSProperties = {
    width: `${count * 100}%`,
    transform: `translate3d(-${(index * 100) / count}%, 0, 0)`,
    transition: `transform 650ms ${EASE}`,
  };

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="group relative aspect-16/9 overflow-hidden rounded-2xl border border-line bg-canvas-raised shadow-[0_24px_60px_-40px_rgb(0_0_0/0.35)]"
        dir="ltr"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current;
          const end = e.changedTouches[0]?.clientX;
          touchStartX.current = null;
          if (start == null || end == null) return;
          const dx = end - start;
          if (Math.abs(dx) < 48) return;
          go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="flex h-full will-change-transform" style={trackStyle}>
          {slides.map((src, i) => (
            <div
              key={src}
              className="relative h-full shrink-0 overflow-hidden"
              style={{ width: `${100 / count}%` }}
            >
              <Image
                src={src}
                alt={`${title} — ${i + 1}`}
                fill
                className={cn(
                  "object-cover object-top transition-transform duration-700 ease-out",
                  i === index ? "scale-100" : "scale-[1.04]",
                )}
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.2),transparent_30%),linear-gradient(to_bottom,rgb(0_0_0/0.08),transparent_22%)]"
        />

        {multi ? (
          <>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>

              <div className="h-1 max-w-44 flex-1 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full origin-left rounded-full bg-brand transition-[opacity] duration-200"
                  style={{
                    transform: `scaleX(${progress})`,
                    opacity: paused ? 0.4 : 1,
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute start-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-canvas/90 text-ink shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand/40 hover:text-brand focus-visible:scale-105 focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute end-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-canvas/90 text-ink shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand/40 hover:text-brand focus-visible:scale-105 focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {multi ? (
        <div
          ref={thumbsRef}
          className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          dir="ltr"
        >
          {slides.map((src, i) => {
            const active = i === index;
            return (
              <button
                key={src}
                ref={(node) => {
                  thumbBtnRefs.current[i] = node;
                }}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative h-[4.25rem] w-[6.5rem] shrink-0 overflow-hidden rounded-xl border transition-all duration-500",
                  active
                    ? "scale-100 border-brand opacity-100 shadow-[0_0_0_2px_color-mix(in_oklab,var(--brand)_35%,transparent)]"
                    : "scale-[0.97] border-line opacity-55 hover:scale-100 hover:opacity-90",
                )}
                style={{ transitionTimingFunction: EASE }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className={cn(
                    "object-cover object-top transition-transform duration-500",
                    active ? "scale-100" : "scale-110",
                  )}
                  sizes="104px"
                />
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand transition-transform duration-500",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      ) : gallery.length === 0 ? (
        <p className="text-center text-xs text-ink-muted">{emptyHint}</p>
      ) : null}
    </div>
  );
}
