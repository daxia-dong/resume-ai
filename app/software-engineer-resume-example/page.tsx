import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Engineer Resume Example - 2026 Guide & Template | AI Resume Builder",
  description:
    "A complete software engineer resume example with skills section, ATS optimization tips, and professional template. Use our AI resume builder to create yours in seconds.",
  openGraph: {
    title: "Software Engineer Resume Example & Template (2026)",
    description:
      "See a real software engineer resume example with skills, experience, and ATS-friendly formatting. Build yours free.",
  },
};

const faqItems = [
  {
    question: "What should a software engineer resume include?",
    answer:
      "A software engineer resume should include a professional summary, technical skills section, work experience with quantifiable achievements, education, and relevant projects. Highlight programming languages (Python, Java, JavaScript, etc.), frameworks (React, Node.js, Django), and tools (Git, Docker, AWS) that match the job description.",
  },
  {
    question: "How long should a software engineer resume be?",
    answer:
      "For most software engineers, a one-page resume is ideal. Senior engineers with 10+ years of experience may use two pages. Recruiters typically spend 6-8 seconds scanning a resume, so keep it concise and focused on your most relevant achievements.",
  },
  {
    question: "What skills should I list on a software engineer resume?",
    answer:
      "List technical skills that are relevant to the role you are applying for. Common skills include programming languages (Python, Java, TypeScript, Go), frameworks (React, Angular, Spring Boot, Django), databases (PostgreSQL, MongoDB, Redis), cloud platforms (AWS, GCP, Azure), and tools (Docker, Kubernetes, Git, CI/CD). Focus on skills mentioned in the job description.",
  },
  {
    question: "How do I make my software engineer resume ATS-friendly?",
    answer:
      "Use a clean, single-column layout with standard section headings (Experience, Education, Skills). Avoid tables, columns, images, and graphics. Use standard fonts and save as PDF. Include keywords from the job description naturally in your experience and skills sections. Our AI resume builder automatically generates ATS-optimized resumes.",
  },
  {
    question: "Should I include a summary on my software engineer resume?",
    answer:
      "Yes. A 2-3 sentence professional summary at the top of your resume helps recruiters quickly understand your experience level, key skills, and career goals. Tailor it to each role you apply for, mentioning your years of experience, primary technologies, and what you bring to the team.",
  },
  {
    question: "How far back should my work experience go?",
    answer:
      "Typically include the last 5-10 years or your most recent 2-3 positions. For senior roles, focus on the most impressive and relevant experience. Entry-level candidates can include internships, personal projects, and open source contributions to supplement limited work experience.",
  },
];

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

export default function SoftwareEngineerResumePage() {
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
            <span className="text-gray-300">
              Software Engineer Resume Example
            </span>
          </nav>

          {/* H1 */}
          <h1 className="text-4xl font-bold leading-tight">
            Software Engineer Resume Example: 2026 Guide & Template
          </h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            A strong software engineer resume can make the difference between
            landing an interview and getting ignored. In this guide, we walk
            through a complete resume example, break down each section, and show
            you how to optimize for both recruiters and ATS systems.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Generate Your AI-Powered Software Engineer Resume →
            </Link>
          </div>

          {/* Section 1: Resume Example */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
              Software Engineer Resume Example
            </h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold">Alex Chen</h3>
              <p className="text-sm text-gray-400 mt-1">
                alex.chen@email.com | (555) 123-4567 | San Francisco, CA |
                linkedin.com/in/alexchen | github.com/alexchen
              </p>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Professional Summary
                </h4>
                <p className="text-gray-300">
                  Senior software engineer with 6+ years of experience building
                  scalable web applications and distributed systems. Proficient
                  in TypeScript, Python, and Go. Led cross-functional teams
                  delivering products serving 2M+ users. Passionate about clean
                  architecture, test-driven development, and mentoring junior
                  engineers.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div>
                    <span className="text-gray-500">Languages:</span>{" "}
                    TypeScript, Python, Go, Java, SQL
                  </div>
                  <div>
                    <span className="text-gray-500">Frontend:</span> React,
                    Next.js, TailwindCSS
                  </div>
                  <div>
                    <span className="text-gray-500">Backend:</span> Node.js,
                    Django, FastAPI, gRPC
                  </div>
                  <div>
                    <span className="text-gray-500">Cloud:</span> AWS (ECS,
                    Lambda, RDS), GCP
                  </div>
                  <div>
                    <span className="text-gray-500">Tools:</span> Docker,
                    Kubernetes, Git, CI/CD, Terraform
                  </div>
                  <div>
                    <span className="text-gray-500">Databases:</span>{" "}
                    PostgreSQL, MongoDB, Redis, Elasticsearch
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Experience
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Senior Software Engineer
                      </span>
                      <span className="text-sm text-gray-500">
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">TechCorp, San Francisco</p>
                    <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                      <li>
                        Led migration of monolithic application to
                        microservices architecture using Node.js and AWS ECS,
                        reducing deployment time by 80%
                      </li>
                      <li>
                        Designed and implemented real-time data pipeline
                        processing 500K+ events/second using Kafka and Go
                      </li>
                      <li>
                        Mentored 4 junior engineers through code reviews,
                        pair programming, and technical design sessions
                      </li>
                      <li>
                        Reduced API response times by 60% through query
                        optimization and caching strategy with Redis
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Software Engineer
                      </span>
                      <span className="text-sm text-gray-500">
                        2019 - 2022
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">StartupCo, Remote</p>
                    <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                      <li>
                        Built customer-facing dashboard with React and
                        TypeScript, serving 200K+ monthly active users
                      </li>
                      <li>
                        Developed RESTful APIs with Django and PostgreSQL,
                        achieving 99.9% uptime
                      </li>
                      <li>
                        Implemented CI/CD pipeline with GitHub Actions,
                        reducing release cycle from 2 weeks to daily
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Education
                </h4>
                <p className="text-gray-300">
                  B.S. Computer Science, University of California, Berkeley
                  (2015 - 2019)
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Key Skills */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">
              Top Skills for a Software Engineer Resume
            </h2>
            <p className="text-gray-400 mb-4">
              Recruiters and ATS systems scan for specific skills. Here are the
              most in-demand skills for software engineers in 2026:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  category: "Programming Languages",
                  skills: "Python, JavaScript, TypeScript, Go, Java, Rust, C++, SQL",
                },
                {
                  category: "Frontend Frameworks",
                  skills: "React, Next.js, Vue.js, Angular, TailwindCSS, Svelte",
                },
                {
                  category: "Backend Technologies",
                  skills: "Node.js, Django, FastAPI, Spring Boot, Express, GraphQL",
                },
                {
                  category: "Cloud & DevOps",
                  skills: "AWS, GCP, Azure, Docker, Kubernetes, Terraform, CI/CD",
                },
                {
                  category: "Databases",
                  skills: "PostgreSQL, MongoDB, Redis, Elasticsearch, MySQL, DynamoDB",
                },
                {
                  category: "Soft Skills",
                  skills: "System design, Code review, Mentoring, Agile, Technical writing",
                },
              ].map((group) => (
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

          {/* Section 3: Resume Tips */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">
              Software Engineer Resume Tips
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  1. Quantify Your Impact
                </h3>
                <p className="mt-1">
                  Instead of saying &quot;improved performance,&quot; say
                  &quot;reduced API response time by 60%.&quot; Numbers make
                  your achievements concrete and memorable. Use metrics like
                  percentage improvements, user counts, revenue impact, and
                  time saved.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  2. Tailor to the Job Description
                </h3>
                <p className="mt-1">
                  Customize your resume for each application. If the job
                  requires React and AWS, make sure those skills are prominent
                  in your skills section and demonstrated in your experience
                  bullets. Use keywords from the job description to pass ATS
                  filters.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  3. Highlight Projects and Open Source
                </h3>
                <p className="mt-1">
                  Personal projects and open source contributions demonstrate
                  initiative and passion. Include links to your GitHub profile
                  and live projects. For entry-level candidates, projects can
                  be as important as work experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  4. Use Action Verbs
                </h3>
                <p className="mt-1">
                  Start each bullet point with a strong action verb: &quot;Led,&quot;
                  &quot;Designed,&quot; &quot;Built,&quot; &quot;Implemented,&quot;
                  &quot;Optimized,&quot; &quot;Architected.&quot; This makes your
                  experience sound proactive and impactful.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  5. Keep It ATS-Friendly
                </h3>
                <p className="mt-1">
                  Use standard section headings (Experience, Education, Skills).
                  Avoid tables, columns, and graphics. Save as PDF. Our AI
                  resume builder automatically generates ATS-optimized resumes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: ATS Optimization */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">
              ATS Optimization for Software Engineer Resumes
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Over 75% of large companies use Applicant Tracking Systems (ATS)
              to screen resumes before they reach a human recruiter. Here is
              how to make sure your software engineer resume passes ATS filters:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Match Keywords from the Job Description",
                  desc: "Identify key technologies, tools, and concepts in the job posting and include them naturally in your resume. If they require Kubernetes, make sure it appears in your skills or experience section.",
                },
                {
                  title: "Use Standard Section Headings",
                  desc: 'ATS parsers look for standard headings like "Experience," "Education," "Skills," and "Projects." Avoid creative headings like "Where I Have Worked" or "My Toolbox."',
                },
                {
                  title: "Avoid Tables and Columns",
                  desc: "Multi-column layouts and tables can confuse ATS parsers. Use a single-column layout with clear section breaks. Our example above uses a simple, linear format.",
                },
                {
                  title: "Use Standard File Formats",
                  desc: "PDF is the most reliable format for ATS systems. Avoid DOCX, image files, or compressed folders. Most ATS systems can parse PDF accurately.",
                },
                {
                  title: "Include Contact Information Clearly",
                  desc: "Put your name, email, phone, and LinkedIn at the top of the resume in a standard format. ATS systems use these fields for candidate matching and ranking.",
                },
              ].map((tip) => (
                <div key={tip.title} className="bg-gray-900 p-5 rounded-lg">
                  <h3 className="font-semibold text-white">{tip.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Pages (Internal Links) */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">
              More Resume Examples
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Link
                href="/frontend-developer-resume"
                className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-medium">Frontend Developer Resume</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Example and template for frontend engineers
                </p>
              </Link>
              <Link
                href="/backend-developer-resume-example"
                className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-medium">Backend Developer Resume</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Backend engineer resume example
                </p>
              </Link>
              <Link
                href="/entry-level-software-engineer-resume"
                className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-medium">Entry Level SWE Resume</h3>
                <p className="text-sm text-gray-400 mt-1">
                  For new grads and early career engineers
                </p>
              </Link>
              <Link
                href="/data-scientist-resume-example"
                className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-medium">Data Scientist Resume</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Data science and ML resume template
                </p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">
              Generate Your AI-Powered Software Engineer Resume
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Stop staring at a blank page. Our AI creates a professional,
              ATS-optimized software engineer resume from your experience in
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
