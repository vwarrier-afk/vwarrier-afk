import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(date: string) {
  const d = new Date(date + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-stone-200 dark:border-stone-800 rounded-lg p-5 hover:border-amber-300 dark:hover:border-amber-700/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-3">
        {formattedDate ? (
          <time
            dateTime={post.date}
            className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider"
          >
            {formattedDate}
          </time>
        ) : (
          <span />
        )}
        <span className="text-stone-300 dark:text-stone-700 group-hover:text-amber-500 transition-colors text-sm">
          →
        </span>
      </div>

      <h2 className="text-base font-semibold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-snug">
        {post.title}
      </h2>

      {post.excerpt && (
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
}
