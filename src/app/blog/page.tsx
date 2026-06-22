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
      <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-3">
        Writing
      </h1>
      <p className="text-stone-400 dark:text-stone-500 mb-12">
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
          <p className="text-stone-400 dark:text-stone-500 text-sm">
            No posts yet &mdash; check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
