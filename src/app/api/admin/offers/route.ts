import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient, isValidAdminKey } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  if (!isValidAdminKey(request.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Acceso no autorizado." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase admin no esta configurado." }, { status: 503 });
  }

  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "No se pudieron cargar los beneficios." }, { status: 500 });
  }

  return NextResponse.json({ offers: data ?? [] });
}

export async function POST(request: NextRequest) {
  if (!isValidAdminKey(request.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Acceso no autorizado." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase admin no esta configurado." }, { status: 503 });
  }

  const payload = await request.json();
  const { data, error } = await supabase
    .from("offers")
    .insert({
      business_id: payload.business_id,
      title: payload.title,
      description: payload.description ?? null,
      category: payload.category ?? null,
      start_date: payload.start_date || null,
      end_date: payload.end_date || null,
      is_active: Boolean(payload.is_active),
      wallet_eligible: Boolean(payload.wallet_eligible),
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: "No se pudo crear el beneficio." }, { status: 500 });
  }

  return NextResponse.json({ offer: data });
}
