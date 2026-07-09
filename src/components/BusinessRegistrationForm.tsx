"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const inputClass =
  "min-h-11 rounded border border-urban-100 bg-white px-3 py-2 text-sm text-petrol-900 outline-none transition placeholder:text-urban-300 focus:border-gold-300 focus:ring-2 focus:ring-gold-100";

export function BusinessRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-lg border border-urban-100 bg-white p-4 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        // Future Supabase/admin integration: send this form to a businesses table for review.
        // Future membership payments: connect the selected plan to a payment provider after approval.
        setSubmitted(true);
        event.currentTarget.reset();
      }}
    >
      {submitted ? (
        <div className="rounded-lg border border-gold-300 bg-gold-100 p-4 text-petrol-900">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
            <p className="text-sm font-semibold">Solicitud enviada. En esta primera version solo mostramos este mensaje de exito.</p>
          </div>
        </div>
      ) : null}

      <fieldset className="grid gap-3 rounded-lg border border-urban-100 p-4">
        <legend className="px-1 text-sm font-bold text-petrol-900">A. Datos del negocio</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm font-medium text-urban-700">
            Nombre comercial
            <input className={inputClass} name="businessName" required placeholder="Ej. Cafe Origen" />
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700">
            Categoria
            <select className={inputClass} name="category" required defaultValue="">
              <option value="" disabled>
                Selecciona categoria
              </option>
              <option value="restaurante">Restaurantes</option>
              <option value="cafe">Cafe</option>
              <option value="servicios">Servicios</option>
              <option value="bienestar">Bienestar</option>
              <option value="oficina">Oficinas</option>
              <option value="cowork">Cowork</option>
              <option value="retail">Retail</option>
              <option value="local-disponible">Local disponible</option>
              <option value="estacionamiento">Estacionamiento</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700 sm:col-span-2">
            Descripcion
            <textarea className={`${inputClass} min-h-24 resize-y`} name="description" required />
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700 sm:col-span-2">
            Direccion
            <input className={inputClass} name="address" required placeholder="Calle, numero, Las Condes" />
          </label>
        </div>
      </fieldset>

      <fieldset className="grid gap-3 rounded-lg border border-urban-100 p-4">
        <legend className="px-1 text-sm font-bold text-petrol-900">B. Datos de contacto</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm font-medium text-urban-700">
            Responsable
            <input className={inputClass} name="ownerName" required placeholder="Nombre y apellido" />
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700">
            Email
            <input className={inputClass} name="email" type="email" required placeholder="contacto@negocio.cl" />
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700">
            Telefono
            <input className={inputClass} name="phone" required placeholder="+56 9..." />
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700">
            Instagram
            <input className={inputClass} name="instagram" placeholder="@negocio" />
          </label>
          <label className="grid gap-1 text-sm font-medium text-urban-700 sm:col-span-2">
            Sitio web
            <input className={inputClass} name="website" placeholder="https://..." />
          </label>
        </div>
      </fieldset>

      <fieldset className="grid gap-3 rounded-lg border border-urban-100 p-4">
        <legend className="px-1 text-sm font-bold text-petrol-900">C. Beneficio para el distrito</legend>
        <label className="grid gap-1 text-sm font-medium text-urban-700">
          Beneficio ofrecido
          <textarea className={`${inputClass} min-h-24 resize-y`} name="benefit" required />
        </label>
        <label className="grid gap-1 text-sm font-medium text-urban-700">
          Vigencia estimada
          <input className={inputClass} name="validUntil" placeholder="Ej. 3 meses, temporada invierno, permanente" />
        </label>
      </fieldset>

      <fieldset className="grid gap-3 rounded-lg border border-urban-100 p-4">
        <legend className="px-1 text-sm font-bold text-petrol-900">D. Plan de membresia</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Basico", "Destacado", "Premium"].map((plan) => (
            <label key={plan} className="cursor-pointer rounded-lg border border-urban-100 p-3 text-sm font-semibold text-petrol-900 has-[:checked]:border-gold-300 has-[:checked]:bg-gold-100">
              <input className="sr-only" type="radio" name="plan" value={plan.toLowerCase()} required />
              {plan}
            </label>
          ))}
        </div>
      </fieldset>
      <button className="min-h-12 rounded bg-petrol-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-petrol-700">
        Enviar solicitud
      </button>
    </form>
  );
}
