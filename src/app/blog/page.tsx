import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on product management, technology, and data.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-2">
        Writing
      </h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            No posts yet &mdash; check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
