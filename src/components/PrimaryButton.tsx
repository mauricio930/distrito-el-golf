import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
};

export function PrimaryButton({ href, children, icon: Icon, variant = "primary" }: PrimaryButtonProps) {
  const className =
    variant === "primary"
      ? "btn-primary-contrast shadow-soft"
      : variant === "secondary"
        ? "btn-secondary-gold"
        : "btn-outline-contrast";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded px-4 py-2.5 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2 ${className}`}
    >
      {Icon ? <Icon width={18} height={18} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Link>
  );
}
