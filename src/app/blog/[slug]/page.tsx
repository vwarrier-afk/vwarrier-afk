import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Prose from "@/components/Prose";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  // Next.js output:export requires at least one path from dynamic routes.
  // The _empty sentinel 404s at runtime until real posts are added.
  if (posts.length === 0) return [{ slug: "_empty" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_empty") notFound();
  const post = getPost(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>
        <time
          dateTime={post.date}
          className="text-xs font-mono text-stone-400 dark:text-stone-500"
        >
          {formattedDate}
        </time>
      </header>

      <Prose>
        <MDXRemote source={post.content} />
      </Prose>

      <footer className="mt-14 pt-8 border-t border-stone-100 dark:border-stone-800">
        <Link
          href="/blog"
          className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
        >
          &larr; All posts
        </Link>
      </footer>
    </article>
  );
}
