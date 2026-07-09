import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import type { Activity } from "@/types/district";

type ActivityCardProps = {
  activity: Activity;
};

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-urban-100 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-urban-100">
        <Image src={activity.imageUrl} alt="" fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-500">{activity.date} / {activity.time}</p>
        <h3 className="mt-2 text-lg font-semibold text-petrol-900">{activity.title}</h3>
        <p className="mt-2 text-sm leading-6 text-urban-700">{activity.description}</p>
        <div className="mt-4 grid gap-2 text-sm text-urban-700">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={15} aria-hidden="true" />
            {activity.date}, {activity.time}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} aria-hidden="true" />
            {activity.location}
          </span>
        </div>
        <a className="mt-4 inline-flex rounded border border-urban-100 px-3 py-2 text-sm font-semibold text-petrol-900" href="/actividades">
          Ver detalle
        </a>
      </div>
    </article>
  );
}
