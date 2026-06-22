"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Camera, User, Mail } from "lucide-react";

const nav = [
  { label: "Home", href: "/", icon: Home },
  { label: "Writing", href: "/blog", icon: BookOpen },
  { label: "Photos", href: "/photography", icon: Camera },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-20 border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm">
      <div className="flex items-center justify-around px-1 py-2 pb-safe">
        {nav.map(({ label, href, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-medium transition-colors min-w-[52px] ${
                active
                  ? "text-amber-600 dark:text-amber-500"
                  : "text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 1.75} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
