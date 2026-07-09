import Image from "next/image";
import { BadgePercent, MapPin } from "lucide-react";
import type { Benefit } from "@/types/district";

type BenefitCardProps = {
  benefit: Benefit;
};

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gold-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-urban-100">
        <Image src={benefit.imageUrl} alt="" fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-500">
          <BadgePercent size={15} aria-hidden="true" />
          {benefit.businessName}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-petrol-900">{benefit.title}</h3>
        <p className="mt-2 text-sm leading-6 text-urban-700">{benefit.description}</p>
        <div className="mt-4 grid gap-2 text-sm text-urban-700">
          <span>Vigencia: {benefit.validUntil}</span>
          <span className="inline-flex items-start gap-1.5">
            <MapPin className="mt-0.5 shrink-0" size={15} aria-hidden="true" />
            {benefit.address}
          </span>
        </div>
        <a
          className="btn-primary-contrast mt-4 inline-flex rounded px-3 py-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(benefit.address + " Las Condes")}`}
        >
          Ver ubicacion
        </a>
      </div>
    </article>
  );
}
