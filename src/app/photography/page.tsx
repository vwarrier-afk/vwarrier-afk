import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "A visual journal by Vivek Warrier.",
};

export default function PhotographyPage() {
  return (
    <div>
      <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-3">
        Photography
      </h1>
      <p className="text-stone-500 dark:text-stone-400 mb-14 leading-relaxed max-w-[520px]">
        A visual journal — places, light, and moments worth keeping.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-stone-100 dark:bg-stone-800 rounded-sm flex items-end p-3"
          >
            <span className="text-xs font-mono text-stone-400 dark:text-stone-600">
              coming soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
