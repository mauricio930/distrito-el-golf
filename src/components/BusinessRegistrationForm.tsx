"use client";

import { useState } from "react";
import { plans } from "@/lib/data";

const requiredFields = [
  "businessName",
  "category",
  "description",
  "address",
  "owner",
  "email",
  "phone",
  "benefit",
  "validUntil",
  "plan",
];

export function BusinessRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const nextErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      const value = String(formData.get(field) ?? "").trim();
      if (!value) {
        nextErrors[field] = "Completa este campo.";
      }
    });

    const email = String(formData.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Ingresa un email valido.";
    }

    return nextErrors;
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const nextErrors = validate(formData);
        setErrors(nextErrors);
        // Futuro: enviar esta solicitud a Supabase, activar revision en panel administrador y pagos de membresia.
        setSubmitted(Object.keys(nextErrors).length === 0);
      }}
      noValidate
    >
      <section className="card form">
        <h2>Datos del negocio</h2>
        <div className="field"><label htmlFor="business-name">Nombre comercial</label><input id="business-name" name="businessName" />{errors.businessName ? <span className="form-error">{errors.businessName}</span> : null}</div>
        <div className="field"><label htmlFor="category">Categoria</label><input id="category" name="category" />{errors.category ? <span className="form-error">{errors.category}</span> : null}</div>
        <div className="field"><label htmlFor="description">Descripcion</label><textarea id="description" name="description" rows={4} />{errors.description ? <span className="form-error">{errors.description}</span> : null}</div>
        <div className="field"><label htmlFor="address">Direccion</label><input id="address" name="address" />{errors.address ? <span className="form-error">{errors.address}</span> : null}</div>
      </section>

      <section className="card form">
        <h2>Contacto</h2>
        <div className="field"><label htmlFor="owner">Responsable</label><input id="owner" name="owner" />{errors.owner ? <span className="form-error">{errors.owner}</span> : null}</div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" />{errors.email ? <span className="form-error">{errors.email}</span> : null}</div>
        <div className="field"><label htmlFor="phone">Telefono</label><input id="phone" name="phone" />{errors.phone ? <span className="form-error">{errors.phone}</span> : null}</div>
        <div className="field"><label htmlFor="instagram">Instagram</label><input id="instagram" name="instagram" /></div>
        <div className="field"><label htmlFor="website">Sitio web</label><input id="website" name="website" /></div>
      </section>

      <section className="card form">
        <h2>Beneficio ofrecido</h2>
        <div className="field"><label htmlFor="benefit">Beneficio para el distrito</label><textarea id="benefit" name="benefit" rows={3} />{errors.benefit ? <span className="form-error">{errors.benefit}</span> : null}</div>
        <div className="field"><label htmlFor="valid-until">Vigencia estimada</label><input id="valid-until" name="validUntil" />{errors.validUntil ? <span className="form-error">{errors.validUntil}</span> : null}</div>
      </section>

      <section className="card form">
        <h2>Plan de membresia</h2>
        <div className="field">
          <label htmlFor="plan">Plan</label>
          <select id="plan" name="plan" defaultValue="">
            <option value="" disabled>Selecciona un plan</option>
            {plans.map((plan) => <option key={plan}>{plan}</option>)}
          </select>
          {errors.plan ? <span className="form-error">{errors.plan}</span> : null}
        </div>
      </section>

      <button className="button button-primary" type="submit">Enviar solicitud</button>
      {submitted ? (
        <p className="success-message" role="status">
          Tu solicitud fue recibida. El equipo de Distrito el Golf revisara la informacion antes de publicar el negocio. Este mensaje es una simulacion visual; todavia no hay backend conectado.
        </p>
      ) : null}
    </form>
  );
}
