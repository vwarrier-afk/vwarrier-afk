"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Writing", href: "/blog" },
  { label: "Photography", href: "/photography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close menu if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Single row — name left, controls right */}
        <div className="h-14 flex items-center justify-between">
          <Link href="/" aria-label="Home" className="p-2 -ml-2 opacity-90 hover:opacity-100 transition-opacity">
            <svg width="64" height="28" viewBox="0 0 64 28" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="28" rx="2" fill="#f59e0b"/>
              <rect x="2" y="2" width="60" height="24" rx="1" fill="none" stroke="#1c1917" strokeWidth="1.1"/>
              <text x="32" y="19"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="13" fontWeight="700"
                fill="#1c1917" textAnchor="middle"
                letterSpacing="4">VW</text>
            </svg>
          </Link>

          <div className="flex items-center gap-1">
            {/* Desktop nav — hidden below 768 px */}
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger — hidden above 768 px */}
            <button
              className="md:hidden p-2 rounded-md text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile dropdown — full-width links, easy tap targets */}
        {open && (
          <nav className="md:hidden pb-3 border-t border-stone-100 dark:border-stone-800">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors border-b border-stone-100 dark:border-stone-800 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}


