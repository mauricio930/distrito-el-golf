import { activeBusinesses as businesses, mapCategories } from "@/data/businesses";
import type { Activity, Benefit, MembershipPlan, SocialPost } from "@/types/district";

export { businesses, mapCategories };

export const benefits: Benefit[] = businesses.slice(0, 4).map((business) => ({
  id: `ben-${business.id}`,
  businessName: business.name,
  title: business.benefit,
  description: `Beneficio demo disponible para usuarios del futuro Distrito el Golf Pass en ${business.name}.`,
  category: business.category,
  imageUrl: business.imageUrl,
  address: business.address,
  validUntil: business.membershipPlan === "premium" ? "Noviembre 2026" : "Septiembre 2026"
}));

export const activities: Activity[] = [
  {
    id: "act-01",
    title: "Networking Distrito el Golf",
    description: "Encuentro para locatarios, oficinas y aliados de la fundacion.",
    location: "Plaza Peru",
    date: "13 agosto 2026",
    time: "18:30",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "act-02",
    title: "Circuito de beneficios",
    description: "Activacion de comercios adheridos con descuentos y experiencias para visitantes.",
    location: "Isidora Goyenechea",
    date: "22 agosto 2026",
    time: "11:00",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "act-03",
    title: "Galerias abiertas",
    description: "Recorrido por vitrinas, servicios y espacios comerciales de Rosario Norte.",
    location: "Rosario Norte",
    date: "5 septiembre 2026",
    time: "12:00",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
  }
];

export const socialPosts: SocialPost[] = [
  {
    id: "post-01",
    title: "Convocatoria a comercios",
    description: "La fundacion abre una primera vitrina para locales, oficinas y servicios del barrio.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    publishedAt: "1 julio 2026",
    instagramUrl: "https://instagram.com",
    category: "barrio"
  },
  {
    id: "post-02",
    title: "Beneficios de invierno",
    description: "Cafeterias y restaurantes preparan promociones para la futura experiencia Wallet.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    publishedAt: "5 julio 2026",
    instagramUrl: "https://instagram.com",
    category: "beneficio"
  },
  {
    id: "post-03",
    title: "Ruta caminable",
    description: "Una guia visual para descubrir servicios, plazas y espacios comerciales del distrito.",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    publishedAt: "8 julio 2026",
    instagramUrl: "https://instagram.com",
    category: "actividad"
  },
  {
    id: "post-04",
    title: "Terrazas del barrio",
    description: "Espacios para cerrar la jornada con reuniones informales y vida urbana.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    publishedAt: "9 julio 2026",
    instagramUrl: "https://instagram.com",
    category: "comercio"
  },
  {
    id: "post-05",
    title: "Oficinas con ritmo",
    description: "Empresas y coworks que activan servicios para trabajadores y visitantes.",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    publishedAt: "10 julio 2026",
    instagramUrl: "https://instagram.com",
    category: "oficina"
  },
  {
    id: "post-06",
    title: "#distritoelgolf",
    description: "Contenido curado por el equipo, inspirado en redes sociales sin scraping automatico.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    publishedAt: "11 julio 2026",
    instagramUrl: "https://instagram.com",
    category: "cultura"
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: "plan-basico",
    name: "Basico",
    priceLabel: "Desde $39.000 / mes",
    description: "Presencia inicial para comercios que quieran aparecer en el ecosistema.",
    features: ["Ficha visual", "Categoria", "Preparado para mapa"]
  },
  {
    id: "plan-destacado",
    name: "Destacado",
    priceLabel: "Desde $69.000 / mes",
    description: "Mayor visibilidad en la landing y en futuras secciones destacadas.",
    features: ["Home destacado", "Beneficio demo", "Prioridad editorial"]
  },
  {
    id: "plan-premium",
    name: "Premium",
    priceLabel: "Desde $99.000 / mes",
    description: "Plan pensado para futuras promociones Wallet y campanas del distrito.",
    features: ["Elegible Wallet futuro", "Campanas", "Metrica futura"]
  }
];
