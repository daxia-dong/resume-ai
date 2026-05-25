"use client";

import Link from "next/link";
import type { SEOPage } from "@/lib/seo-pages";

export interface SEOContent {
  /** Detailed resume example sections */
  resumeExample?: {
    name: string;
    contact: string;
    sections: { title: string; content: React.ReactNode }[];
  };
  /** Skills breakdown */
  skillsGrid?: { category: string; skills: string }[];
  /** Tips section */
  tips?: { title: string; content: string }[];
  /** ATS optimization tips */
  atsTips?: { title: string; desc: string }[];
  /** CTA text override */
  ctaText?: string;
}

interface SEOPageTemplateProps {
  page: SEOPage;
  content: SEOContent;
  relatedPages: SEOPage[];
  faqItems: { question: string; answer: string }[];
}

export default function SEOPageTemplate({
  page,
  content,
  relatedPages,
  faqItems,
}: SEOPageTemplateProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <article className="max-w-3xl mx-auto p-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{page.h1}</span>
          </nav>

          {/* H1 */}
          <h1 className="text-4xl font-bold leading-tight">{page.h1}</h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            {page.intro}
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              {content.ctaText || `Generate Your AI-Powered ${page.jobTitle} Resume →`}
            </Link>
          </div>

          {/* Resume Example Section */}
          {content.resumeExample && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">
                {page.jobTitle} Resume Example
              </h2>
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold">{content.resumeExample.name}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {content.resumeExample.contact}
                </p>
                {content.resumeExample.sections.map((section, i) => (
                  <div key={i} className={i > 0 ? "mt-6" : "mt-6"}>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                      {section.title}
                    </h4>
                    {section.content}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Grid */}
          {content.skillsGrid && content.skillsGrid.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-4">
                Top Skills for a {page.jobTitle} Resume
              </h2>
              <p className="text-gray-400 mb-4">
                Recruiters and ATS systems scan for specific skills. Here are the
                most in-demand skills for {page.jobTitle === "Entry Level Software Engineer"
                  ? "entry-level"
                  : page.jobTitle.toLowerCase()}{" "}
                roles in 2026:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {content.skillsGrid.map((group) => (
                  <div
                    key={group.category}
                    className="bg-gray-900 p-5 rounded-lg"
                  >
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
                      {group.category}
                    </h3>
                    <p className="mt-2 text-gray-300">{group.skills}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tips Section */}
          {content.tips && content.tips.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-4">
                {page.jobTitle} Resume Tips
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                {content.tips.map((tip, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-white">
                      {i + 1}. {tip.title}
                    </h3>
                    <p className="mt-1">{tip.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ATS Optimization */}
          {content.atsTips && content.atsTips.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-4">
                ATS Optimization for {page.jobTitle} Resumes
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Over 75% of large companies use Applicant Tracking Systems (ATS)
                to screen resumes before they reach a human recruiter. Here is
                how to make sure your {page.jobTitle.toLowerCase()} resume passes ATS filters:
              </p>
              <div className="mt-6 space-y-4">
                {content.atsTips.map((tip) => (
                  <div key={tip.title} className="bg-gray-900 p-5 rounded-lg">
                    <h3 className="font-semibold text-white">{tip.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Pages */}
          {relatedPages.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-4">
                More Resume Resources
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {relatedPages.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/${rp.slug}`}
                    className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <h3 className="font-medium">{rp.h1.split(":")[0]}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {rp.description.slice(0, 80)}...
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="mt-16 text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">
              Generate Your AI-Powered {page.jobTitle} Resume
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Stop staring at a blank page. Our AI creates a professional,
              ATS-optimized {page.jobTitle.toLowerCase()} resume from your experience in
              seconds.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Build Your Resume Free →
            </Link>
          </section>

          {/* FAQ */}
          <section className="mt-16 border-t border-gray-800 pt-12">
            <h2 className="text-2xl font-semibold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="bg-gray-900 p-5 rounded-lg cursor-pointer"
                >
                  <summary className="font-medium text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
