import { DistrictMapLoader } from "@/components/DistrictMapLoader";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export default function MapPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Mapa</p>
        <h1>Mapa del Distrito</h1>
        <p className="lead">
          Activa tu ubicacion para descubrir comercios y beneficios cerca de ti.
        </p>
        <p className="meta">
          La georreferenciacion GPS real, el panel administrador y el mapa con
          datos conectados a Supabase se integraran en una etapa posterior.
        </p>
        <section className="wallet-strip compact-strip">
          <div>
            <p className="eyebrow">Conectado al pase</p>
            <h2>Mapa + Wallet</h2>
            <p className="meta">
              El futuro pase permitira descubrir beneficios cercanos desde el celular.
            </p>
          </div>
        </section>
        <DistrictMapLoader />
      </main>
      <SiteFooter />
    </div>
  );
}
