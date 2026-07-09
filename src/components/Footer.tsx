import Link from "next/link";
import { BriefcaseBusiness, Camera, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-urban-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-petrol-900">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-petrol-900 text-gold-300">
              <MapPin size={17} aria-hidden="true" />
            </span>
            Distrito el Golf
          </Link>
          <p className="mt-2 max-w-xl text-sm leading-6 text-urban-700">
            Landing inicial de la Fundacion Distrito el Golf. Wallet, mapa real, pagos y Supabase se conectaran
            en etapas posteriores.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="rounded border border-urban-100 p-2 text-urban-700 transition hover:border-gold-300 hover:text-petrol-900"
            href="https://instagram.com"
            aria-label="Instagram Distrito el Golf"
          >
            <Camera size={18} />
          </a>
          <a
            className="rounded border border-urban-100 p-2 text-urban-700 transition hover:border-gold-300 hover:text-petrol-900"
            href="https://linkedin.com"
            aria-label="LinkedIn Distrito el Golf"
          >
            <BriefcaseBusiness size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
