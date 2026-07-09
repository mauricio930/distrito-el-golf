import { SectionHeader } from "@/components/SectionHeader";
import { activities } from "@/lib/data";

export default function ActivitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        eyebrow="Agenda demo"
        title="Proximas actividades"
        description="Actividades ficticias para mostrar como se vera la agenda publica del Distrito el Golf."
      />
      <div className="mt-7 grid gap-4">
        {activities.map((activity) => (
          <article key={activity.id} className="grid gap-4 rounded-lg border border-urban-100 bg-white p-4 shadow-sm md:grid-cols-[170px_1fr_auto] md:items-center">
            <div className="rounded bg-petrol-900 p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-300">Fecha</p>
              <p className="mt-2 text-lg font-semibold">{activity.date}</p>
              <p className="mt-1 text-sm text-urban-100">{activity.time}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-petrol-900">{activity.title}</h2>
              <p className="mt-1 text-sm font-semibold text-gold-500">{activity.location}</p>
              <p className="mt-2 text-sm leading-6 text-urban-700">{activity.description}</p>
            </div>
            <a className="inline-flex min-h-11 items-center justify-center rounded border border-urban-100 px-4 py-2 text-sm font-semibold text-petrol-900" href="#">
              Ver detalle
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
