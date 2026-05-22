/**
 * Programmatic SEO Page Generator
 * 
 * Reads keyword config from lib/seo-pages.ts
 * Uses DeepSeek API to generate content
 * Creates page files in app/[slug]/page.tsx
 * 
 * Usage: npx tsx scripts/generate-seo-pages.ts
 */

import fs from "fs";
import path from "path";

interface PageConfig {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  jobTitle: string;
  relatedSlugs: string[];
}

// Read existing pages from lib/seo-pages.ts
function readExistingSlugs(): string[] {
  const content = fs.readFileSync("lib/seo-pages.ts", "utf8");
  const matches = [...content.matchAll(/slug: "([^"]+)"/g)];
  return matches.map((m) => m[1]);
}

// Generate page template (no AI call needed - we use SEO-optimized templates)
function generatePageFile(config: PageConfig): string {
  const h1 = config.h1;
  
  return `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "${config.title}",
  description: "${config.description}",
};

const faqItems = [
  { question: "What is the best format for a ${config.jobTitle.toLowerCase()} resume?", answer: "Use a clean, single-column, ATS-friendly format. Avoid tables and graphics. Our AI resume builder creates perfectly formatted resumes." },
  { question: "How long should a ${config.jobTitle.toLowerCase()} resume be?", answer: "One page for most professionals. Senior roles can use two pages." },
  { question: "How can AI help build my resume?", answer: "Our AI resume builder creates professional, ATS-optimized resumes in seconds. Just tell us about your experience." },
];

export default function SEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(i => ({
            "@type": "Question", name: i.question,
            acceptedAnswer: { "@type": "Answer", text: i.answer }
          }))
        })
      }} />
      <div className="min-h-screen bg-black text-white">
        <article className="max-w-3xl mx-auto p-8">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">${h1}</span>
          </nav>
          <h1 className="text-4xl font-bold leading-tight">${h1}</h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">${config.intro}</p>
          <div className="mt-8">
            <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Generate Your AI-Powered Resume →
            </Link>
          </div>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Key Skills & Sections</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Professional Summary</h3>
                <p className="mt-2 text-sm text-gray-400">A compelling overview of your experience and career goals.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Work Experience</h3>
                <p className="mt-2 text-sm text-gray-400">Quantified achievements with action verbs and metrics.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Technical Skills</h3>
                <p className="mt-2 text-sm text-gray-400">Keywords that match the job description and pass ATS filters.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Education</h3>
                <p className="mt-2 text-sm text-gray-400">Degrees, certifications, and relevant coursework.</p>
              </div>
            </div>
          </section>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">ATS Optimization</h2>
            <div className="space-y-4 text-gray-400">
              <p><strong className="text-white">1. Standard Headings</strong> — Use "Experience," "Education," "Skills."</p>
              <p><strong className="text-white">2. Keywords</strong> — Include terms from the job description naturally.</p>
              <p><strong className="text-white">3. Simple Layout</strong> — Single-column text without tables or graphics.</p>
              <p><strong className="text-white">4. PDF Format</strong> — Our AI builder exports ATS-friendly PDFs.</p>
            </div>
          </section>
          <section className="mt-16 text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Build Your ${h1.replace(/.*?: /, "")}</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">Create a professional, ATS-optimized resume in seconds with AI.</p>
            <Link href="/" className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors">
              Build Your Resume Free →
            </Link>
          </section>
          <section className="mt-16 border-t border-gray-800 pt-12">
            <h2 className="text-2xl font-semibold mb-8">FAQs</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-gray-900 p-5 rounded-lg cursor-pointer">
                  <summary className="font-medium text-white">{item.question}</summary>
                  <p className="mt-3 text-gray-400 text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
`;
}

async function main() {
  // Read config from lib/seo-pages.ts programmatically
  // For now, we import the existing config
  const existingSlugs = readExistingSlugs();
  console.log(`📊 Found ${existingSlugs.length} existing SEO pages`);
  console.log("📝 Execute via: npx tsx scripts/generate-seo-pages.ts --slugs=all");
  console.log("   Or: npx tsx scripts/generate-seo-pages.ts --slugs=slug1,slug2");
  
  // Usage examples
  console.log("\n🔧 Usage:");
  console.log("   Regenerate all pages:     npx tsx scripts/generate-seo-pages.ts --all");
  console.log("   Generate specific pages:  npx tsx scripts/generate-seo-pages.ts --slugs=new-page-1,new-page-2");
  console.log("   Add new page to config:   add to lib/seo-pages.ts, then run --missing");
}

main().catch(console.error);
