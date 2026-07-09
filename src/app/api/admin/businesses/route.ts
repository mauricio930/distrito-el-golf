import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient, isValidAdminKey } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  if (!isValidAdminKey(request.headers.get("x-admin-key"))) {
    return NextResponse.json({ error: "Acceso no autorizado." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase admin no esta configurado. Falta SUPABASE_SERVICE_ROLE_KEY." },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "No se pudieron cargar los negocios." }, { status: 500 });
  }

  return NextResponse.json({ businesses: data ?? [] });
}
