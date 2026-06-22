import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-20">
      <section className="pt-4">
        <p className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-4">
          Product Manager · Payments
        </p>
        <h1 className="text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-8">
          Vivek Warrier
        </h1>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed max-w-[580px] text-lg">
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

      {/* Mood image — replace src with your photo path e.g. src="/home-mood.jpg" */}
      <div className="relative w-full aspect-[5/2] bg-stone-100 dark:bg-stone-800 rounded overflow-hidden -mt-6">
        <span className="absolute bottom-3 left-4 text-xs font-mono text-stone-400 dark:text-stone-600">
          mood photo
        </span>
      </div>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-sm font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide">
            Latest Writing
          </h2>
          {recentPosts.length > 0 && (
            <Link
              href="/blog"
              className="text-sm text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
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
          <p className="text-stone-400 dark:text-stone-500">
            Writing coming soon.
          </p>
        )}
      </section>
    </div>
  );
}
