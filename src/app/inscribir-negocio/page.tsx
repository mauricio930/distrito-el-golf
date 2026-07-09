import { BusinessRegistrationForm } from "@/components/BusinessRegistrationForm";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export default function RegisterBusinessPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Locatarios</p>
        <h1>Inscribir mi negocio</h1>
        <p className="lead">
          Al inscribir tu negocio podras aparecer en el mapa oficial del Distrito
          el Golf y participar en futuras campanas, beneficios y experiencias
          digitales del distrito.
        </p>
        <BusinessRegistrationForm />
      </main>
      <SiteFooter />
    </div>
  );
}
