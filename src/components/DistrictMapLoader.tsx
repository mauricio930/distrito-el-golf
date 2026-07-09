"use client";

import dynamic from "next/dynamic";

const DistrictInteractiveMap = dynamic(
  () => import("@/components/DistrictInteractiveMap").then((mod) => mod.DistrictInteractiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[430px] rounded-lg border border-urban-100 bg-urban-50 p-5 text-sm text-urban-700">
        Cargando mapa del Distrito el Golf...
      </div>
    )
  }
);

export function DistrictMapLoader() {
  return <DistrictInteractiveMap />;
}
