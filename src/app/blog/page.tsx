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
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
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
      <div className="mb-16">
        <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-2">
          Writing
        </h1>
        <p className="text-xs font-mono text-stone-400 dark:text-stone-500 tracking-wide">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-xs font-mono text-stone-400 dark:text-stone-500">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="space-y-16">
          {years.map(([year, yearPosts]) => (
            <section key={year}>
              {/* Year divider */}
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-500 tracking-widest">
                  {year}
                </span>
                <div className="flex-1 h-px bg-stone-100 dark:bg-stone-800" />
              </div>

              {/* Entries */}
              <div>
                {yearPosts.map((post) => {
                  const date = formatDate(post.date);
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-8 py-6 border-b border-stone-100 dark:border-stone-800/60 last:border-0"
                    >
                      {/* Date — fixed width, right-aligned */}
                      <time
                        dateTime={post.date}
                        className="w-14 shrink-0 text-right text-xs font-mono text-stone-400 dark:text-stone-500 tabular-nums mt-0.5"
                      >
                        {date ?? "—"}
                      </time>

                      {/* Title + excerpt */}
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-snug mb-1.5">
                          {post.title}
                          <span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity font-normal text-amber-500">
                            →
                          </span>
                        </p>
                        {post.excerpt && (
                          <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
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
