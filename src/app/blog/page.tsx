import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, type PostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing on product management, technology, and data.",
};

function formatDate(date: string) {
  const d = new Date(date + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function groupByYear(posts: PostMeta[]) {
  const map: Record<string, PostMeta[]> = {};
  for (const post of posts) {
    const year = post.date?.slice(0, 4) ?? "—";
    if (!map[year]) map[year] = [];
    map[year].push(post);
  }
  return Object.entries(map).sort(([a], [b]) => Number(b) - Number(a));
}

export default function BlogPage() {
  const posts = getAllPosts();
  const years = groupByYear(posts);

  return (
    <div>
      <div className="mb-14">
        <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-3">
          Writing
        </h1>
        <p className="text-stone-400 dark:text-stone-500 text-sm">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-stone-400 dark:text-stone-500 text-sm">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="space-y-14">
          {years.map(([year, yearPosts]) => (
            <section key={year}>
              {/* Year marker */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-500 tracking-widest">
                  {year}
                </span>
                <div className="flex-1 h-px bg-stone-100 dark:bg-stone-800" />
                <span className="text-xs font-mono text-stone-300 dark:text-stone-700">
                  {yearPosts.length}
                </span>
              </div>

              {/* Timeline entries */}
              <div className="space-y-0">
                {yearPosts.map((post, i) => {
                  const isLast = i === yearPosts.length - 1;
                  const date = formatDate(post.date);
                  return (
                    <div key={post.slug} className="flex gap-4">
                      {/* Dot + vertical line */}
                      <div className="flex flex-col items-center shrink-0 pt-1">
                        <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0" />
                        {!isLast && (
                          <div className="w-px flex-1 bg-stone-100 dark:bg-stone-800 mt-2" />
                        )}
                      </div>

                      {/* Date — fixed width, aligned with dot */}
                      <time
                        dateTime={post.date}
                        className="w-14 shrink-0 text-right text-xs font-mono text-stone-400 dark:text-stone-500 tabular-nums pt-0.5"
                      >
                        {date ?? "—"}
                      </time>

                      {/* Title + excerpt */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex-1 pb-8 last:pb-0"
                      >
                        <h2 className="text-base font-semibold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-snug">
                          {post.title}
                          <span className="ml-1.5 text-stone-300 dark:text-stone-700 group-hover:text-amber-400 transition-colors text-sm font-normal">
                            →
                          </span>
                        </h2>
                        {post.excerpt && (
                          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
