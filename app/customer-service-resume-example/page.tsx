import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Service Resume Example - 2026 Template & Guide | AI Resume Builder",
  description: "Professional customer service resume example example with tips and best practices. Use our free AI resume builder to create an ATS-optimized resume in seconds.",
  openGraph: {
    title: "Customer Service Resume Example (2026)",
    description: "Professional customer service resume example example and template.",
  },
};

const faqItems = [
  { question: "What is the best format for a customer service resume example?", answer: "Use a clean, single-column, ATS-friendly format. Avoid tables, graphics, and columns. Our AI resume builder automatically generates perfectly formatted resumes that pass ATS filters." },
  { question: "How long should my resume be?", answer: "One page for most professionals, two pages maximum for senior roles with 10+ years of experience. Recruiters spend an average of 7 seconds scanning a resume." },
  { question: "How can our AI resume builder help?", answer: "Our AI resume builder creates professional, ATS-optimized resumes in seconds. Just tell us about your experience and we generate a complete resume. No templates, no formatting, no hassle." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(i => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })),
};

export default function SEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-black text-white">
        <article className="max-w-3xl mx-auto p-8">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Customer Service Resume Example</span>
          </nav>
          <h1 className="text-4xl font-bold leading-tight">Customer Service Resume Example: 2026 Guide</h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Creating a compelling customer service resume example is essential for landing your next role. 
            This guide covers everything you need to know, from formatting to content optimization.
            Use our free AI resume builder to generate a professional resume in seconds.
          </p>
          <div className="mt-8">
            <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Generate Your AI-Powered Resume →
            </Link>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Key Sections</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Professional Summary</h3>
                <p className="mt-2 text-sm text-gray-400">A 2-3 sentence overview highlighting your experience, key skills, and career goals. Tailor this to each role.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Work Experience</h3>
                <p className="mt-2 text-sm text-gray-400">List your most recent positions with quantifiable achievements. Use action verbs and metrics.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Skills</h3>
                <p className="mt-2 text-sm text-gray-400">Include technical and soft skills relevant to the role. Match keywords from the job description.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg">
                <h3 className="font-semibold">Education & Certifications</h3>
                <p className="mt-2 text-sm text-gray-400">List your degrees, certifications, and relevant coursework. Include GPA if impressive.</p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">ATS Optimization Tips</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p><strong className="text-white">1. Use Standard Headings</strong> — ATS systems look for "Experience," "Education," "Skills." Avoid creative headings.</p>
              <p><strong className="text-white">2. Include Keywords</strong> — Scan the job description for key terms and include them naturally in your resume.</p>
              <p><strong className="text-white">3. Avoid Tables & Graphics</strong> — ATS parsers struggle with complex layouts. Stick to single-column text.</p>
              <p><strong className="text-white">4. Save as PDF</strong> — PDF is the most ATS-friendly format. Our AI builder exports perfectly formatted PDFs.</p>
            </div>
          </section>

          <section className="mt-16 text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Generate Your Customer Service Resume Example</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">Stop wrestling with formatting. Our AI creates a professional, ATS-optimized resume in seconds.</p>
            <Link href="/" className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors">Build Your Resume Free →</Link>
          </section>

          <section className="mt-16 border-t border-gray-800 pt-12">
            <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="bg-gray-900 p-5 rounded-lg cursor-pointer">
                  <summary className="font-medium text-white">{item.question}</summary>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}