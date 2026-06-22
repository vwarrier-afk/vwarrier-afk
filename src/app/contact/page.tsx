import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vivek Warrier.",
};

const links = [
  {
    label: "Email",
    value: "vivek.warrier1@gmail.com",
    href: "mailto:vivek.warrier1@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vivekwarrier",
    href: "https://www.linkedin.com/in/vivekwarrier",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/vwarrier-afk",
    href: "https://github.com/vwarrier-afk",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
        Contact
      </h1>
      <p className="text-stone-500 dark:text-stone-400 mb-10 leading-relaxed max-w-[480px]">
        The best way to reach me is via email or LinkedIn. I try to respond
        within a few days.
      </p>

      <div>
        {links.map((link) => (
          <div
            key={link.label}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5 border-b border-stone-100 dark:border-stone-800/60 last:border-0"
          >
            <span className="shrink-0 w-16 text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
              {link.label}
            </span>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-stone-800 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
            >
              {link.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
