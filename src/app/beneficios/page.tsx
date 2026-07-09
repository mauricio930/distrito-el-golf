import { BenefitsExplorer } from "@/components/BenefitsExplorer";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { getPublicBenefits } from "@/lib/supabase-public";

export const dynamic = "force-dynamic";

export default async function BenefitsPage() {
  const benefits = await getPublicBenefits();

  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Beneficios</p>
        <h1>Beneficios activos</h1>
        <p className="lead">
          Promociones demo preparadas para el futuro pase digital Distrito el Golf.
        </p>
        <BenefitsExplorer benefits={benefits} />
      </main>
      <SiteFooter />
    </div>
  );
}
