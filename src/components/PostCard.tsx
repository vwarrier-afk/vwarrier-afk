import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
      <time
        dateTime={post.date}
        className="shrink-0 text-sm font-mono text-slate-400 dark:text-slate-500 tabular-nums"
      >
        {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>
      <div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-slate-800 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
        >
          {post.title}
        </Link>
        {post.excerpt && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
