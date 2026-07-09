import { benefits as demoBenefits, businesses as demoBusinesses, type Benefit, type Business, type Category } from "@/lib/data";
import { createPublicSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

type BusinessRow = {
  id: string;
  name: string;
  contact_name?: string | null;
  email?: string | null;
  phone?: string | null;
  address: string;
  latitude?: number | null;
  longitude?: number | null;
  category: string;
  description?: string | null;
  website_url?: string | null;
  instagram_url?: string | null;
  logo_url?: string | null;
  opening_hours?: string | null;
  benefit_title?: string | null;
  benefit_description?: string | null;
  membership_plan?: string | null;
  membership_status?: string | null;
  publication_status?: string | null;
  featured?: boolean | null;
  wallet_eligible?: boolean | null;
};

type OfferRow = {
  id: string;
  business_id: string;
  title: string;
  description?: string | null;
  category?: string | null;
  end_date?: string | null;
  wallet_eligible?: boolean | null;
};

function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    cafe: "Cafe",
    restaurante: "Restaurante",
    oficina: "Oficinas",
    cowork: "Cowork",
    servicios: "Servicios",
    bienestar: "Bienestar",
    estacionamiento: "Estacionamiento",
    retail: "Retail",
    local: "Local disponible",
    beneficio: "Beneficio",
    actividad: "Actividad",
    descuento: "Descuento",
  };

  return labels[category] ?? category;
}

function normalizeCategory(category: string | null | undefined): Category {
  const value = (category ?? "servicios").toLowerCase().trim();
  const allowed: Category[] = [
    "cafe",
    "restaurante",
    "oficina",
    "cowork",
    "servicios",
    "bienestar",
    "estacionamiento",
    "retail",
    "local",
    "beneficio",
  ];

  return allowed.includes(value as Category) ? (value as Category) : "servicios";
}

function rowToBusiness(row: BusinessRow): Business {
  const category = normalizeCategory(row.category);

  return {
    id: row.id,
    name: row.name,
    category,
    categoryLabel: categoryLabel(category),
    address: row.address,
    latitude: Number(row.latitude ?? 0),
    longitude: Number(row.longitude ?? 0),
    description: row.description ?? "Negocio adherido al Distrito el Golf.",
    benefit: row.benefit_title ?? row.benefit_description ?? "Beneficio disponible para usuarios del pase.",
    validUntil: "Vigencia informada por el comercio",
    hours: row.opening_hours ?? "Horario por confirmar",
    instagram: row.instagram_url ?? "https://instagram.com",
    website: row.website_url ?? "https://example.com",
    featured: Boolean(row.featured),
    walletEligible: Boolean(row.wallet_eligible),
    imageUrl:
      row.logo_url ??
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  };
}

function offerToBenefit(offer: OfferRow, business: Business): Benefit {
  return {
    id: offer.id,
    businessId: business.id,
    business: business.name,
    category: normalizeCategory(offer.category ?? business.category),
    categoryLabel: categoryLabel(offer.category ?? business.category),
    offer: offer.title,
    validUntil: offer.end_date ? `Vigente hasta ${offer.end_date}` : "Vigencia por confirmar",
    address: business.address,
  };
}

export async function getPublicBusinesses() {
  if (!isSupabaseConfigured()) {
    return demoBusinesses;
  }

  const supabase = createPublicSupabaseClient();
  if (!supabase) return demoBusinesses;

  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("publication_status", "approved")
    .eq("membership_status", "active")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return demoBusinesses;
  }

  return data.map((row) => rowToBusiness(row as BusinessRow));
}

export async function getMapBusinesses() {
  const businesses = await getPublicBusinesses();
  const withCoordinates = businesses.filter((business) => business.latitude && business.longitude);
  return withCoordinates.length ? withCoordinates : demoBusinesses;
}

export async function getPublicBenefits() {
  if (!isSupabaseConfigured()) {
    return demoBenefits;
  }

  const supabase = createPublicSupabaseClient();
  if (!supabase) return demoBenefits;

  const businesses = await getPublicBusinesses();
  const businessIds = businesses.map((business) => business.id);
  if (!businessIds.length) return demoBenefits;

  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .eq("is_active", true)
    .in("business_id", businessIds)
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return demoBenefits;
  }

  return data
    .map((offer) => {
      const business = businesses.find((item) => item.id === (offer as OfferRow).business_id);
      return business ? offerToBenefit(offer as OfferRow, business) : null;
    })
    .filter((benefit): benefit is Benefit => Boolean(benefit));
}
