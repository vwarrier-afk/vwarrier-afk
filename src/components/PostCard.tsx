"use client";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = post.date
    ? new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-5 border-b border-stone-200 dark:border-stone-800 last:border-0 hover:bg-stone-50 dark:hover:bg-stone-900/50 -mx-3 px-3 rounded transition-colors"
    >
      {formattedDate && (
        <time
          dateTime={post.date}
          className="text-xs font-mono text-stone-400 dark:text-stone-500 tabular-nums block mb-2"
        >
          {formattedDate}
        </time>
      )}

      <p className="text-lg font-semibold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
        {post.title}
        <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </p>

      {post.excerpt && (
        <p className="mt-2 text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
}
