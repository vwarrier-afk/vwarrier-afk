const links = [
  { label: "Twitter", href: "https://twitter.com/vivekwarrier" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivekwarrier",
  },
  { label: "GitHub", href: "https://github.com/vwarrier-afk" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-24">
      <div className="max-w-[680px] mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Vivek Warrier
        </p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
