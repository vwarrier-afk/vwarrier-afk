"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article className="relative py-5 border-b border-stone-200 dark:border-stone-800 last:border-0">
      <time
        dateTime={post.date}
        className="text-xs font-mono text-stone-400 dark:text-stone-500 tabular-nums block mb-2"
      >
        {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>

      <Link
        href={`/blog/${post.slug}`}
        className="text-lg font-semibold text-stone-900 dark:text-stone-50 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {post.title}
      </Link>

      {post.image && hovered && (
        <div className="absolute left-0 -top-2 -translate-y-full z-10 pointer-events-none shadow-lg rounded overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={280}
            height={160}
            className="object-cover"
          />
        </div>
      )}

      {post.excerpt && (
        <p className="mt-2 text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </article>
  );
}
