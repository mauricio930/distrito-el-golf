import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { activities, benefits, businesses, socialPosts } from "@/lib/data";

function MapPreview() {
  return (
    <div className="map-preview" aria-label="Vista previa del mapa del Distrito">
      <span className="pin" style={{ left: "22%", top: "38%" }} />
      <span className="pin" style={{ left: "54%", top: "24%" }} />
      <span className="pin" style={{ left: "68%", top: "58%" }} />
      <span className="pin" style={{ left: "38%", top: "70%" }} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container hero">
          <div>
            <p className="eyebrow">El Golf, Las Condes</p>
            <h1>Distrito el Golf</h1>
            <p className="lead">
              El pase digital para descubrir beneficios, actividades y comercios
              del barrio El Golf.
            </p>
            <div className="hero-actions">
              <Link href="/wallet" className="button button-primary">Agregar a Wallet</Link>
              <Link href="/mapa" className="button button-secondary">Ver mapa</Link>
              <Link href="/inscribir-negocio" className="button button-secondary">Inscribir mi negocio</Link>
            </div>
          </div>
          <aside className="pass-card">
            <p className="pass-label">Distrito el Golf Pass</p>
            <h2>Wallet, mapa y beneficios en preparacion</h2>
            <p>
              Una demo visual para presentar el distrito a locatarios, oficinas,
              aliados y futuros socios.
            </p>
          </aside>
        </section>

        <section className="container section">
          <p className="eyebrow">Como funciona</p>
          <h2>Una experiencia simple desde el celular</h2>
          <div className="grid grid-3">
            {[
              "Agrega el pase a tu Wallet.",
              "Descubre comercios, beneficios y actividades cercanas.",
              "Participa del Distrito el Golf desde tu celular.",
            ].map((step, index) => (
              <article className="card" key={step}>
                <p className="eyebrow">0{index + 1}</p>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <p className="eyebrow">Que es Distrito el Golf</p>
          <h2>Una guia moderna para conectar el barrio</h2>
          <div className="grid grid-3">
            <article className="card">
              <h3>Para usuarios</h3>
              <p className="meta">Un pase digital para descubrir beneficios, actividades y comercios cercanos.</p>
            </article>
            <article className="card">
              <h3>Para locatarios</h3>
              <p className="meta">Una vitrina institucional para aparecer en el mapa y participar en futuras campanas.</p>
            </article>
            <article className="card">
              <h3>Para visitantes</h3>
              <p className="meta">Una forma simple de recorrer El Golf desde el celular, con informacion clara y curada.</p>
            </article>
          </div>
        </section>

        <section className="container section">
          <p className="eyebrow">Beneficios activos</p>
          <h2>Primeras ventajas del distrito</h2>
          <div className="grid grid-4">
            {benefits.map((benefit) => (
              <article className="card" key={benefit.business}>
                <p className="eyebrow">{benefit.category}</p>
                <h3>{benefit.business}</h3>
                <p className="meta">{benefit.offer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <p className="eyebrow">Lo que esta pasando en el Distrito</p>
          <h2>Feed social curado</h2>
          <div className="grid grid-3">
            {socialPosts.map((post) => (
              <article className="social-card" key={post.title}>
                <div className="social-image" />
                <p className="eyebrow">{post.tag}</p>
                <h3>{post.title}</h3>
                <p className="meta">{post.text}</p>
                <Link href="https://www.instagram.com" className="inline-link">Ver en Instagram</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <p className="eyebrow">Proximas actividades</p>
          <h2>Agenda inicial del barrio</h2>
          <div className="grid grid-3">
            {activities.map((activity) => (
              <article className="card" key={activity.title}>
                <p className="eyebrow">{activity.date} / {activity.time}</p>
                <h3>{activity.title}</h3>
                <p className="meta">{activity.place}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <p className="eyebrow">Comercios destacados</p>
          <h2>Primeros puntos de la guia</h2>
          <div className="grid grid-2">
            {businesses.map((business) => (
              <article className="card" key={business.name}>
                <p className="eyebrow">{business.category} / {business.distance}</p>
                <h3>{business.name}</h3>
                <p className="meta">{business.address}</p>
                <p className="meta">{business.benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section">
          <p className="eyebrow">Mapa del Distrito</p>
          <h2>Vista previa georreferenciada</h2>
          <MapPreview />
          <div className="hero-actions">
            <Link href="/mapa" className="button button-secondary">Explorar mapa</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
