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
      ? "bg-petrol-900 text-white shadow-soft hover:bg-petrol-700"
      : variant === "secondary"
        ? "border border-gold-300 bg-white text-petrol-900 hover:bg-gold-100"
        : "border border-urban-100 bg-white text-urban-700 hover:bg-urban-100 hover:text-petrol-900";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded px-4 py-2.5 text-sm font-semibold transition ${className}`}
    >
      {Icon ? <Icon width={18} height={18} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Link>
  );
}
