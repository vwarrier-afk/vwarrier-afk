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

// Strip curly/smart quotes that editors insert instead of straight quotes
const cleanStr = (s: string) =>
  s.replace(/[“”‘’]/g, "").trim();

// For dates specifically, keep only digits and hyphens
const cleanDate = (raw: unknown): string => {
  if (raw instanceof Date) return raw.toISOString().split("T")[0];
  return String(raw).replace(/[^\d-]/g, "").trim();
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

      return {
        slug,
        title: cleanStr(data.title as string),
        date: cleanDate(data.date),
        excerpt: data.excerpt ? cleanStr(data.excerpt as string) : undefined,
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

  return {
    slug,
    title: cleanStr(data.title as string),
    date: cleanDate(data.date),
    excerpt: data.excerpt ? cleanStr(data.excerpt as string) : undefined,
    content,
  };
}
