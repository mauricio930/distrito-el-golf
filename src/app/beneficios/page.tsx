import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { benefits } from "@/lib/data";

const filters = ["Todos", "Gastronomia", "Cafe", "Servicios", "Bienestar", "Oficinas", "Estacionamiento"];

export default function BenefitsPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Beneficios</p>
        <h1>Beneficios activos</h1>
        <p className="lead">Promociones demo preparadas para el futuro pase digital.</p>
        <div className="hero-actions">
          {filters.map((filter) => (
            <button className="button button-secondary" key={filter}>{filter}</button>
          ))}
        </div>
        <div className="grid grid-2">
          {benefits.map((benefit) => (
            <article className="card" key={benefit.business}>
              <p className="eyebrow">{benefit.category}</p>
              <h3>{benefit.business}</h3>
              <p className="meta">{benefit.offer}</p>
              <p className="meta">{benefit.validUntil}</p>
              <p className="meta">{benefit.address}</p>
              <div className="hero-actions">
                <button className="button button-secondary">Ver ubicacion</button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
