import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-20">
      <section className="pt-4">
        <p className="text-xs font-mono font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-4">
          Product Manager · Payments
        </p>
        <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight mb-8">
          Vivek Warrier
        </h1>
        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-[580px] text-lg">
          <p>
            Product Manager at a global payments company. Previously, I spent
            five years as a Salesforce engineer, which gave me an unusual
            appreciation for the details that make or break a product.
          </p>
          <p>
            I write about product management, technology, and the occasional
            data visualisation. When I&rsquo;m not thinking about payments,
            I&rsquo;m exploring the ever-evolving JavaScript ecosystem.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
            Latest Writing
          </h2>
          {recentPosts.length > 0 && (
            <Link
              href="/blog"
              className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              All posts &rarr;
            </Link>
          )}
        </div>
        {recentPosts.length > 0 ? (
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-slate-400 dark:text-slate-500">
            Writing coming soon.
          </p>
        )}
      </section>
    </div>
  );
}
