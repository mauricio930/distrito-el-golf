import { Building2, Coffee, MapPin, Utensils } from "lucide-react";

const pins = [
  { label: "Cafe", className: "left-[22%] top-[30%]", icon: Coffee },
  { label: "Bistro", className: "left-[58%] top-[42%]", icon: Utensils },
  { label: "Oficina", className: "left-[38%] top-[64%]", icon: Building2 }
];

export function MapPreview() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-urban-100 bg-urban-50 shadow-soft">
      {/* Home preview only: the full interactive Leaflet map lives in /mapa. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,72,76,0.09)_1px,transparent_1px),linear-gradient(180deg,rgba(23,72,76,0.09)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold-100/45 via-transparent to-green-100/55" />
      <div className="absolute left-[-8%] right-[-8%] top-1/2 h-9 -translate-y-1/2 rotate-[-10deg] bg-white/92 shadow-sm" />
      <div className="absolute bottom-16 left-[-10%] right-[-10%] h-9 rotate-[12deg] bg-white/92 shadow-sm" />
      <div className="absolute left-[34%] top-[-8%] h-[115%] w-8 rotate-[5deg] bg-white/80 shadow-sm" />
      <div className="absolute left-10 top-10 rounded bg-petrol-900 px-3 py-2 text-sm font-semibold text-white">
        Mapa del Distrito
      </div>
      {pins.map((pin) => (
        <div key={pin.label} className={`absolute ${pin.className}`}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gold-300 text-petrol-900 shadow-soft">
            <pin.icon size={18} aria-hidden="true" />
          </div>
          <p className="mt-1 rounded bg-white px-2 py-1 text-xs font-semibold text-petrol-900 shadow-sm">
            {pin.label}
          </p>
        </div>
      ))}
      <div className="absolute bottom-4 left-4 right-4 rounded bg-white/95 p-3 text-sm text-urban-700">
        <span className="inline-flex items-center gap-2 font-semibold text-petrol-900">
          <MapPin size={16} aria-hidden="true" />
          Preview visual
        </span>
        <p className="mt-1">Explora el mapa real para ver markers, filtros y negocios cercanos.</p>
      </div>
    </div>
  );
}
