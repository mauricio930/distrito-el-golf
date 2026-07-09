import { NextRequest, NextResponse } from "next/server";
import { createPublicSupabaseClient } from "@/lib/supabase";

const requiredFields = ["name", "contact_name", "email", "address", "category", "membership_plan"];

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  const supabase = createPublicSupabaseClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase no esta configurado. Revisa las variables de entorno." },
      { status: 503 }
    );
  }

  const payload = await request.json();
  const errors: Record<string, string> = {};

  requiredFields.forEach((field) => {
    if (!text(payload[field])) {
      errors[field] = "Campo obligatorio.";
    }
  });

  const email = text(payload.email);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email invalido.";
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const insertPayload = {
    name: text(payload.name),
    legal_name: text(payload.legal_name) || null,
    rut: text(payload.rut) || null,
    contact_name: text(payload.contact_name),
    email,
    phone: text(payload.phone) || null,
    address: text(payload.address),
    category: text(payload.category),
    description: text(payload.description) || null,
    website_url: text(payload.website_url) || null,
    instagram_url: text(payload.instagram_url) || null,
    opening_hours: text(payload.opening_hours) || null,
    benefit_title: text(payload.benefit_title) || null,
    benefit_description: text(payload.benefit_description) || null,
    membership_plan: text(payload.membership_plan),
    membership_status: "pending_payment",
    publication_status: "pending_review",
    featured: false,
    wallet_eligible: false,
  };

  const { error } = await supabase.from("businesses").insert(insertPayload);

  if (error) {
    return NextResponse.json({ error: "No se pudo guardar la solicitud." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
