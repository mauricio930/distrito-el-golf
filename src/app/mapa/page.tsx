import { DistrictMapLoader } from "@/components/DistrictMapLoader";
import { SectionHeader } from "@/components/SectionHeader";

export default function MapPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <SectionHeader
          eyebrow="Mapa real"
          title="Mapa del Distrito"
          description="Explora negocios demo georreferenciados del barrio El Golf. Activa tu ubicacion para ordenar lugares cercanos."
        />
        <p className="mt-3 rounded-lg border border-gold-300 bg-gold-100 p-3 text-sm font-semibold text-petrol-900">
          La georreferenciacion real con datos de comercios registrados se integrara en la proxima etapa.
        </p>
      </div>
      <DistrictMapLoader />
    </main>
  );
}
