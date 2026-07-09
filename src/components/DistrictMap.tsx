"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { businesses, categoryFilters, districtCenter, type Business, type Category } from "@/lib/data";

type UserLocation = {
  latitude: number;
  longitude: number;
};

const markerIcon = L.divIcon({
  className: "district-marker",
  html: "<span></span>",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const userIcon = L.divIcon({
  className: "user-marker",
  html: "<span></span>",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

function distanceInMeters(from: UserLocation, business: Business) {
  const radius = 6371000;
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(business.latitude - from.latitude);
  const dLon = toRad(business.longitude - from.longitude);
  const lat1 = toRad(from.latitude);
  const lat2 = toRad(business.latitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(distance?: number) {
  if (distance == null) return "Distancia disponible al usar tu ubicacion";
  if (distance < 1000) return `${Math.round(distance)} m`;
  return `${(distance / 1000).toFixed(1).replace(".", ",")} km`;
}

function MapFocus({ selectedBusiness }: { selectedBusiness?: Business }) {
  const map = useMap();

  useEffect(() => {
    if (selectedBusiness) {
      map.setView([selectedBusiness.latitude, selectedBusiness.longitude], 17, { animate: true });
    }
  }, [map, selectedBusiness]);

  return null;
}

export function DistrictMap() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "todos">("todos");
  const [selectedId, setSelectedId] = useState<string>(businesses[0]?.id ?? "");
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const businessId = params.get("business");
    if (businessId && businesses.some((business) => business.id === businessId)) {
      setSelectedId(businessId);
    }
  }, []);

  const visibleBusinesses = useMemo(() => {
    const filtered =
      selectedCategory === "todos"
        ? businesses
        : businesses.filter((business) => business.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (!userLocation) return 0;
      return distanceInMeters(userLocation, a) - distanceInMeters(userLocation, b);
    });
  }, [selectedCategory, userLocation]);

  const selectedBusiness =
    businesses.find((business) => business.id === selectedId) ?? visibleBusinesses[0];

  function useMyLocation() {
    // Futuro: reemplazar esta demo GPS por georreferenciacion persistente y preferencias del usuario.
    if (!navigator.geolocation) {
      setLocationError("Tu navegador no permite usar ubicacion GPS.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationError("");
      },
      () => {
        setLocationError("No pudimos acceder a tu ubicacion. Puedes seguir explorando el mapa manualmente.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  return (
    <div className="map-layout">
      <div className="map-toolbar">
        <button className="button button-primary" type="button" onClick={useMyLocation}>
          Usar mi ubicacion
        </button>
        <div className="filter-row" aria-label="Filtros de mapa">
          {categoryFilters.map((filter) => (
            <button
              className={`filter-button ${selectedCategory === filter.id ? "is-active" : ""}`}
              key={filter.id}
              type="button"
              onClick={() => setSelectedCategory(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {locationError ? <p className="form-error">{locationError}</p> : null}
      </div>

      <div className="interactive-map">
        <MapContainer
          center={[districtCenter.latitude, districtCenter.longitude]}
          zoom={16}
          scrollWheelZoom
          className="leaflet-map"
        >
          {/* Futuro: conectar capas, comercios y beneficios a Supabase o a un panel administrador. */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapFocus selectedBusiness={selectedBusiness} />
          {userLocation ? <Marker icon={userIcon} position={[userLocation.latitude, userLocation.longitude]} /> : null}
          {visibleBusinesses.map((business) => (
            <Marker
              eventHandlers={{ click: () => setSelectedId(business.id) }}
              icon={markerIcon}
              key={business.id}
              position={[business.latitude, business.longitude]}
            >
              <Popup>
                <strong>{business.name}</strong>
                <br />
                {business.benefit}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="business-panel">
        {visibleBusinesses.map((business) => {
          const distance = userLocation ? distanceInMeters(userLocation, business) : undefined;
          return (
            <article
              className={`business-card ${selectedBusiness?.id === business.id ? "is-selected" : ""}`}
              key={business.id}
            >
              <button className="business-card-button" type="button" onClick={() => setSelectedId(business.id)}>
                <span className="eyebrow">{business.categoryLabel} / {formatDistance(distance)}</span>
                <strong>{business.name}</strong>
                <span>{business.address}</span>
                <span>{business.benefit}</span>
              </button>
              {selectedBusiness?.id === business.id ? (
                <div className="business-detail">
                  <div className="business-image" style={{ backgroundImage: `url(${business.imageUrl})` }} />
                  <p>{business.description}</p>
                  <p><strong>Horario:</strong> {business.hours}</p>
                  <div className="hero-actions">
                    <a className="button button-secondary" href={`https://www.google.com/maps/dir/?api=1&destination=${business.latitude},${business.longitude}`} target="_blank" rel="noreferrer">
                      Como llegar
                    </a>
                    <a className="button button-secondary" href={`/beneficios?business=${business.id}`}>
                      Ver beneficio
                    </a>
                    <a className="button button-primary" href="/wallet">
                      Ver en Wallet
                    </a>
                  </div>
                  <div className="link-row">
                    <a href={business.instagram} target="_blank" rel="noreferrer">Instagram</a>
                    <a href={business.website} target="_blank" rel="noreferrer">Sitio web</a>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
