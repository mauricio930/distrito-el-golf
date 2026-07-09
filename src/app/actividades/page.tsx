import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { activities } from "@/lib/data";

export default function ActivitiesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Agenda</p>
        <h1>Proximas actividades</h1>
        <p className="lead">Actividades demo para presentar el calendario inicial del distrito.</p>
        <div className="grid">
          {activities.map((activity) => (
            <article className="card" key={activity.title}>
              <div
                className="business-image"
                style={{ backgroundImage: `url(${activity.imageUrl})` }}
                aria-label={activity.title}
              />
              <p className="eyebrow">{activity.date} / {activity.time}</p>
              <h3>{activity.title}</h3>
              <p className="meta">{activity.place}</p>
              <p className="meta">{activity.address}</p>
              <p className="meta">{activity.description}</p>
              <div className="hero-actions">
                <a
                  className="button button-secondary"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver ubicacion
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
