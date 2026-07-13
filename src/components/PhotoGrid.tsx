"use client";
import Image from "next/image";

export default function PhotoGrid({ photos }: { photos: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {photos.map((src) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-sm bg-stone-100 dark:bg-stone-800"
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
