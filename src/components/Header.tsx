import Link from "next/link";
import { Menu, WalletCards, MapPin } from "lucide-react";

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/mapa", label: "Mapa" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/actividades", label: "Actividades" },
  { href: "/inscribir-negocio", label: "Inscribir mi negocio" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-urban-100 bg-white/94 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-petrol-900 text-gold-300">
            <MapPin size={18} aria-hidden="true" />
          </span>
          <span className="truncate text-base font-semibold text-petrol-900">Distrito el Golf</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm font-medium text-urban-700 transition hover:bg-urban-100 hover:text-petrol-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/wallet"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded bg-petrol-900 px-3 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-petrol-700"
          >
            <WalletCards size={17} aria-hidden="true" />
            <span className="hidden sm:inline">Agregar a Wallet</span>
            <span className="sm:hidden">Wallet</span>
          </Link>

          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded border border-urban-100 bg-white text-petrol-900">
              <Menu size={19} aria-label="Abrir menu" />
            </summary>
            <div className="absolute right-0 mt-2 w-64 rounded-lg border border-urban-100 bg-white p-2 shadow-soft">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded px-3 py-3 text-sm font-semibold text-urban-700 hover:bg-urban-50 hover:text-petrol-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
