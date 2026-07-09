export type CategorySlug =
  | "descuento"
  | "actividad"
  | "cafe"
  | "restaurante"
  | "oficina"
  | "cowork"
  | "servicios"
  | "bienestar"
  | "estacionamiento"
  | "retail"
  | "local-disponible";

export type MembershipPlanSlug = "basico" | "destacado" | "premium";
export type BusinessStatus = "active" | "inactive";

export type Business = {
  id: string;
  name: string;
  category: CategorySlug;
  address: string;
  description: string;
  imageUrl: string;
  instagramUrl?: string;
  website?: string;
  phone: string;
  latitude: number;
  longitude: number;
  benefit: string;
  openingHours: string;
  membershipPlan: MembershipPlanSlug;
  walletEligible: boolean;
  status: BusinessStatus;
  distanceLabel?: string;
  featured: boolean;
};

export type Benefit = {
  id: string;
  businessName: string;
  title: string;
  description: string;
  category: CategorySlug;
  imageUrl: string;
  address: string;
  validUntil: string;
};

export type SocialPost = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  instagramUrl?: string;
  category: "barrio" | "beneficio" | "actividad" | "comercio" | "oficina" | "cultura";
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  imageUrl: string;
};

export type MembershipPlan = {
  id: string;
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
};
