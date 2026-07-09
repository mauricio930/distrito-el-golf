"use client";

import { useState } from "react";
import { plans } from "@/lib/data";

const requiredFields = [
  "businessName",
  "category",
  "address",
  "owner",
  "email",
  "plan",
];

export function BusinessRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

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
        setSubmitError("");
        setSubmitted(false);

        if (Object.keys(nextErrors).length) {
          return;
        }

        setIsSubmitting(true);

        fetch("/api/businesses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("businessName"),
            legal_name: formData.get("legalName"),
            rut: formData.get("rut"),
            contact_name: formData.get("owner"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            category: formData.get("category"),
            description: formData.get("description"),
            instagram_url: formData.get("instagram"),
            website_url: formData.get("website"),
            opening_hours: formData.get("openingHours"),
            benefit_title: formData.get("benefitTitle"),
            benefit_description: formData.get("benefit"),
            membership_plan: formData.get("plan"),
          }),
        })
          .then(async (response) => {
            if (!response.ok) {
              const data = await response.json().catch(() => ({}));
              throw new Error(data.error ?? "No se pudo enviar la solicitud.");
            }

            event.currentTarget.reset();
            setSubmitted(true);
          })
          .catch((error: Error) => {
            setSubmitError(error.message);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
      }}
      noValidate
    >
      <section className="card form">
        <h2>Datos del negocio</h2>
        <div className="field"><label htmlFor="business-name">Nombre comercial</label><input id="business-name" name="businessName" />{errors.businessName ? <span className="form-error">{errors.businessName}</span> : null}</div>
        <div className="field"><label htmlFor="legal-name">Razon social</label><input id="legal-name" name="legalName" /></div>
        <div className="field"><label htmlFor="rut">RUT</label><input id="rut" name="rut" /></div>
        <div className="field">
          <label htmlFor="category">Categoria</label>
          <select id="category" name="category" defaultValue="">
            <option value="" disabled>Selecciona una categoria</option>
            <option value="cafe">Cafe</option>
            <option value="restaurante">Restaurante</option>
            <option value="oficina">Oficina</option>
            <option value="cowork">Cowork</option>
            <option value="servicios">Servicios</option>
            <option value="bienestar">Bienestar</option>
            <option value="estacionamiento">Estacionamiento</option>
            <option value="retail">Retail</option>
            <option value="local">Local disponible</option>
          </select>
          {errors.category ? <span className="form-error">{errors.category}</span> : null}
        </div>
        <div className="field"><label htmlFor="description">Descripcion</label><textarea id="description" name="description" rows={4} />{errors.description ? <span className="form-error">{errors.description}</span> : null}</div>
        <div className="field"><label htmlFor="address">Direccion</label><input id="address" name="address" />{errors.address ? <span className="form-error">{errors.address}</span> : null}</div>
        <div className="field"><label htmlFor="opening-hours">Horario</label><input id="opening-hours" name="openingHours" /></div>
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
        <div className="field"><label htmlFor="benefit-title">Titulo del beneficio</label><input id="benefit-title" name="benefitTitle" /></div>
        <div className="field"><label htmlFor="benefit">Beneficio para el distrito</label><textarea id="benefit" name="benefit" rows={3} />{errors.benefit ? <span className="form-error">{errors.benefit}</span> : null}</div>
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

      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </button>
      {submitted ? (
        <p className="success-message" role="status">
          Tu solicitud fue recibida correctamente. El equipo de Distrito el Golf revisara la informacion antes de publicar el negocio.
        </p>
      ) : null}
      {submitError ? <p className="form-error" role="alert">{submitError}</p> : null}
    </form>
  );
}
