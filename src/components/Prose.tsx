import { cn } from "@/lib/utils";

export default function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-stone dark:prose-invert max-w-none",
        "prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline",
        "prose-pre:bg-stone-100 dark:prose-pre:bg-stone-800",
        className
      )}
    >
      {children}
    </div>
  );
}
