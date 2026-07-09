import { QrCode, WalletCards } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

export function WalletCTA() {
  return (
    <section className="bg-petrol-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">Protagonista</p>
          <h2 className="mt-2 font-serif text-3xl font-bold">Distrito el Golf Pass</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-urban-100">
            Agrega el pase a tu celular y accede a beneficios, actividades y comercios cercanos cuando la
            integracion Wallet este disponible.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <PrimaryButton href="/wallet" icon={WalletCards} variant="secondary">
            Agregar a Wallet
          </PrimaryButton>
          <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded border border-white/20 px-4 py-2.5 text-sm font-semibold">
            <QrCode size={18} aria-hidden="true" />
            QR placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
