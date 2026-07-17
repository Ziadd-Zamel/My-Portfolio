"use client";

import { useEffect, useRef, useState, useEffectEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Gamepad2, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ABOUT_HIGHLIGHTS,
  ABOUT_STACK,
} from "@/components/constants/home-page.constant";

type Command = "whoami" | "stack" | "impact" | "craft" | "clear";
type CraftMode = "ui" | "architecture" | "performance";
type StackKey =
  | "nextjs"
  | "react"
  | "typescript"
  | "nodejs"
  | "tailwind"
  | "figma";

type Line =
  | { id: string; kind: "cmd"; text: string }
  | { id: string; kind: "out"; text: string }
  | { id: string; kind: "stack" }
  | { id: string; kind: "impact" }
  | { id: string; kind: "craft" };

const COMMANDS: Command[] = ["whoami", "stack", "impact", "craft", "clear"];

const STACK_KEY_MAP: Record<string, StackKey> = {
  "Next.js": "nextjs",
  React: "react",
  TypeScript: "typescript",
  "Node.js": "nodejs",
  Tailwind: "tailwind",
  Figma: "figma",
};

export function AboutPlayground() {
  const t = useTranslations("HomePage.about");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const contentDir = isRtl ? "rtl" : "ltr";

  const [lines, setLines] = useState<Line[]>([
    { id: "boot-cmd", kind: "cmd", text: "$ whoami" },
    { id: "boot-1", kind: "out", text: t("playground.whoami.line1") },
    { id: "boot-2", kind: "out", text: t("playground.whoami.line2") },
    { id: "boot-3", kind: "out", text: t("playground.whoami.line3") },
  ]);
  const [busy, setBusy] = useState(false);
  const [activeCmd, setActiveCmd] = useState<Command | null>("whoami");
  const [craft, setCraft] = useState<CraftMode>("ui");
  const [activeStack, setActiveStack] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const locked = useRef(false);
  const lineId = useRef(0);

  function nid() {
    lineId.current += 1;
    return `l-${lineId.current}`;
  }

  const scrollBottom = useEffectEvent(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  });

  useEffect(() => {
    scrollBottom();
  }, [lines, craft, activeStack]);

  async function run(cmd: Command) {
    if (locked.current) return;
    locked.current = true;
    setBusy(true);
    setActiveCmd(cmd);

    if (cmd === "clear") {
      setLines([]);
      setActiveStack(null);
      locked.current = false;
      setBusy(false);
      setActiveCmd(null);
      return;
    }

    setLines([{ id: nid(), kind: "cmd", text: `$ ${cmd}` }]);
    await wait(220);

    if (cmd === "whoami") {
      const bits = [
        t("playground.whoami.line1"),
        t("playground.whoami.line2"),
        t("playground.whoami.line3"),
      ];
      for (const text of bits) {
        setLines((prev) => [...prev, { id: nid(), kind: "out", text }]);
        await wait(140);
      }
    }

    if (cmd === "stack") {
      setLines((prev) => [
        ...prev,
        { id: nid(), kind: "out", text: t("playground.stack.intro") },
        { id: nid(), kind: "stack" },
      ]);
      setActiveStack(ABOUT_STACK[0]);
    }

    if (cmd === "impact") {
      setLines((prev) => [
        ...prev,
        { id: nid(), kind: "out", text: t("playground.impact.intro") },
        { id: nid(), kind: "impact" },
      ]);
    }

    if (cmd === "craft") {
      setLines((prev) => [
        ...prev,
        { id: nid(), kind: "out", text: t("playground.craft.intro") },
        { id: nid(), kind: "craft" },
      ]);
    }

    locked.current = false;
    setBusy(false);
  }

  function stackBlurb(item: string) {
    const key = STACK_KEY_MAP[item] ?? "react";
    return t(`playground.stack.items.${key}`);
  }

  return (
    <div className="relative flex h-128 flex-col overflow-hidden rounded-2xl border border-line bg-canvas-raised shadow-[0_24px_60px_-44px_var(--glow-brand)] sm:h-136">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -inset-e-16 size-56 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -inset-s-10 size-48 rounded-full bg-copper/10 blur-3xl dark:bg-copper/15"
      />

      <div
        dir="ltr"
        className="relative flex items-center gap-2 border-b border-line px-4 py-3"
      >
        <span className="size-2.5 rounded-full bg-danger/70" />
        <span className="size-2.5 rounded-full bg-warning/70" />
        <span className="size-2.5 rounded-full bg-success/70" />
        <p className="ms-3 hidden font-mono text-[11px] tracking-wide text-ink-muted sm:block">
          ziad — about.sh
        </p>
        <span className="ms-auto inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-subtle px-2.5 py-1 text-[10px] font-bold tracking-wide text-brand">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
          </span>
          {t("playground.live")}
        </span>
      </div>

      <div
        dir={contentDir}
        className="relative flex items-center gap-3 border-b border-line bg-canvas/60 px-4 py-3 sm:px-5"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand-subtle text-brand">
          <Gamepad2 className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-ink">{t("playground.title")}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
            {t("playground.subtitle")}
          </p>
        </div>
      </div>

      <div
        ref={scroller}
        className="relative min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4 text-[13px] leading-relaxed sm:px-5"
      >
        {lines.map((line) => {
          if (line.kind === "cmd") {
            return (
              <p
                key={line.id}
                dir="ltr"
                className="font-mono text-brand text-start"
              >
                {line.text}
              </p>
            );
          }

          if (line.kind === "out") {
            return (
              <p
                key={line.id}
                dir={contentDir}
                className={cn(
                  "text-ink-secondary",
                  isRtl ? "font-sans text-sm leading-7" : "font-mono",
                )}
              >
                {line.text}
              </p>
            );
          }

          if (line.kind === "stack") {
            return (
              <div key={line.id} className="space-y-3 pt-1" dir={contentDir}>
                <div className="flex flex-wrap gap-2" dir="ltr">
                  {ABOUT_STACK.map((item) => {
                    const on = activeStack === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setActiveStack(item)}
                        className={cn(
                          "rounded-md border px-2.5 py-1 font-mono text-xs transition",
                          on
                            ? "border-brand bg-brand-subtle text-brand"
                            : "border-line bg-canvas text-ink-muted hover:border-brand/40 hover:text-ink",
                        )}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                {activeStack && (
                  <p
                    className={cn(
                      "text-sm text-ink-muted",
                      isRtl && "font-sans leading-7",
                    )}
                  >
                    <span dir="ltr" className="font-mono text-brand">
                      {activeStack}
                    </span>
                    <span className="text-ink-faint"> — </span>
                    <span dir={contentDir}>{stackBlurb(activeStack)}</span>
                  </p>
                )}
              </div>
            );
          }

          if (line.kind === "impact") {
            return (
              <ul key={line.id} className="space-y-2.5 pt-1" dir={contentDir}>
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <li
                    key={item.key}
                    className="flex items-baseline gap-3 text-ink-secondary"
                  >
                    <ImpactValue value={item.value} />
                    <span
                      className={cn(
                        "text-ink-muted",
                        isRtl ? "font-sans text-sm" : "font-mono",
                      )}
                    >
                      {t(`highlights.${item.key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            );
          }

          if (line.kind === "craft") {
            const modes: CraftMode[] = ["ui", "architecture", "performance"];
            return (
              <div key={line.id} className="space-y-3 pt-1" dir={contentDir}>
                <div className="flex flex-wrap gap-2">
                  {modes.map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setCraft(mode)}
                      className={cn(
                        "rounded-md border px-2.5 py-1.5 text-xs transition",
                        isRtl ? "font-sans font-semibold" : "font-mono",
                        craft === mode
                          ? "border-brand bg-brand-subtle text-brand"
                          : "border-line bg-canvas text-ink-muted hover:border-brand/40 hover:text-ink",
                      )}
                    >
                      {t(`pillars.${mode}.title`)}
                    </button>
                  ))}
                </div>
                <div className="rounded-lg border border-line bg-canvas p-3">
                  <p
                    className={cn(
                      "font-semibold text-ink",
                      isRtl ? "font-sans text-sm" : "font-mono text-sm",
                    )}
                  >
                    {t(`pillars.${craft}.title`)}
                  </p>
                  <p
                    className={cn(
                      "mt-1 leading-relaxed text-ink-muted",
                      isRtl
                        ? "font-sans text-sm leading-7"
                        : "font-mono text-sm",
                    )}
                  >
                    {t(`pillars.${craft}.description`)}
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
                    <div
                      key={craft}
                      className="h-full rounded-full bg-brand transition-all duration-500"
                      style={{
                        width:
                          craft === "ui"
                            ? "92%"
                            : craft === "architecture"
                              ? "88%"
                              : "95%",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}

        <p dir="ltr" className="flex items-center gap-2 font-mono text-brand">
          <span>$</span>
          <span
            className={cn(
              "inline-block h-4 w-2 bg-brand/80",
              busy ? "opacity-40" : "animate-pulse",
            )}
          />
        </p>
      </div>

      <div
        dir={contentDir}
        className="relative shrink-0 border-t border-line bg-canvas/70 px-3 py-3 sm:px-4"
      >
        <div className="mb-2 flex items-center justify-between gap-3">
          <p
            className={cn(
              "text-[10px] tracking-wide text-ink-faint",
              isRtl ? "font-sans" : "font-mono uppercase",
            )}
          >
            {t("playground.run")}
          </p>
          <button
            type="button"
            disabled={busy}
            onClick={() => {
              const choices: Command[] = ["whoami", "stack", "impact", "craft"];
              const currentIndex = activeCmd ? choices.indexOf(activeCmd) : -1;
              const next = choices[(currentIndex + 1) % choices.length];
              void run(next);
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md text-[11px] font-semibold text-brand transition hover:text-brand-hover disabled:opacity-40",
              isRtl && "font-sans",
            )}
          >
            <Shuffle className="size-3" />
            {t("playground.surprise")}
          </button>
        </div>
        <div className="flex flex-wrap gap-2" dir="ltr">
          {COMMANDS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              disabled={busy}
              onClick={() => void run(cmd)}
              className={cn(
                "rounded-md border px-2.5 py-1.5 font-mono text-xs transition disabled:opacity-40",
                activeCmd === cmd
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-line bg-canvas-raised text-ink-muted hover:border-brand/40 hover:text-ink",
              )}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactValue({ value }: { value: string }) {
  const numeric = Number.parseInt(value, 10);
  const suffix = Number.isNaN(numeric)
    ? ""
    : value.slice(String(numeric).length);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (Number.isNaN(numeric)) return;
    let frame = 0;
    const frames = 28;
    const id = window.setInterval(() => {
      frame += 1;
      setN(Math.round((numeric * frame) / frames));
      if (frame >= frames) window.clearInterval(id);
    }, 28);
    return () => window.clearInterval(id);
  }, [numeric]);

  if (Number.isNaN(numeric)) {
    return (
      <span dir="ltr" className="min-w-12 font-mono font-bold text-brand">
        {value}
      </span>
    );
  }

  return (
    <span dir="ltr" className="min-w-12 font-mono font-bold text-brand">
      {n}
      {suffix}
    </span>
  );
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
