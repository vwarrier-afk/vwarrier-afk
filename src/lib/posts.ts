import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      const rawDate = data.date;
      const date =
        rawDate instanceof Date
          ? rawDate.toISOString().split("T")[0]
          : (rawDate as string).replace(/[""'']/g, "").trim();

      return {
        slug,
        title: (data.title as string).replace(/[""'']/g, "").trim(),
        date,
        excerpt: data.excerpt
          ? (data.excerpt as string).replace(/[""'']/g, "").trim()
          : undefined,
        image: data.image as string | undefined,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const rawDate = data.date;
  const date =
    rawDate instanceof Date
      ? rawDate.toISOString().split("T")[0]
      : (rawDate as string).replace(/[""'']/g, "").trim();

  return {
    slug,
    title: (data.title as string).replace(/[""'']/g, "").trim(),
    date,
    excerpt: data.excerpt
      ? (data.excerpt as string).replace(/[""'']/g, "").trim()
      : undefined,
    content,
  };
}
