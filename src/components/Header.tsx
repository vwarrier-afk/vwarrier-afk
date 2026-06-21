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
    <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-[760px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors tracking-tight"
        >
          Vivek Warrier
        </Link>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
