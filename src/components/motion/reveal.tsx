"use client";

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "blur" | "left" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Delay in ms after entering the viewport */
  delay?: number;
  /** Run once on mount instead of waiting for scroll */
  immediate?: boolean;
  as?: "div" | "span" | "section" | "header" | "li";
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  immediate = false,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(immediate);

  const onIntersect = useEffectEvent((visible: boolean) => {
    if (visible) setInView(true);
  });

  useEffect(() => {
    if (immediate) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => onIntersect(entry.isIntersecting),
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref as never}
      className={cn("motion-ready", className)}
      data-variant={variant}
      data-inview={inView ? "true" : "false"}
      style={{ animationDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
