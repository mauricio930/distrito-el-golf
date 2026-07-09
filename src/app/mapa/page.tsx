import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { businesses } from "@/lib/data";

const filters = ["Cafes", "Restaurantes", "Oficinas", "Servicios", "Descuentos"];

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
        <div className="hero-actions">
          <button className="button button-primary">Usar mi ubicacion</button>
        </div>
        <p className="meta">La georreferenciacion real se integrara en la proxima etapa.</p>
        <section className="wallet-strip compact-strip">
          <div>
            <p className="eyebrow">Conectado al pase</p>
            <h2>Mapa + Wallet</h2>
            <p className="meta">El futuro pase permitira descubrir beneficios cercanos desde el celular.</p>
          </div>
        </section>
        <div className="hero-actions">
          {filters.map((filter) => (
            <button className="button button-secondary" key={filter}>{filter}</button>
          ))}
        </div>
        <div className="map-preview" style={{ marginTop: "1.5rem" }}>
          <span className="pin" style={{ left: "25%", top: "36%" }} />
          <span className="pin" style={{ left: "58%", top: "31%" }} />
          <span className="pin" style={{ left: "72%", top: "61%" }} />
          <span className="pin" style={{ left: "44%", top: "72%" }} />
        </div>
        <div className="grid grid-2">
          {businesses.map((business) => (
            <article className="card" key={business.name}>
              <p className="eyebrow">{business.category} / {business.distance}</p>
              <h3>{business.name}</h3>
              <p className="meta">{business.address}</p>
              <p className="meta">{business.benefit}</p>
              <div className="hero-actions">
                <button className="button button-secondary">Ver en mapa</button>
                <button className="button button-secondary">Como llegar</button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
