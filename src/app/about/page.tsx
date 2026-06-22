import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Vivek Warrier — Product Manager, technologist, and data enthusiast.",
};

const experience = [
  {
    period: "2023 – now",
    role: "Product Manager",
    org: "Global Payments Company",
  },
  {
    period: "2018 – 2023",
    role: "Salesforce Developer",
    org: "Lightning Web Components & platform development",
  },
];

const interests = [
  "Product Management",
  "Payments",
  "Data Science",
  "Data Visualisation",
  "JavaScript",
  "Salesforce",
];

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-8">
        About
      </h1>

      <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed">
        <p>
          I&rsquo;m a Product Manager at a global payments company, where I
          work on products that move money reliably and securely at scale.
          Payments is one of those rare domains where the details genuinely
          matter &mdash; a mistake isn&rsquo;t just a bug report, it&rsquo;s
          someone&rsquo;s rent not going through.
        </p>
        <p>
          Before moving into product, I spent five years as a Salesforce
          engineer building solutions on Lightning Web Components and the
          broader Salesforce platform. That technical background shapes how
          I think about product: I find it hard to hand off work I
          don&rsquo;t fully understand, and I&rsquo;ve learned to spot
          engineering constraints early.
        </p>
        <p>
          Outside of work, I&rsquo;m interested in data science and
          visualisation &mdash; there&rsquo;s something deeply satisfying about
          turning raw numbers into a picture that makes an argument you
          couldn&rsquo;t make with words alone. I&rsquo;m also keeping a
          close eye on how JavaScript continues to evolve and expand into
          new domains.
        </p>
        <p>
          I look to collaborate on technology that has the power to impact
          people positively. If that resonates,{" "}
          <a
            href="/contact"
            className="text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            I&rsquo;d love to hear from you
          </a>
          .
        </p>
      </div>

      <hr className="my-10 border-stone-200 dark:border-stone-800" />

      <section className="space-y-8">
        <div>
          <h2 className="text-sm font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide mb-5">
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((item) => (
              <div
                key={item.period}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
              >
                <span className="shrink-0 text-sm font-mono text-stone-400 dark:text-stone-500 tabular-nums">
                  {item.period}
                </span>
                <div>
                  <p className="text-stone-800 dark:text-stone-200 font-medium">
                    {item.role}
                  </p>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                    {item.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide mb-5">
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wide mb-5">
            Resume
          </h2>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            Download resume (PDF) &darr;
          </a>
          <p className="mt-2 text-xs text-stone-400 dark:text-stone-500">
            Drop your resume.pdf into /public to make this link work.
          </p>
        </div>
      </section>
    </div>
  );
}
