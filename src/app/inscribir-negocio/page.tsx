import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { plans } from "@/lib/data";

export default function RegisterBusinessPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container section">
        <p className="eyebrow">Locatarios</p>
        <h1>Inscribir mi negocio</h1>
        <p className="lead">
          Al inscribir tu negocio podras aparecer en el mapa oficial del Distrito
          el Golf y participar en futuras campanas, beneficios y experiencias
          digitales del distrito.
        </p>
        <form className="form">
          <section className="card form">
            <h2>Datos del negocio</h2>
            <div className="field"><label>Nombre comercial</label><input /></div>
            <div className="field"><label>Categoria</label><input /></div>
            <div className="field"><label>Descripcion</label><textarea rows={4} /></div>
            <div className="field"><label>Direccion</label><input /></div>
          </section>
          <section className="card form">
            <h2>Datos de contacto</h2>
            <div className="field"><label>Responsable</label><input /></div>
            <div className="field"><label>Email</label><input type="email" /></div>
            <div className="field"><label>Telefono</label><input /></div>
            <div className="field"><label>Instagram</label><input /></div>
            <div className="field"><label>Sitio web</label><input /></div>
          </section>
          <section className="card form">
            <h2>Beneficio para el distrito</h2>
            <div className="field"><label>Beneficio ofrecido</label><textarea rows={3} /></div>
            <div className="field"><label>Vigencia estimada</label><input /></div>
          </section>
          <section className="card form">
            <h2>Plan de membresia</h2>
            <div className="field">
              <label>Plan</label>
              <select>
                {plans.map((plan) => <option key={plan}>{plan}</option>)}
              </select>
            </div>
          </section>
          <button className="button button-primary" type="button">Enviar solicitud</button>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
