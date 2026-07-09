"use client";

import { useMemo, useState } from "react";

type AdminBusiness = {
  id: string;
  name: string;
  legal_name?: string | null;
  rut?: string | null;
  contact_name: string;
  email: string;
  phone?: string | null;
  address: string;
  latitude?: number | null;
  longitude?: number | null;
  category: string;
  description?: string | null;
  website_url?: string | null;
  instagram_url?: string | null;
  opening_hours?: string | null;
  benefit_title?: string | null;
  benefit_description?: string | null;
  membership_plan?: string | null;
  membership_status: "pending_payment" | "active" | "expired" | "cancelled";
  publication_status: "pending_review" | "approved" | "rejected" | "hidden";
  featured: boolean;
  wallet_eligible: boolean;
  created_at: string;
};

type Offer = {
  id: string;
  business_id: string;
  title: string;
  description?: string | null;
  category?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  is_active: boolean;
  wallet_eligible: boolean;
};

function statusLabel(value: string) {
  const labels: Record<string, string> = {
    pending_review: "Pendiente",
    approved: "Aprobado",
    rejected: "Rechazado",
    hidden: "Oculto",
    pending_payment: "Pago pendiente",
    active: "Activa",
    expired: "Expirada",
    cancelled: "Cancelada",
  };

  return labels[value] ?? value;
}

export function AdminPanel() {
  const [accessKey, setAccessKey] = useState("");
  const [businesses, setBusinesses] = useState<AdminBusiness[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openBusinessId, setOpenBusinessId] = useState("");
  const [drafts, setDrafts] = useState<Record<string, Partial<AdminBusiness>>>({});
  const [offerDraft, setOfferDraft] = useState({
    business_id: "",
    title: "",
    description: "",
    category: "beneficio",
    end_date: "",
    is_active: true,
    wallet_eligible: false,
  });

  const metrics = useMemo(() => {
    return {
      total: businesses.length,
      pending: businesses.filter((business) => business.publication_status === "pending_review").length,
      approved: businesses.filter((business) => business.publication_status === "approved").length,
      active: businesses.filter((business) => business.membership_status === "active").length,
      featured: businesses.filter((business) => business.featured).length,
      wallet: businesses.filter((business) => business.wallet_eligible).length,
    };
  }, [businesses]);

  async function api(path: string, init: RequestInit = {}) {
    const response = await fetch(path, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": accessKey,
        ...(init.headers ?? {}),
      },
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error ?? "No se pudo completar la accion.");
    }

    return data;
  }

  async function loadAdminData() {
    setIsLoading(true);
    setMessage("");

    try {
      const [businessResponse, offerResponse] = await Promise.all([
        api("/api/admin/businesses"),
        api("/api/admin/offers"),
      ]);
      setBusinesses(businessResponse.businesses ?? []);
      setOffers(offerResponse.offers ?? []);
      setIsAuthenticated(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No se pudo ingresar al panel.");
    } finally {
      setIsLoading(false);
    }
  }

  async function updateBusiness(id: string, updates: Partial<AdminBusiness>) {
    const data = await api(`/api/admin/businesses/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
    });

    setBusinesses((current) =>
      current.map((business) => (business.id === id ? data.business : business))
    );
    setMessage("Negocio actualizado.");
  }

  async function saveDraft(business: AdminBusiness) {
    const draft = drafts[business.id] ?? {};
    await updateBusiness(business.id, {
      ...draft,
      latitude: draft.latitude === undefined ? business.latitude : Number(draft.latitude),
      longitude: draft.longitude === undefined ? business.longitude : Number(draft.longitude),
    });
  }

  async function createOffer() {
    const data = await api("/api/admin/offers", {
      method: "POST",
      body: JSON.stringify(offerDraft),
    });

    setOffers((current) => [data.offer, ...current]);
    setOfferDraft({
      business_id: "",
      title: "",
      description: "",
      category: "beneficio",
      end_date: "",
      is_active: true,
      wallet_eligible: false,
    });
    setMessage("Beneficio creado.");
  }

  async function toggleOffer(offer: Offer) {
    const data = await api(`/api/admin/offers/${offer.id}`, {
      method: "PATCH",
      body: JSON.stringify({ is_active: !offer.is_active }),
    });

    setOffers((current) => current.map((item) => (item.id === offer.id ? data.offer : item)));
  }

  if (!isAuthenticated) {
    return (
      <section className="card form admin-access">
        <h2>Acceso administrador</h2>
        <p className="meta">
          Ingresa la clave definida en ADMIN_ACCESS_KEY para revisar negocios y beneficios.
        </p>
        <div className="field">
          <label htmlFor="admin-key">Clave de acceso</label>
          <input
            id="admin-key"
            name="adminKey"
            onChange={(event) => setAccessKey(event.target.value)}
            type="password"
            value={accessKey}
          />
        </div>
        <button className="button button-primary" disabled={isLoading} onClick={loadAdminData} type="button">
          {isLoading ? "Validando..." : "Entrar al panel"}
        </button>
        {message ? <p className="form-error" role="alert">{message}</p> : null}
      </section>
    );
  }

  return (
    <div className="admin-panel">
      <section className="grid grid-3">
        {[
          ["Total", metrics.total],
          ["Pendientes", metrics.pending],
          ["Aprobados", metrics.approved],
          ["Activos", metrics.active],
          ["Destacados", metrics.featured],
          ["Elegibles Wallet", metrics.wallet],
        ].map(([label, value]) => (
          <article className="card metric-card" key={label}>
            <p className="eyebrow">{label}</p>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      {message ? <p className="success-message" role="status">{message}</p> : null}

      <section className="section">
        <p className="eyebrow">Administracion</p>
        <h2>Negocios pendientes, aprobados, rechazados y ocultos</h2>
        <div className="grid">
          {businesses.map((business) => (
            <article className="card admin-business" key={business.id}>
              <div className="admin-business-header">
                <div>
                  <p className="eyebrow">{business.category} / {statusLabel(business.publication_status)}</p>
                  <h3>{business.name}</h3>
                  <p className="meta">{business.contact_name} / {business.email} / {business.phone ?? "Sin telefono"}</p>
                  <p className="meta">{business.address}</p>
                  {!business.latitude || !business.longitude ? (
                    <p className="form-error">Ubicacion pendiente de georreferenciacion</p>
                  ) : null}
                </div>
                <button
                  className="button button-secondary"
                  onClick={() => setOpenBusinessId(openBusinessId === business.id ? "" : business.id)}
                  type="button"
                >
                  {openBusinessId === business.id ? "Cerrar" : "Ver"}
                </button>
              </div>

              <div className="admin-actions">
                <button className="button button-secondary" onClick={() => updateBusiness(business.id, { publication_status: "approved" })} type="button">Aprobar</button>
                <button className="button button-secondary" onClick={() => updateBusiness(business.id, { publication_status: "rejected" })} type="button">Rechazar</button>
                <button className="button button-secondary" onClick={() => updateBusiness(business.id, { publication_status: "hidden" })} type="button">Ocultar</button>
                <button className="button button-secondary" onClick={() => updateBusiness(business.id, { membership_status: "active" })} type="button">Activar membresia</button>
                <button className="button button-secondary" onClick={() => updateBusiness(business.id, { featured: !business.featured })} type="button">{business.featured ? "Quitar destacado" : "Marcar destacado"}</button>
                <button className="button button-secondary" onClick={() => updateBusiness(business.id, { wallet_eligible: !business.wallet_eligible })} type="button">{business.wallet_eligible ? "Quitar Wallet" : "Elegible Wallet"}</button>
              </div>

              {openBusinessId === business.id ? (
                <div className="admin-detail">
                  <p className="meta">Plan: {business.membership_plan ?? "Sin plan"} / Membresia: {statusLabel(business.membership_status)}</p>
                  <p className="meta">Registro: {new Date(business.created_at).toLocaleDateString("es-CL")}</p>
                  <div className="grid grid-2">
                    <div className="field">
                      <label>Latitud</label>
                      <input
                        defaultValue={business.latitude ?? ""}
                        onChange={(event) =>
                          setDrafts((current) => ({
                            ...current,
                            [business.id]: { ...(current[business.id] ?? {}), latitude: Number(event.target.value) },
                          }))
                        }
                      />
                    </div>
                    <div className="field">
                      <label>Longitud</label>
                      <input
                        defaultValue={business.longitude ?? ""}
                        onChange={(event) =>
                          setDrafts((current) => ({
                            ...current,
                            [business.id]: { ...(current[business.id] ?? {}), longitude: Number(event.target.value) },
                          }))
                        }
                      />
                    </div>
                    <div className="field">
                      <label>Beneficio</label>
                      <input
                        defaultValue={business.benefit_title ?? ""}
                        onChange={(event) =>
                          setDrafts((current) => ({
                            ...current,
                            [business.id]: { ...(current[business.id] ?? {}), benefit_title: event.target.value },
                          }))
                        }
                      />
                    </div>
                    <div className="field">
                      <label>Horario</label>
                      <input
                        defaultValue={business.opening_hours ?? ""}
                        onChange={(event) =>
                          setDrafts((current) => ({
                            ...current,
                            [business.id]: { ...(current[business.id] ?? {}), opening_hours: event.target.value },
                          }))
                        }
                      />
                    </div>
                  </div>
                  <button className="button button-primary" onClick={() => saveDraft(business)} type="button">
                    Editar
                  </button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Beneficios</p>
        <h2>Crear y activar beneficios</h2>
        <div className="card form">
          <div className="field">
            <label>Negocio</label>
            <select
              onChange={(event) => setOfferDraft((current) => ({ ...current, business_id: event.target.value }))}
              value={offerDraft.business_id}
            >
              <option value="">Selecciona un negocio</option>
              {businesses.map((business) => (
                <option key={business.id} value={business.id}>{business.name}</option>
              ))}
            </select>
          </div>
          <div className="field"><label>Titulo</label><input onChange={(event) => setOfferDraft((current) => ({ ...current, title: event.target.value }))} value={offerDraft.title} /></div>
          <div className="field"><label>Descripcion</label><textarea onChange={(event) => setOfferDraft((current) => ({ ...current, description: event.target.value }))} value={offerDraft.description} /></div>
          <div className="field"><label>Vigencia final</label><input onChange={(event) => setOfferDraft((current) => ({ ...current, end_date: event.target.value }))} type="date" value={offerDraft.end_date} /></div>
          <button className="button button-primary" disabled={!offerDraft.business_id || !offerDraft.title} onClick={createOffer} type="button">Crear beneficio</button>
        </div>

        <div className="grid grid-2">
          {offers.map((offer) => (
            <article className="card" key={offer.id}>
              <p className="eyebrow">{offer.is_active ? "Activo" : "Inactivo"}</p>
              <h3>{offer.title}</h3>
              <p className="meta">{offer.description}</p>
              <button className="button button-secondary" onClick={() => toggleOffer(offer)} type="button">
                {offer.is_active ? "Desactivar" : "Activar"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
