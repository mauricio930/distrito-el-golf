import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">Distrito el Golf</Link>
        <nav className="nav" aria-label="Principal">
          <Link href="/">Inicio</Link>
          <Link href="/mapa">Mapa</Link>
          <Link href="/beneficios">Beneficios</Link>
          <Link href="/actividades">Actividades</Link>
          <Link href="/inscribir-negocio">Inscribir mi negocio</Link>
        </nav>
        <Link href="/wallet" className="button button-primary">Agregar a Wallet</Link>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div>
            <Link href="/">Inicio</Link>
            <Link href="/mapa">Mapa</Link>
            <Link href="/beneficios">Beneficios</Link>
            <Link href="/actividades">Actividades</Link>
            <Link href="/inscribir-negocio">Inscribir mi negocio</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        Distrito el Golf / Fundacion Distrito el Golf / Instagram / LinkedIn
      </div>
    </footer>
  );
}
