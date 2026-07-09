import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { WalletDemoActions } from "@/components/WalletDemoActions";

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
            <h2>Distrito el Golf Pass</h2>
            <p>Proximamente podras agregar este pase a Apple Wallet y Google Wallet.</p>
            <div className="qr-placeholder" aria-label="QR placeholder">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
          <section className="card">
            <h2>Que podras hacer con tu pase</h2>
            <ul className="check-list">
              <li>Ver beneficios activos</li>
              <li>Recibir novedades del distrito</li>
              <li>Acceder al mapa</li>
              <li>Descubrir comercios adheridos</li>
              <li>Participar en actividades</li>
            </ul>
            <WalletDemoActions />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
