import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { label: "Writing", href: "/blog" },
  { label: "Photography", href: "/photography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Name row */}
        <div className="py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-stone-900 dark:text-stone-50 hover:text-amber-600 dark:hover:text-amber-500 transition-colors tracking-tight"
          >
            Vivek Warrier
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile nav strip — visible below name row, hidden on md+ */}
        <nav className="md:hidden flex items-center gap-1 pb-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
