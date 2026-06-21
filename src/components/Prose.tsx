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
        "prose prose-slate dark:prose-invert max-w-none",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline",
        "prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}
