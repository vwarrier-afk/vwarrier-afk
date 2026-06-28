import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Career timeline — Vivek Warrier",
};

const timeline = [
  {
    period: "2023 – present",
    role: "Product Manager",
    org: "Global Payments Company",
    description:
      "Working on products that move money reliably and securely at scale. I own the roadmap for a payments processing platform used across multiple markets, partnering closely with engineering, compliance, and commercial teams to ship features that matter — and avoid the ones that don't.",
  },
  {
    period: "2018 – 2023",
    role: "Salesforce Developer",
    org: "Lightning Web Components & Platform",
    description:
      "Five years building on the Salesforce platform — primarily Lightning Web Components, Apex, and platform automation. Delivered custom solutions across industries including financial services and retail, and developed a deep appreciation for the constraints that make or break a technical decision.",
  },
  {
    period: "2016 – 2018",
    role: "Software Engineer",
    org: "Early career",
    description:
      "Started out in software engineering, working across the stack and picking up the fundamentals that would shape everything that came after — version control habits, the value of readable code, and learning to ask why before asking how.",
  },
];

export default function TimelinePage() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          {" / "}Timeline
        </p>
        <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight">
          Timeline
        </h1>
        <p className="mt-4 text-stone-500 dark:text-stone-400 leading-relaxed max-w-[520px]">
          A record of where I&rsquo;ve worked and what I&rsquo;ve learned along
          the way.
        </p>
      </div>

      <div className="space-y-0">
        {timeline.map((entry, i) => (
          <div key={i} className="flex gap-5">
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center pt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0" />
              {i < timeline.length - 1 && (
                <div className="w-px flex-1 bg-stone-200 dark:bg-stone-800 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${i < timeline.length - 1 ? "pb-10" : ""}`}>
              <p className="text-xs font-mono text-stone-400 dark:text-stone-500 tabular-nums mb-1">
                {entry.period}
              </p>
              <h2 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-0.5">
                {entry.role}
              </h2>
              <p className="text-sm text-amber-600 dark:text-amber-500 mb-3">
                {entry.org}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
