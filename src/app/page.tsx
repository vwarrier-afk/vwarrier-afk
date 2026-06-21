import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-5">
          Vivek Warrier
        </h1>
        <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed max-w-[560px]">
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Writing
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
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Writing coming soon.
          </p>
        )}
      </section>
    </div>
  );
}
