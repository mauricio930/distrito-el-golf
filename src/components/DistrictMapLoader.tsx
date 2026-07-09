"use client";

import dynamic from "next/dynamic";
import type { Business } from "@/lib/data";

export const DistrictMapLoader = dynamic<{ businesses?: Business[] }>(
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
