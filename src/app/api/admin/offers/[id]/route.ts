import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient, isValidAdminKey } from "@/lib/supabase";

const allowedFields = new Set([
  "business_id",
  "title",
  "description",
  "category",
  "start_date",
  "end_date",
  "is_active",
  "wallet_eligible",
]);

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (!isValidAdminKey(request.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Acceso no autorizado." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase admin no esta configurado." }, { status: 503 });
  }

  const { id } = await context.params;
  const payload = await request.json();
  const updates = Object.fromEntries(
    Object.entries(payload).filter(([key]) => allowedFields.has(key))
  );

  if (!Object.keys(updates).length) {
    return NextResponse.json({ error: "No hay cambios validos." }, { status: 400 });
  }

  updates.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from("offers")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: "No se pudo actualizar el beneficio." }, { status: 500 });
  }

  return NextResponse.json({ offer: data });
}
