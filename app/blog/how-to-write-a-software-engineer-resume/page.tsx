import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Software Engineer Resume That Gets You Hired in 2026",
  description: "Complete guide on writing a software engineer resume that passes ATS filters and gets interviews. Includes examples, skills section tips, and expert advice.",
};

const faqItems = [
  { question: "How long should a software engineer resume be?", answer: "One page for most engineers (0-10 years), two pages maximum for senior/staff roles. Recruiters spend 7 seconds scanning, so be concise and put the most important content in the top third of the first page." },
  { question: "What is the best format for a software engineer resume?", answer: "Chronological format is most ATS-friendly. Use reverse-chronological order, single-column layout, standard section headings, and a clean professional font. Avoid columns, tables, and graphics that confuse ATS parsers." },
  { question: "What file format should I use?", answer: "PDF is preferred. It preserves formatting and is consistently parsed by ATS systems. Avoid DOCX unless the job posting specifically requests it." },
];

const faqSchema = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(i => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })),
});

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <article className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto p-8">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span className="mx-2">/</span>
            <span className="text-gray-300">Software Engineer Resume Guide</span>
          </nav>

          <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">AR</div>
            <div><p className="text-white font-medium">Alex Rivera</p><p>Career Advisor • Updated May 22, 2026 • 12 min read</p></div>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-4">How to Write a Software Engineer Resume That Gets You Hired in 2026</h1>
          <p className="text-lg text-gray-400 mb-8">A step-by-step guide to crafting a software engineer resume that passes ATS filters, impresses hiring managers, and lands you more interviews.</p>

          <div className="bg-gray-900 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ol className="space-y-2 text-gray-400 text-sm">
              <li><span className="text-white">1.</span> Start with a Strong Professional Summary</li>
              <li><span className="text-white">2.</span> Build a Keyword-Rich Skills Section</li>
              <li><span className="text-white">3.</span> Write Impactful Experience Bullets</li>
              <li><span className="text-white">4.</span> Showcase Your Technical Projects</li>
              <li><span className="text-white">5.</span> Optimize for ATS Systems</li>
              <li><span className="text-white">6.</span> Common Mistakes to Avoid</li>
            </ol>
          </div>

          <section><h2 className="text-2xl font-semibold text-white mb-4">1. Start with a Strong Professional Summary</h2>
          <p className="text-gray-300">Your professional summary is the first thing recruiters read. It should be 2-3 sentences that quickly communicate your experience level, key technical skills, and what you bring to the team. Avoid generic phrases like "hardworking team player" and instead focus on concrete details.</p>
          <div className="bg-gray-900 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-400 mb-2">✅ Example:</p>
            <p className="italic text-gray-300">&ldquo;Senior software engineer with 6+ years building scalable web applications in TypeScript and Python. Led migration of a monolith to microservices, reducing deployment time by 80%.&rdquo;</p>
          </div></section>

          <section className="mt-8"><h2 className="text-2xl font-semibold text-white mb-4">2. Build a Keyword-Rich Skills Section</h2>
          <p className="text-gray-300">ATS systems scan your resume for specific keywords from the job description. If your skills section doesn't include the technologies the job requires, your resume may be filtered out before a human ever sees it.</p>
          <p className="mt-4">For a complete skills breakdown, see our <Link href="/software-engineer-resume-example" className="text-blue-400 hover:underline">software engineer resume example</Link>.</p></section>

          <section className="mt-8"><h2 className="text-2xl font-semibold text-white mb-4">3. Write Impactful Experience Bullets</h2>
          <p className="text-gray-300">Each bullet point should follow the STAR method and include a measurable outcome. Use strong action verbs and quantify your impact.</p>
          <div className="bg-gray-900 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-400 mb-2">❌ Weak: "Responsible for improving API performance."</p>
            <p className="text-gray-300">✅ Strong: "Optimized PostgreSQL queries and added Redis caching, reducing API response times by 60%."</p>
          </div>
          <p className="mt-4">For more examples, see our <Link href="/software-engineer-resume-example" className="text-blue-400 hover:underline">software engineer resume template</Link>.</p></section>

          <section className="mt-8"><h2 className="text-2xl font-semibold text-white mb-4">4. Showcase Your Technical Projects</h2>
          <p className="text-gray-300">Projects are especially important for junior engineers and career changers. Include 2-3 significant projects with a link to the live demo or GitHub repository. See our <Link href="/entry-level-software-engineer-resume" className="text-blue-400 hover:underline">entry level software engineer resume</Link> guide.</p></section>

          <section className="mt-8"><h2 className="text-2xl font-semibold text-white mb-4">5. Optimize for ATS Systems</h2>
          <p className="text-gray-300">Over 75% of large companies use Applicant Tracking Systems. Use standard headings, include keywords from the job description, avoid tables and graphics, and save as PDF. Use our <Link href="/ats-resume-checker" className="text-blue-400 hover:underline">ATS resume checker</Link> to score your resume. Learn more about <Link href="/resume-keywords-for-tech-jobs" className="text-blue-400 hover:underline">resume keywords for tech jobs</Link>.</p></section>

          <section className="mt-8"><h2 className="text-2xl font-semibold text-white mb-4">6. Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Spelling and grammar errors</li>
            <li>Generic objectives like "Seeking a challenging position"</li>
            <li>Too much text — keep bullets to 1-2 lines</li>
            <li>Irrelevant experience — tailor each resume to the role</li>
            <li>Missing contact information</li>
          </ul></section>

          <section className="mt-16">
            <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/software-engineer-resume-example" className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800">
                <h3 className="font-medium">Software Engineer Resume Example</h3>
                <p className="text-sm text-gray-400 mt-1">See a real resume example</p>
              </Link>
              <Link href="/entry-level-software-engineer-resume" className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800">
                <h3 className="font-medium">Entry Level Resume Guide</h3>
                <p className="text-sm text-gray-400 mt-1">For new graduates</p>
              </Link>
              <Link href="/resume-keywords-for-tech-jobs" className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800">
                <h3 className="font-medium">Resume Keywords for Tech</h3>
                <p className="text-sm text-gray-400 mt-1">ATS keyword optimization</p>
              </Link>
              <Link href="/best-resume-format-2026" className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800">
                <h3 className="font-medium">Best Resume Format 2026</h3>
                <p className="text-sm text-gray-400 mt-1">Formatting guide</p>
              </Link>
            </div>
          </section>

          <section className="mt-16 text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Build Your Software Engineer Resume</h2>
            <p className="text-gray-400 mb-6">Our AI creates a professional, ATS-optimized resume in seconds.</p>
            <Link href="/" className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200">Build Your Resume Free →</Link>
          </section>

          <section className="mt-16 border-t border-gray-800 pt-12">
            <h2 className="text-2xl font-semibold mb-8">FAQs</h2>
            {faqItems.map((item, i) => (
              <details key={i} className="bg-gray-900 p-5 rounded-lg cursor-pointer mb-4">
                <summary className="font-medium text-white">{item.question}</summary>
                <p className="mt-3 text-gray-400 text-sm">{item.answer}</p>
              </details>
            ))}
          </section>
        </div>
      </article>
    </>
  );
}
