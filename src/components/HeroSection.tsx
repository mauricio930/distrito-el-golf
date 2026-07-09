import Image from "next/image";
import { ArrowRight, CheckCircle2, Map, WalletCards } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

const steps = [
  "Agrega el pase a tu Wallet.",
  "Descubre comercios, beneficios y actividades cercanas.",
  "Participa del Distrito el Golf desde tu celular."
];

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-65px)] max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="py-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-500">
            El Golf, Las Condes
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-petrol-900 sm:text-6xl">
            Distrito el Golf
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-urban-700">
            El pase digital para descubrir beneficios, actividades y comercios del barrio El Golf.
          </p>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <PrimaryButton href="/wallet" icon={WalletCards}>
              Agregar a Wallet
            </PrimaryButton>
            <PrimaryButton href="/mapa" icon={Map} variant="secondary">
              Ver mapa
            </PrimaryButton>
            <PrimaryButton href="/inscribir-negocio" icon={ArrowRight} variant="ghost">
              Inscribir mi negocio
            </PrimaryButton>
          </div>
          <div className="mt-7 grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-3 rounded-lg border border-urban-100 bg-urban-50 p-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-petrol-900 text-sm font-bold text-gold-300">
                  {index + 1}
                </span>
                <p className="text-sm font-medium leading-6 text-urban-700">
                  <CheckCircle2 className="mr-2 inline text-green-700" size={16} aria-hidden="true" />
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-petrol-900 shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
            alt="Vista urbana de un distrito financiero"
            fill
            priority
            className="object-cover opacity-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-petrol-900 via-petrol-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-sm text-gold-100">Wallet, mapa y membresias en preparacion</p>
            <p className="mt-2 max-w-sm text-2xl font-semibold">
              Una guia moderna para descubrir el barrio desde el celular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
