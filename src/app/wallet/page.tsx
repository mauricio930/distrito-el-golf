import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export default function WalletPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Pase digital</p>
        <h1>Distrito el Golf Pass</h1>
        <p className="lead">
          Agrega el pase del Distrito el Golf a tu celular y accede a beneficios,
          actividades y comercios cercanos.
        </p>
        <div className="grid grid-2">
          <section className="pass-card">
            <p className="pass-label">Proximamente</p>
            <h2>Apple Wallet y Google Wallet</h2>
            <p>Integracion Wallet en preparacion.</p>
          </section>
          <section className="card">
            <h2>Que podras hacer con tu pase</h2>
            <p className="meta">Ver beneficios activos</p>
            <p className="meta">Recibir novedades del distrito</p>
            <p className="meta">Acceder al mapa</p>
            <p className="meta">Descubrir comercios adheridos</p>
            <p className="meta">Participar en actividades</p>
            <div className="hero-actions">
              <Link href="#" className="button button-primary">Agregar a Apple Wallet</Link>
              <Link href="#" className="button button-secondary">Agregar a Google Wallet</Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
