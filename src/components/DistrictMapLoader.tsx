"use client";

import dynamic from "next/dynamic";

export const DistrictMapLoader = dynamic(
  () => import("@/components/DistrictMap").then((module) => module.DistrictMap),
  {
    ssr: false,
    loading: () => (
      <div className="interactive-map map-loading" role="status">
        Preparando mapa del Distrito el Golf...
      </div>
    ),
  }
);
