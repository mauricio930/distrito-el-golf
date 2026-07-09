export type Category =
  | "cafe"
  | "restaurante"
  | "oficina"
  | "cowork"
  | "servicios"
  | "bienestar"
  | "estacionamiento"
  | "retail"
  | "local"
  | "beneficio";

export type Business = {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  address: string;
  latitude: number;
  longitude: number;
  description: string;
  benefit: string;
  validUntil: string;
  hours: string;
  instagram: string;
  website: string;
  featured: boolean;
  walletEligible: boolean;
  imageUrl: string;
};

export type Activity = {
  id: string;
  date: string;
  time: string;
  title: string;
  place: string;
  address: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
};

export const districtCenter = {
  latitude: -33.4169,
  longitude: -70.5972,
};

export const categoryFilters: Array<{ id: Category | "todos"; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "cafe", label: "Cafes" },
  { id: "restaurante", label: "Restaurantes" },
  { id: "oficina", label: "Oficinas" },
  { id: "cowork", label: "Cowork" },
  { id: "servicios", label: "Servicios" },
  { id: "bienestar", label: "Bienestar" },
  { id: "estacionamiento", label: "Estacionamientos" },
  { id: "retail", label: "Retail" },
  { id: "local", label: "Locales disponibles" },
  { id: "beneficio", label: "Beneficios" },
];

export const businesses: Business[] = [
  {
    id: "cafe-magdalena",
    name: "Cafe Magdalena",
    category: "cafe",
    categoryLabel: "Cafe",
    address: "Magdalena 140, Las Condes",
    latitude: -33.4176,
    longitude: -70.5985,
    description: "Cafe de especialidad con barra rapida para reuniones de trabajo y pausa urbana.",
    benefit: "15% de descuento en cafe de especialidad.",
    validUntil: "Hasta el 30 de septiembre",
    hours: "Lun a vie, 07:30 a 19:30",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: true,
    walletEligible: true,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bistro-apoquindo",
    name: "Bistro Apoquindo",
    category: "restaurante",
    categoryLabel: "Restaurante",
    address: "Apoquindo 3001, Las Condes",
    latitude: -33.4179,
    longitude: -70.5966,
    description: "Cocina urbana con menu ejecutivo, terraza y ambiente de after office.",
    benefit: "Menu ejecutivo con bebida incluida.",
    validUntil: "Lunes a viernes",
    hours: "Lun a sab, 12:00 a 23:00",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: true,
    walletEligible: true,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "hub-el-golf",
    name: "Hub El Golf",
    category: "oficina",
    categoryLabel: "Oficinas",
    address: "El Bosque Norte 0440, Las Condes",
    latitude: -33.4156,
    longitude: -70.5995,
    description: "Oficinas flexibles y salas de reunion para equipos del barrio financiero.",
    benefit: "Dia de cowork con 20% de descuento.",
    validUntil: "Hasta agotar cupos",
    hours: "Lun a vie, 08:30 a 19:00",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: true,
    walletEligible: false,
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "workclub-magdalena",
    name: "WorkClub Magdalena",
    category: "cowork",
    categoryLabel: "Cowork",
    address: "Magdalena 181, Las Condes",
    latitude: -33.4181,
    longitude: -70.5981,
    description: "Cowork boutique para profesionales independientes, equipos hibridos y workshops.",
    benefit: "Primera hora de sala con tarifa preferente.",
    validUntil: "Durante agosto",
    hours: "Lun a vie, 08:00 a 20:00",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: false,
    walletEligible: true,
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "wellness-golf",
    name: "Wellness Golf",
    category: "bienestar",
    categoryLabel: "Bienestar",
    address: "Rosario Norte 120, Las Condes",
    latitude: -33.4147,
    longitude: -70.595,
    description: "Entrenamiento funcional, kinesiologia preventiva y pausa activa para oficinas.",
    benefit: "Primera clase funcional sin costo.",
    validUntil: "Cupos limitados",
    hours: "Lun a vie, 07:00 a 21:00",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: true,
    walletEligible: true,
    imageUrl: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "parking-el-golf",
    name: "Parking El Golf",
    category: "estacionamiento",
    categoryLabel: "Estacionamiento",
    address: "San Sebastian 2800, Las Condes",
    latitude: -33.4172,
    longitude: -70.6002,
    description: "Estacionamiento de alta rotacion para visitantes, oficinas y locatarios.",
    benefit: "Primera hora con tarifa preferente.",
    validUntil: "Durante julio",
    hours: "Lun a dom, 07:00 a 23:00",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: false,
    walletEligible: false,
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "distrito-clean",
    name: "Distrito Clean",
    category: "servicios",
    categoryLabel: "Servicios",
    address: "Roger de Flor 2900, Las Condes",
    latitude: -33.4164,
    longitude: -70.6008,
    description: "Servicios express para oficinas, locales y equipos del distrito.",
    benefit: "10% en servicios express para oficinas.",
    validUntil: "Durante agosto",
    hours: "Lun a vie, 09:00 a 18:30",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: false,
    walletEligible: false,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "galeria-verde",
    name: "Galeria Verde Golf",
    category: "retail",
    categoryLabel: "Retail",
    address: "Rosario Norte 555, Las Condes",
    latitude: -33.4141,
    longitude: -70.5948,
    description: "Objetos de diseno, regalos corporativos y productos locales seleccionados.",
    benefit: "Empaque premium sin costo.",
    validUntil: "Hasta el 15 de septiembre",
    hours: "Lun a sab, 10:00 a 20:00",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: false,
    walletEligible: true,
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "local-riesco",
    name: "Local Presidente Riesco",
    category: "local",
    categoryLabel: "Local disponible",
    address: "Presidente Riesco 3050, Las Condes",
    latitude: -33.4138,
    longitude: -70.5976,
    description: "Local comercial disponible para servicios, retail o gastronomia liviana.",
    benefit: "Visita comercial prioritaria para aliados del distrito.",
    validUntil: "Visitas coordinadas",
    hours: "Agenda previa",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: true,
    walletEligible: false,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "beneficio-leguia",
    name: "Beneficio Augusto Leguia",
    category: "beneficio",
    categoryLabel: "Beneficio",
    address: "Augusto Leguia Norte 100, Las Condes",
    latitude: -33.4163,
    longitude: -70.596,
    description: "Promocion rotativa asociada a comercios del eje Augusto Leguia Norte.",
    benefit: "Beneficio rotativo para usuarios del pase.",
    validUntil: "Beneficio mensual",
    hours: "Segun comercio adherido",
    instagram: "https://instagram.com",
    website: "https://example.com",
    featured: false,
    walletEligible: true,
    imageUrl: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=900&q=80",
  },
];

export const benefits = businesses.map((business) => ({
  id: `benefit-${business.id}`,
  businessId: business.id,
  business: business.name,
  category: business.category,
  categoryLabel: business.categoryLabel,
  offer: business.benefit,
  validUntil: business.validUntil,
  address: business.address,
}));

export const activities: Activity[] = [
  {
    id: "after-office",
    date: "12 AGO",
    time: "18:30",
    title: "After office del distrito",
    place: "Plaza Peru",
    address: "Plaza Peru, Las Condes",
    description: "Encuentro demo para comercios, oficinas y vecinos del barrio.",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    latitude: -33.4158,
    longitude: -70.5973,
  },
  {
    id: "ruta-cafe",
    date: "21 AGO",
    time: "09:00",
    title: "Ruta cafe de especialidad",
    place: "Isidora Goyenechea",
    address: "Isidora Goyenechea 3000, Las Condes",
    description: "Recorrido curado por cafeterias adheridas al futuro pase.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    latitude: -33.4149,
    longitude: -70.5983,
  },
  {
    id: "beneficios-almuerzo",
    date: "04 SEP",
    time: "13:00",
    title: "Beneficios de almuerzo",
    place: "Apoquindo con El Bosque",
    address: "Apoquindo 3001, Las Condes",
    description: "Activacion piloto para usuarios del sector oficinas.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    latitude: -33.4179,
    longitude: -70.5966,
  },
];

export const socialPosts = [
  {
    title: "Nueva ruta de cafes",
    tag: "Barrio activo",
    text: "Una seleccion curada para empezar el dia entre Isidora y Apoquindo.",
  },
  {
    title: "Beneficios para oficinas",
    tag: "Comunidad",
    text: "Comercios y servicios se preparan para activar convenios digitales.",
  },
  {
    title: "Mapa del Distrito",
    tag: "Proximamente",
    text: "El mapa real ya queda preparado con OpenStreetMap, filtros y puntos del barrio.",
  },
  {
    title: "Terrazas y after office",
    tag: "Experiencias",
    text: "Espacios del barrio preparados para activar encuentros, beneficios y comunidad.",
  },
  {
    title: "Oficinas conectadas",
    tag: "Aliados",
    text: "Empresas, coworks y servicios podran integrarse a futuras campanas del distrito.",
  },
  {
    title: "Comercios adheridos",
    tag: "Locatarios",
    text: "Una vitrina institucional para mostrar beneficios y novedades sin scraping de redes.",
  },
];

export const plans = ["Basico", "Destacado", "Premium"];

export const membershipPlans = [
  {
    name: "Basico",
    price: "Presencia inicial",
    description: "Ficha visual, categoria y preparacion para aparecer en el mapa del distrito.",
  },
  {
    name: "Destacado",
    price: "Mayor visibilidad",
    description: "Beneficio demo, prioridad editorial y presencia en secciones destacadas.",
  },
  {
    name: "Premium",
    price: "Campanas futuras",
    description: "Pensado para futuras activaciones Wallet, promociones y experiencias digitales.",
  },
];
