"use client";

import Link from "next/link";
import { useState } from "react";

export function WalletDemoActions() {
  const [message, setMessage] = useState("");

  function showDemoMessage() {
    // Futuro: conectar aqui Apple Wallet y Google Wallet reales cuando existan los pases oficiales.
    setMessage("La integracion oficial con Wallet se habilitara proximamente.");
  }

  return (
    <>
      <div className="hero-actions">
        <button className="button button-primary" type="button" onClick={showDemoMessage}>Agregar a Apple Wallet</button>
        <button className="button button-secondary" type="button" onClick={showDemoMessage}>Agregar a Google Wallet</button>
        <Link href="/mapa" className="button button-secondary">Ver mapa</Link>
        <Link href="/actividades" className="button button-secondary">Ver actividades</Link>
      </div>
      {message ? <p className="success-message" role="status">{message}</p> : null}
    </>
  );
}
