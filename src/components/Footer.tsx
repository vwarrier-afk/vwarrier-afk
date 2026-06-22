const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivekwarrier",
  },
  { label: "GitHub", href: "https://github.com/vwarrier-afk" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 mt-24">
      <div className="max-w-[760px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone-400 dark:text-stone-500">
          &copy; {new Date().getFullYear()} Vivek Warrier
        </p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
