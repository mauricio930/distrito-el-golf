import { ActivityCard } from "@/components/ActivityCard";
import { BenefitCard } from "@/components/BenefitCard";
import { BusinessCard } from "@/components/BusinessCard";
import { HeroSection } from "@/components/HeroSection";
import { MapPreview } from "@/components/MapPreview";
import { MembershipPlanCard } from "@/components/MembershipPlanCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialPostCard } from "@/components/SocialPostCard";
import { WalletCTA } from "@/components/WalletCTA";
import { activities, benefits, businesses, membershipPlans, socialPosts } from "@/lib/data";
import { BriefcaseBusiness, Camera, Map } from "lucide-react";

export default function HomePage() {
  const featuredBusinesses = businesses.filter((business) => business.featured);

  return (
    <main>
      <HeroSection />
      <WalletCTA />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Que es Distrito el Golf"
          title="Una guia moderna para vivir mejor el barrio"
          description="La Fundacion Distrito el Golf prepara una plataforma para usuarios, visitantes, oficinas y locatarios: beneficios claros, actividades cercanas, comercios adheridos y una experiencia movil centrada en Wallet."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {["Wallet en preparacion", "Mapa georreferenciado futuro", "Registro de negocios", "Membresias futuras"].map((item) => (
            <div key={item} className="rounded-lg border border-urban-100 bg-white p-4 text-sm font-semibold text-petrol-900 shadow-sm">
              <span className="mb-3 block h-1 w-10 rounded bg-green-500" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Beneficios activos"
              title="Primeras ventajas del distrito"
              description="Beneficios demo para mostrar como se vera la experiencia antes de conectar Wallet real, pagos de membresia o Supabase."
            />
            <PrimaryButton href="/beneficios" variant="secondary">
              Ver beneficios
            </PrimaryButton>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Future membership payments: connect these plans to real checkout and subscription status. */}
        <SectionHeader
          eyebrow="Lo que esta pasando en el Distrito"
          title="Feed social curado"
          description="Una vitrina visual inspirada en contenido social tipo Instagram, sin scraping automatico y con publicaciones propias."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialPosts.map((post) => (
            <SocialPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Proximas actividades" title="Agenda inicial del barrio" />
            <PrimaryButton href="/actividades" variant="secondary">
              Ver actividades
            </PrimaryButton>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Comercios destacados"
          title="Primeros puntos de la guia"
          description="Negocios ficticios para validar una experiencia clara para comercios, oficinas, locatarios y aliados."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </section>

      <section className="bg-urban-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Mini preview del mapa"
              title="Mapa del Distrito"
              description="Descubre comercios, beneficios y actividades georreferenciadas del barrio El Golf."
            />
            <p className="mt-4 text-sm font-semibold text-petrol-900">
              {businesses.length} negocios demo activos en el mapa.
            </p>
            <div className="mt-6">
              <PrimaryButton href="/mapa" icon={Map} variant="secondary">
                Explorar mapa
              </PrimaryButton>
            </div>
          </div>
          <MapPreview />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Membresias"
          title="Planes preparados para la siguiente etapa"
          description="Estos planes son visuales. Los pagos reales se conectaran despues."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {membershipPlans.map((plan) => (
            <MembershipPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-petrol-900">Redes oficiales</p>
            <p className="mt-1 text-sm text-urban-700">Instagram y LinkedIn seran los canales visibles de la fundacion.</p>
          </div>
          <div className="flex gap-2">
            <a className="btn-outline-contrast inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2" href="https://instagram.com">
              <Camera size={17} aria-hidden="true" />
              Instagram
            </a>
            <a className="btn-outline-contrast inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2" href="https://linkedin.com">
              <BriefcaseBusiness size={17} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
