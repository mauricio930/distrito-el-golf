import { AdminPanel } from "@/components/AdminPanel";

export default function AdminPage() {
  return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="eyebrow">Administracion</p>
        <h1>Panel Distrito el Golf</h1>
        <p className="lead">
          Revisa solicitudes de negocios, ajusta coordenadas, administra estados,
          membresias y beneficios visibles en la web.
        </p>
        <AdminPanel />
      </main>
  );
}
