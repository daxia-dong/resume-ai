import type { Metadata } from "next";
import Link from "next/link";

const slug = "backend-developer-resume-example";

const pageData = {
  title: "Backend Developer Resume Example - 2026 Template | AI Resume Builder",
  h1: "Backend Developer Resume Example: 2026 Template",
  intro: `Backend developers are the backbone of modern applications. Your resume needs to demonstrate strong skills in API design, database management, system architecture, and performance optimization. This example shows you exactly what recruiters want to see.`,
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.title,
};

const faqItems = [
  { question: "What skills should a backend developer include?", answer: `Include programming languages (Python, Java, Go, TypeScript), frameworks (Django, Spring Boot, FastAPI), databases (PostgreSQL, MongoDB, Redis), cloud platforms (AWS, GCP), DevOps tools (Docker, Kubernetes), and system design concepts.` },
  { question: "What projects should a backend developer showcase?", answer: `Showcase projects that demonstrate API design, database optimization, system scaling, and performance improvements. Include links to GitHub repos and describe the architecture decisions you made.` },
  { question: "How can our AI resume builder help?", answer: `Our AI resume builder creates professional, ATS-optimized backend developer resume example content in seconds. Just tell us about your experience and we handle the rest. No templates, no formatting headaches — just a great resume ready to download.` },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <article className="max-w-3xl mx-auto p-8">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{pageData.h1}</span>
        </nav>
        <h1 className="text-4xl font-bold leading-tight">{pageData.h1}</h1>
        <p className="mt-4 text-lg text-gray-400 leading-relaxed">{pageData.intro}</p>
        <div className="mt-8">
          <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Generate Your AI-Powered Resume →
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Tips & Best Practices</h2>
          <div className="space-y-4 text-gray-400">
            <p>When writing your resume or cover letter, focus on quantifiable achievements, use keywords from the job description, and tailor each application to the specific role. Our AI resume builder handles all of this automatically, generating a professional, ATS-optimized resume in seconds.</p>
          </div>
        </section>

        <section className="mt-16 text-center py-12 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Generate Your {slug.replace(/-/g, ' ').replace(/(^|\s)([a-z])/g, (m) => m.toUpperCase())}</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Stop staring at a blank page. Our AI creates a professional, ATS-optimized document from your experience in seconds.
          </p>
          <Link href="/" className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors">
            Build Yours Free →
          </Link>
        </section>

        {/* FAQ */}
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
  );
}
