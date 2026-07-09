import Image from "next/image";
import { BadgePercent, Camera, Map, MapPin, Navigation } from "lucide-react";
import { categoryLabels } from "@/data/businesses";
import type { Business } from "@/types/district";

type BusinessCardProps = {
  business: Business;
  compact?: boolean;
};

export function BusinessCard({ business, compact = false }: BusinessCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-urban-100 bg-white shadow-sm">
      {!compact ? (
        <div className="relative aspect-[4/3] bg-urban-100">
          <Image src={business.imageUrl} alt="" fill className="object-cover" />
        </div>
      ) : null}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-500">
              {categoryLabels[business.category]}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-petrol-900">{business.name}</h3>
          </div>
          {business.featured ? (
            <span className="rounded bg-gold-100 px-2 py-1 text-xs font-semibold text-petrol-900">
              Destacado
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-urban-700">{business.description}</p>
        <div className="mt-3 grid gap-2 text-sm text-urban-700">
          <span className="inline-flex items-start gap-1.5">
            <MapPin className="mt-0.5 shrink-0" size={15} aria-hidden="true" />
            {business.address}
          </span>
          <span className="inline-flex items-start gap-1.5">
            <BadgePercent className="mt-0.5 shrink-0 text-gold-500" size={15} aria-hidden="true" />
            {business.benefit}
          </span>
          {business.distanceLabel ? (
            <span className="inline-flex items-center gap-1.5">
              <Navigation size={15} aria-hidden="true" />
              {business.distanceLabel}
            </span>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <a className="inline-flex items-center gap-1.5 rounded bg-petrol-900 px-3 py-2 font-semibold text-white" href="/mapa">
            <Map size={15} aria-hidden="true" />
            Ver en mapa
          </a>
          <a className="inline-flex items-center gap-1.5 rounded border border-urban-100 px-3 py-2 font-semibold text-petrol-900" href={`https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`}>
            <Navigation size={15} aria-hidden="true" />
            Como llegar
          </a>
          {business.instagramUrl ? (
            <a className="inline-flex items-center gap-1.5 rounded border border-urban-100 px-3 py-2 font-semibold text-petrol-900" href={business.instagramUrl}>
              <Camera size={15} aria-hidden="true" />
              Instagram
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
