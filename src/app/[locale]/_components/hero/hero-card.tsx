"use client";

import { useTranslations } from "next-intl";
import { CODE_LINES } from "@/components/constants/home-page.constant";

export function HeroCard() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative">
      <div
        aria-hidden
        className="motion-glow pointer-events-none absolute -inset-4 rounded-3xl bg-brand/8 blur-2xl dark:bg-brand/6"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-canvas-raised shadow-[0_24px_60px_-44px_var(--glow-brand)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full bg-danger/70" />
          <span className="size-3 rounded-full bg-warning/70" />
          <span className="size-3 rounded-full bg-success/70" />
          <span className="ms-3 font-mono text-xs text-ink-muted">
            {t("hero.card.title")}
          </span>
        </div>

        <pre
          className="overflow-x-auto px-5 py-5 font-mono text-sm leading-6"
          dir="ltr"
        >
          <code>
            {CODE_LINES.map((line, i) => (
              <span
                key={i}
                className="motion-code-line block"
                style={{ animationDelay: `${520 + i * 70}ms` }}
              >
                <span className="me-4 select-none text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {line.map((token, j) => (
                  <span key={j} className={token.cls}>
                    {token.text}
                  </span>
                ))}
              </span>
            ))}
            <span
              className="motion-code-line mt-3 block text-ink-faint"
              style={{ animationDelay: `${520 + CODE_LINES.length * 70}ms` }}
            >
              {t("hero.card.comment")}
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
}
