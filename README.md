# Distrito el Golf

Web mobile-first para presentar Distrito el Golf, registrar negocios del barrio, revisar solicitudes en un panel administrador y publicar comercios/beneficios aprobados.

## Desarrollo local

```bash
npm install
npm run dev -- -p 3010
```

Abrir [http://localhost:3010](http://localhost:3010).

## Variables de entorno

Crear `.env.local` a partir de `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_ACCESS_KEY=
```

No subir claves reales a GitHub. `SUPABASE_SERVICE_ROLE_KEY` y `ADMIN_ACCESS_KEY` son privadas y solo deben configurarse en local/Vercel.

## Crear Supabase

1. Crear un proyecto en Supabase.
2. Ir a SQL Editor.
3. Ejecutar el archivo `supabase/schema.sql`.
4. Copiar `Project URL` en `NEXT_PUBLIC_SUPABASE_URL`.
5. Copiar `anon public` en `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
6. Copiar `service_role` en `SUPABASE_SERVICE_ROLE_KEY` solo para servidor.

## Configurar Vercel

En el proyecto `distrito-el-golf` de Vercel, agregar las mismas variables en **Settings > Environment Variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_ACCESS_KEY`

Luego hacer redeploy del último commit de `main`.

## Probar el formulario

1. Abrir `/inscribir-negocio`.
2. Completar nombre, responsable, email, dirección, categoría y plan.
3. Enviar solicitud.
4. El negocio queda en Supabase con:
   - `publication_status = pending_review`
   - `membership_status = pending_payment`
   - `featured = false`
   - `wallet_eligible = false`

## Ingresar a admin

1. Abrir `/admin`.
2. Ingresar la clave configurada en `ADMIN_ACCESS_KEY`.
3. Revisar negocios pendientes.
4. Aprobar el negocio y activar la membresía para publicarlo.
5. Ajustar `latitude` y `longitude` manualmente si falta georreferenciación.

Un negocio solo aparece públicamente si:

- `publication_status = approved`
- `membership_status = active`

Los negocios sin coordenadas válidas no aparecen en el mapa.

## Beneficios

Desde `/admin` se pueden crear y activar beneficios. `/beneficios` muestra solo beneficios activos asociados a negocios publicados y con membresía activa.

## Verificación

```bash
npm run build
```

Rutas principales:

- `/`
- `/mapa`
- `/beneficios`
- `/actividades`
- `/wallet`
- `/inscribir-negocio`
- `/admin`
