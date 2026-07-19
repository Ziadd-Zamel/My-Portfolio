import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Brand() {
  const t = await getTranslations("Header");

  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90"
    >
      <span className="relative size-10 shrink-0 overflow-hidden rounded-[0.65rem] shadow-[0_10px_24px_-12px_var(--glow-brand)] ring-1 ring-brand/25 transition-transform duration-300 group-hover:scale-[1.03]">
        <Image
          src="/brand/logo-mark-128.png"
          alt=""
          width={40}
          height={40}
          className="size-10 object-cover"
          priority
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-sm font-bold tracking-tight text-ink sm:text-base">
          {t("brandName")}
        </span>
        <span className="block truncate text-xs text-ink-muted">
          {t("brandRole")}
        </span>
      </span>
    </Link>
  );
}
