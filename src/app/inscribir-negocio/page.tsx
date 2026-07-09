import { BusinessRegistrationForm } from "@/components/BusinessRegistrationForm";
import { SectionHeader } from "@/components/SectionHeader";

export default function RegisterBusinessPage() {
  return (
    <main className="bg-urban-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeader
            eyebrow="Comercios adheridos"
            title="Inscribir mi negocio"
            description="Al inscribir tu negocio podras aparecer en el mapa oficial del Distrito el Golf y participar en futuras campanas, beneficios y experiencias digitales del distrito."
          />
          <div className="mt-6 rounded-lg border border-gold-300 bg-white p-4">
            <p className="font-semibold text-petrol-900">Integraciones futuras</p>
            <p className="mt-2 text-sm leading-6 text-urban-700">
              Aqui se conectaran Supabase, revision administrativa, membresias y pagos cuando el proyecto avance.
            </p>
          </div>
        </aside>
        <BusinessRegistrationForm />
      </div>
    </main>
  );
}
