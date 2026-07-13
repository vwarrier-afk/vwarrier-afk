import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Photography",
  description: "A visual journal by Vivek Warrier.",
};

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]);

function getPhotos(): string[] {
  const dir = path.join(process.cwd(), "public", "photography");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTS.has(path.extname(f)))
    .sort()
    .map((f) => `/photography/${f}`);
}

export default function PhotographyPage() {
  const photos = getPhotos();

  return (
    <div>
      <div className="mb-14">
        <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-3">
          Photography
        </h1>
        <p className="text-stone-500 dark:text-stone-400 leading-relaxed max-w-[520px]">
          Places, light, and moments worth keeping.
        </p>
      </div>

      {photos.length === 0 ? (
        <p className="text-stone-400 dark:text-stone-500 text-sm">
          Photos coming soon.
        </p>
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </div>
  );
}
