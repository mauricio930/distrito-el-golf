import { BenefitCard } from "@/components/BenefitCard";
import { SectionHeader } from "@/components/SectionHeader";
import { benefits } from "@/lib/data";

const filters = ["Todos", "Gastronomia", "Cafe", "Servicios", "Bienestar", "Oficinas", "Estacionamiento"];

export default function BenefitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        eyebrow="Beneficios demo"
        title="Beneficios activos"
        description="Listado visual de beneficios ficticios para validar la experiencia antes de integrar Wallet, pagos o base de datos."
      />
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button key={filter} className="shrink-0 rounded bg-white px-3 py-2 text-sm font-semibold text-urban-700 shadow-sm">
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </main>
  );
}
