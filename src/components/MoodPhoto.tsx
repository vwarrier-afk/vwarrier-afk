"use client";
import Image from "next/image";

export default function MoodPhoto({ src }: { src: string }) {
  return (
    <div
      className="relative w-full aspect-[5/2] rounded overflow-hidden -mt-6"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Image src={src} alt="" fill className="object-cover" priority />
    </div>
  );
}
