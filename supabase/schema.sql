create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  icon text,
  is_active boolean not null default true,
  created_at timestamp with time zone not null default now()
);

insert into public.categories (name, slug, icon)
values
  ('Cafe', 'cafe', 'coffee'),
  ('Restaurante', 'restaurante', 'utensils'),
  ('Oficina', 'oficina', 'building'),
  ('Cowork', 'cowork', 'briefcase'),
  ('Servicios', 'servicios', 'settings'),
  ('Bienestar', 'bienestar', 'heart'),
  ('Estacionamiento', 'estacionamiento', 'parking'),
  ('Retail', 'retail', 'shopping-bag'),
  ('Local disponible', 'local', 'store'),
  ('Actividad', 'actividad', 'calendar'),
  ('Descuento', 'descuento', 'badge-percent')
on conflict (slug) do update
set name = excluded.name,
    icon = excluded.icon,
    is_active = true;

create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  legal_name text,
  rut text,
  contact_name text not null,
  email text not null,
  phone text,
  address text not null,
  latitude numeric,
  longitude numeric,
  category text not null,
  description text,
  website_url text,
  instagram_url text,
  logo_url text,
  opening_hours text,
  benefit_title text,
  benefit_description text,
  membership_plan text,
  membership_status text not null default 'pending_payment',
  publication_status text not null default 'pending_review',
  featured boolean not null default false,
  wallet_eligible boolean not null default false,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  constraint businesses_membership_status_check check (
    membership_status in ('pending_payment', 'active', 'expired', 'cancelled')
  ),
  constraint businesses_publication_status_check check (
    publication_status in ('pending_review', 'approved', 'rejected', 'hidden')
  )
);

drop trigger if exists set_businesses_updated_at on public.businesses;
create trigger set_businesses_updated_at
before update on public.businesses
for each row execute function public.set_updated_at();

create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  title text not null,
  description text,
  category text,
  start_date date,
  end_date date,
  is_active boolean not null default false,
  wallet_eligible boolean not null default false,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

drop trigger if exists set_offers_updated_at on public.offers;
create trigger set_offers_updated_at
before update on public.offers
for each row execute function public.set_updated_at();

alter table public.categories enable row level security;
alter table public.businesses enable row level security;
alter table public.offers enable row level security;

drop policy if exists "Public can read active categories" on public.categories;
create policy "Public can read active categories"
on public.categories for select
using (is_active = true);

drop policy if exists "Public can insert pending businesses" on public.businesses;
create policy "Public can insert pending businesses"
on public.businesses for insert
with check (
  publication_status = 'pending_review'
  and membership_status = 'pending_payment'
  and featured = false
  and wallet_eligible = false
);

drop policy if exists "Public can read approved active businesses" on public.businesses;
create policy "Public can read approved active businesses"
on public.businesses for select
using (
  publication_status = 'approved'
  and membership_status = 'active'
);

drop policy if exists "Public can read active offers from published businesses" on public.offers;
create policy "Public can read active offers from published businesses"
on public.offers for select
using (
  is_active = true
  and exists (
    select 1
    from public.businesses b
    where b.id = offers.business_id
      and b.publication_status = 'approved'
      and b.membership_status = 'active'
  )
);

create index if not exists businesses_public_status_idx
on public.businesses (publication_status, membership_status);

create index if not exists businesses_category_idx
on public.businesses (category);

create index if not exists offers_business_active_idx
on public.offers (business_id, is_active);
