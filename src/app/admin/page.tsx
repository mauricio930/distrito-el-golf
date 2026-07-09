import { AdminPanel } from "@/components/AdminPanel";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export default function AdminPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Administracion</p>
        <h1>Panel Distrito el Golf</h1>
        <p className="lead">
          Revisa solicitudes de negocios, ajusta coordenadas, administra estados,
          membresias y beneficios visibles en la web.
        </p>
        <AdminPanel />
      </main>
      <SiteFooter />
    </div>
  );
}
