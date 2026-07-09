import Image from "next/image";
import { Camera } from "lucide-react";
import type { SocialPost } from "@/types/district";

type SocialPostCardProps = {
  post: SocialPost;
};

export function SocialPostCard({ post }: SocialPostCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-urban-100 bg-white shadow-sm">
      <div className="relative aspect-square bg-urban-100">
        <Image src={post.imageUrl} alt="" fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-petrol-900">
          {post.category}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold text-urban-700">{post.publishedAt} / #distritoelgolf</p>
        <h3 className="mt-3 font-semibold text-petrol-900">{post.title}</h3>
        <p className="mt-2 text-sm leading-6 text-urban-700">{post.description}</p>
        <a
          className="btn-outline-contrast mt-4 inline-flex items-center gap-1.5 rounded px-3 py-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#D1A53A] focus-visible:ring-offset-2"
          href={post.instagramUrl ?? "https://instagram.com"}
        >
          <Camera size={15} aria-hidden="true" />
          Ver en Instagram
        </a>
      </div>
    </article>
  );
}
