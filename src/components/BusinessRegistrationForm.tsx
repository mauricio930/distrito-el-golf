"use client";

import { useState } from "react";
import { plans } from "@/lib/data";

export function BusinessRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <section className="card form">
        <h2>Datos del negocio</h2>
        <div className="field"><label htmlFor="business-name">Nombre comercial</label><input id="business-name" name="businessName" /></div>
        <div className="field"><label htmlFor="category">Categoria</label><input id="category" name="category" /></div>
        <div className="field"><label htmlFor="description">Descripcion</label><textarea id="description" name="description" rows={4} /></div>
        <div className="field"><label htmlFor="address">Direccion</label><input id="address" name="address" /></div>
      </section>

      <section className="card form">
        <h2>Contacto</h2>
        <div className="field"><label htmlFor="owner">Responsable</label><input id="owner" name="owner" /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" /></div>
        <div className="field"><label htmlFor="phone">Telefono</label><input id="phone" name="phone" /></div>
        <div className="field"><label htmlFor="instagram">Instagram</label><input id="instagram" name="instagram" /></div>
      </section>

      <section className="card form">
        <h2>Beneficio ofrecido</h2>
        <div className="field"><label htmlFor="benefit">Beneficio para el distrito</label><textarea id="benefit" name="benefit" rows={3} /></div>
      </section>

      <section className="card form">
        <h2>Plan de membresia</h2>
        <div className="field">
          <label htmlFor="plan">Plan</label>
          <select id="plan" name="plan">
            {plans.map((plan) => <option key={plan}>{plan}</option>)}
          </select>
        </div>
      </section>

      <button className="button button-primary" type="submit">Enviar solicitud</button>
      {submitted ? (
        <p className="success-message" role="status">
          Solicitud recibida. Este mensaje es una simulacion visual; todavia no hay backend conectado.
        </p>
      ) : null}
    </form>
  );
}
