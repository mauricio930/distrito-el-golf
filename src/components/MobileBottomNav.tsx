import Link from "next/link";
import { BadgePercent, Home, Map, WalletCards } from "lucide-react";

const bottomItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/mapa", label: "Mapa", icon: Map },
  { href: "/beneficios", label: "Beneficios", icon: BadgePercent },
  { href: "/wallet", label: "Wallet", icon: WalletCards }
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-urban-100 bg-white/96 px-2 py-2 shadow-[0_-12px_30px_rgba(11,42,48,0.10)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex min-h-12 flex-col items-center justify-center gap-1 rounded text-xs font-semibold text-urban-700 transition hover:bg-urban-50 hover:text-petrol-900"
          >
            <item.icon size={18} aria-hidden="true" />
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
