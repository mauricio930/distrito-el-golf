import Link from "next/link";

const mobileItems = [
  { href: "/", label: "Inicio" },
  { href: "/mapa", label: "Mapa" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/wallet", label: "Wallet" },
];

export function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navegacion movil">
      {mobileItems.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
