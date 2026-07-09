import { BadgePercent, Building2, CalendarDays, Info, Map, QrCode, Smartphone, Sparkles, WalletCards } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const passBenefits = [
  { label: "Recibir beneficios", icon: BadgePercent },
  { label: "Recibir novedades del distrito", icon: Sparkles },
  { label: "Acceder al mapa", icon: Map },
  { label: "Descubrir comercios cercanos", icon: Building2 },
  { label: "Participar en actividades", icon: CalendarDays }
];

export default function WalletPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Pase digital"
              title="Distrito el Golf Pass"
              description="Agrega el pase del Distrito el Golf a tu celular y accede a beneficios, actividades y comercios cercanos."
            />
            <p className="mt-4 max-w-xl text-sm leading-6 text-urban-700">
              Proximamente podras agregar este pase a Apple Wallet y Google Wallet.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              {/* Future Wallet integration: replace these placeholders with Apple Wallet and Google Wallet pass links. */}
              <button className="btn-primary-contrast inline-flex min-h-12 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2">
                <WalletCards size={18} aria-hidden="true" />
                Agregar a Apple Wallet
              </button>
              <button className="btn-outline-contrast inline-flex min-h-12 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2">
                <Smartphone size={18} aria-hidden="true" />
                Agregar a Google Wallet
              </button>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded bg-gold-100 px-3 py-2 text-sm font-semibold text-petrol-900">
              <Info size={16} aria-hidden="true" />
              Integracion Wallet en preparacion
            </div>
          </div>
          <div className="rounded-lg border border-urban-100 bg-urban-50 p-4 shadow-soft">
            <div className="mx-auto max-w-[360px] rounded-[28px] bg-petrol-900 p-5 text-white shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Pass</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold">Distrito el Golf</h2>
                </div>
                <WalletCards className="text-gold-300" size={28} aria-hidden="true" />
              </div>
              <p className="mt-8 text-sm leading-6 text-urban-100">
                Beneficios, mapa, actividades y comercios del barrio en una experiencia movil.
              </p>
              <div className="mt-6 grid grid-cols-[1fr_auto] items-end gap-4">
                <div>
                  <p className="text-xs text-gold-100">Estado</p>
                  <p className="font-semibold">Demo en preparacion</p>
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded bg-white text-petrol-900">
                  <QrCode size={70} strokeWidth={1.4} aria-label="QR placeholder" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm font-medium text-urban-700">Mockup visual del pase y QR placeholder</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader eyebrow="Que podras hacer con tu pase" title="Una puerta de entrada al barrio" />
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {passBenefits.map((benefit) => (
            <article key={benefit.label} className="rounded-lg border border-urban-100 bg-white p-4 shadow-sm">
              <benefit.icon className="text-petrol-700" size={20} aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-petrol-900">{benefit.label}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
