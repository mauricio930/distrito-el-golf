"use client";

import { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { BadgePercent, LocateFixed, MapPin, Navigation, WalletCards } from "lucide-react";
import { activeBusinesses, categoryLabels, districtCenter, mapCategories } from "@/data/businesses";
import { cn, distanceInKm, formatDistance, type GeoPoint } from "@/lib/utils";
import type { Business, CategorySlug } from "@/types/district";

type CategoryFilter = CategorySlug | "todos";

function createMarkerIcon(business: Business, selected: boolean) {
  return L.divIcon({
    className: "",
    html: `<div class="${selected ? "scale-110 bg-gold-300 text-petrol-900" : "bg-petrol-900 text-gold-300"} flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold shadow-lg">${business.featured ? "D" : ""}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
}

function FlyToBusiness({ business }: { business: Business | null }) {
  const map = useMap();

  useEffect(() => {
    if (business) {
      map.flyTo([business.latitude, business.longitude], 17, { duration: 0.6 });
    }
  }, [business, map]);

  return null;
}

function BusinessSheet({
  business,
  userLocation
}: {
  business: Business;
  userLocation: GeoPoint | null;
}) {
  const distanceLabel = userLocation
    ? formatDistance(distanceInKm(userLocation, { latitude: business.latitude, longitude: business.longitude }))
    : null;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`;

  return (
    <article className="rounded-lg border border-urban-100 bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-500">
            {categoryLabels[business.category]}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-petrol-900">{business.name}</h2>
        </div>
        <div className="flex flex-wrap justify-end gap-1">
          {business.featured ? (
            <span className="rounded bg-gold-100 px-2 py-1 text-xs font-semibold text-petrol-900">Destacado</span>
          ) : null}
          {business.walletEligible ? (
            <span className="rounded bg-petrol-900 px-2 py-1 text-xs font-semibold text-white">Wallet</span>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-urban-700">{business.description}</p>
      <div className="mt-4 grid gap-2 text-sm text-urban-700">
        <span className="flex gap-2">
          <MapPin className="mt-0.5 shrink-0 text-petrol-700" size={16} aria-hidden="true" />
          {business.address}
        </span>
        <span className="flex gap-2">
          <BadgePercent className="mt-0.5 shrink-0 text-gold-500" size={16} aria-hidden="true" />
          {business.benefit}
        </span>
        <span>Horario: {business.openingHours}</span>
        <span>Plan: {business.membershipPlan}</span>
        {distanceLabel ? <span>Distancia aproximada: {distanceLabel}</span> : null}
      </div>
      {business.walletEligible ? (
        <p className="mt-4 rounded bg-gold-100 p-3 text-sm leading-6 text-petrol-900">
          Este comercio podra aparecer en campanas y beneficios del Distrito el Golf Pass.
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <a className="inline-flex items-center gap-2 rounded bg-petrol-900 px-3 py-2 text-sm font-semibold text-white" href={directionsUrl}>
          <Navigation size={16} aria-hidden="true" />
          Como llegar
        </a>
        <a className="inline-flex items-center gap-2 rounded border border-urban-100 px-3 py-2 text-sm font-semibold text-petrol-900" href="/beneficios">
          <BadgePercent size={16} aria-hidden="true" />
          Ver beneficio
        </a>
        {business.walletEligible ? (
          <a className="inline-flex items-center gap-2 rounded border border-gold-300 px-3 py-2 text-sm font-semibold text-petrol-900" href="/wallet">
            <WalletCards size={16} aria-hidden="true" />
            Ver en Wallet
          </a>
        ) : null}
      </div>
    </article>
  );
}

function BusinessListCard({
  business,
  userLocation,
  onFocus
}: {
  business: Business;
  userLocation: GeoPoint | null;
  onFocus: (business: Business) => void;
}) {
  const distanceLabel = userLocation
    ? formatDistance(distanceInKm(userLocation, { latitude: business.latitude, longitude: business.longitude }))
    : null;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`;

  return (
    <article className="rounded-lg border border-urban-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-500">
            {categoryLabels[business.category]}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-petrol-900">{business.name}</h3>
        </div>
        <span className="rounded bg-urban-50 px-2 py-1 text-xs font-semibold text-urban-700">
          {business.membershipPlan}
        </span>
      </div>
      <p className="mt-3 text-sm text-urban-700">{business.address}</p>
      <p className="mt-2 text-sm font-semibold text-petrol-900">{business.benefit}</p>
      {distanceLabel ? <p className="mt-2 text-sm text-urban-700">{distanceLabel}</p> : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded bg-petrol-900 px-3 py-2 text-sm font-semibold text-white"
          onClick={() => onFocus(business)}
        >
          Ver en mapa
        </button>
        <a className="rounded border border-urban-100 px-3 py-2 text-sm font-semibold text-petrol-900" href={directionsUrl}>
          Como llegar
        </a>
      </div>
    </article>
  );
}

export function DistrictInteractiveMap() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("todos");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(activeBusinesses[0] ?? null);
  const [userLocation, setUserLocation] = useState<GeoPoint | null>(null);
  const [locationMessage, setLocationMessage] = useState<string | null>(null);

  const filteredBusinesses = useMemo(() => {
    const categoryFiltered =
      selectedCategory === "todos"
        ? activeBusinesses
        : activeBusinesses.filter((business) => business.category === selectedCategory);

    if (!userLocation) return categoryFiltered;

    return [...categoryFiltered].sort(
      (a, b) =>
        distanceInKm(userLocation, { latitude: a.latitude, longitude: a.longitude }) -
        distanceInKm(userLocation, { latitude: b.latitude, longitude: b.longitude })
    );
  }, [selectedCategory, userLocation]);

  function requestLocation() {
    if (!navigator.geolocation) {
      setLocationMessage("Tu navegador no permite geolocalizacion. Puedes seguir explorando el mapa manualmente.");
      return;
    }

    setLocationMessage("Buscando tu ubicacion...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLocationMessage("Estos son los lugares mas cercanos a ti.");
      },
      () => {
        setLocationMessage("No pudimos acceder a tu ubicacion. Puedes seguir explorando el mapa manualmente.");
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  return (
    <div className="grid gap-5">
      <section className="rounded-lg border border-urban-100 bg-white p-3 shadow-soft">
        <div className="mb-3 grid gap-3 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
            {mapCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "min-h-10 shrink-0 rounded px-3 py-2 text-sm font-semibold transition",
                  selectedCategory === category ? "bg-gold-300 text-petrol-900" : "bg-urban-50 text-urban-700"
                )}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={requestLocation}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-petrol-900 px-4 py-2 text-sm font-semibold text-white"
          >
            <LocateFixed size={17} aria-hidden="true" />
            Usar mi ubicacion
          </button>
        </div>

        {locationMessage ? (
          <p className="mb-3 rounded bg-gold-100 px-3 py-2 text-sm font-semibold text-petrol-900">{locationMessage}</p>
        ) : null}

        {filteredBusinesses.length > 0 ? (
          <div className="h-[58svh] min-h-[430px] overflow-hidden rounded-lg bg-urban-100">
            <MapContainer
              center={[districtCenter.latitude, districtCenter.longitude]}
              zoom={15}
              scrollWheelZoom
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FlyToBusiness business={selectedBusiness} />
              {filteredBusinesses.map((business) => (
                <Marker
                  key={business.id}
                  position={[business.latitude, business.longitude]}
                  icon={createMarkerIcon(business, selectedBusiness?.id === business.id)}
                  eventHandlers={{
                    click: () => setSelectedBusiness(business)
                  }}
                >
                  <Popup>
                    <div className="max-w-[230px] p-1">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold-500">
                        {categoryLabels[business.category]}
                      </p>
                      <p className="mt-1 font-semibold text-petrol-900">{business.name}</p>
                      <p className="mt-1 text-sm text-urban-700">{business.benefit}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {userLocation ? (
                <Marker
                  position={[userLocation.latitude, userLocation.longitude]}
                  icon={L.divIcon({
                    className: "",
                    html: '<div class="h-5 w-5 rounded-full border-4 border-white bg-green-700 shadow-lg"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                  })}
                />
              ) : null}
            </MapContainer>
          </div>
        ) : (
          <div className="rounded-lg border border-urban-100 bg-urban-50 p-5 text-sm text-urban-700">
            No hay negocios disponibles para este filtro por ahora.
          </div>
        )}
      </section>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {selectedBusiness ? (
          <BusinessSheet business={selectedBusiness} userLocation={userLocation} />
        ) : (
          <div className="rounded-lg border border-urban-100 bg-white p-4 text-sm text-urban-700">
            Selecciona un marker o una tarjeta para ver la ficha del negocio.
          </div>
        )}

        <section>
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-semibold text-petrol-900">Negocios bajo el mapa</h2>
            <span className="text-sm text-urban-700">{filteredBusinesses.length} activos</span>
          </div>
          <div className="grid gap-3">
            {filteredBusinesses.map((business) => (
              <BusinessListCard
                key={business.id}
                business={business}
                userLocation={userLocation}
                onFocus={setSelectedBusiness}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
