import { seoMetadata, faqSchema } from "@/lib/seo-utils";
import { seoPages } from "@/lib/seo-pages";
import { FAQSection } from "@/components/seo/FAQSection";
import { CTASection } from "@/components/seo/CTASection";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { SkillsGrid } from "@/components/seo/SkillsGrid";
import Link from "next/link";

const page = seoPages.find(p => p.slug === "frontend-developer-resume-example")!;

export const metadata = seoMetadata({
  title: page.title,
  description: page.description,
  ogTitle: page.ogTitle,
  ogDescription: page.ogDescription,
});

const faqItems = [
  { question: "What skills should a frontend developer put on their resume?", answer: "List technical skills relevant to the role: JavaScript/TypeScript, React or Vue.js, CSS/TailwindCSS, build tools (Webpack, Vite), testing (Jest, Playwright), and version control (Git). Also include design collaboration tools like Figma and any backend experience with Node.js." },
  { question: "How do I showcase frontend projects on my resume?", answer: "Include 2-3 significant projects with links to live demos and GitHub repos. Describe the tech stack, your role, and the impact (e.g., 'Built a real-time dashboard serving 10K+ users with React and WebSockets'). For each project, mention specific challenges you solved." },
  { question: "Should I include design skills on a frontend resume?", answer: "Yes. Frontend developers who understand design principles are highly valued. Mention familiarity with Figma, responsive design, accessibility (WCAG), design systems, and UI/UX best practices. Even basic design skills differentiate you from pure coders." },
  { question: "How important is the portfolio for frontend developers?", answer: "Very important. Unlike backend roles, frontend developers are expected to have a portfolio of work. Include a link to your personal website, GitHub, CodePen, or deployed projects. Make sure your portfolio itself demonstrates your frontend skills." },
  { question: "What's the ideal length for a frontend developer resume?", answer: "One page for junior to mid-level (under 8 years), two pages maximum for senior roles. Frontend hiring managers scan quickly — keep each bullet concise and focused on impact rather than responsibilities." },
  { question: "Should I list certifications on my frontend resume?", answer: "Only if they are directly relevant. Certifications from freeCodeCamp, Meta Frontend Developer, Google UX Design, or AWS can help, especially for career changers. For experienced developers, real-world projects and work experience matter more." },
];

export default function FrontendDevResumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} />
      <div className="min-h-screen bg-black text-white">
        <article className="max-w-3xl mx-auto p-8">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Frontend Developer Resume Example</span>
          </nav>
          <h1 className="text-4xl font-bold leading-tight">{page.h1}</h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">{page.intro}</p>
          <div className="mt-8">
            <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Generate Your AI-Powered Resume →
            </Link>
          </div>

          {/* Resume Example */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Frontend Developer Resume Example</h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold">Sarah Kim</h3>
              <p className="text-sm text-gray-400 mt-1">sarah.kim@email.com | (555) 234-5678 | New York, NY | github.com/sarahkim | sarahkim.dev</p>
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Professional Summary</h4>
                <p className="text-gray-300">Senior frontend developer with 5+ years of experience building performant, accessible web applications. Expert in React, TypeScript, and modern CSS. Passionate about design systems, web performance, and creating delightful user experiences. Led frontend architecture for products serving 1M+ monthly active users.</p>
              </div>
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Technical Skills</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div><span className="text-gray-500">Languages:</span> TypeScript, JavaScript, HTML5, CSS3, SQL</div>
                  <div><span className="text-gray-500">Frameworks:</span> React, Next.js, Vue.js, TailwindCSS</div>
                  <div><span className="text-gray-500">Testing:</span> Jest, Playwright, Cypress, Vitest</div>
                  <div><span className="text-gray-500">Tools:</span> Webpack, Vite, Git, Figma, Storybook</div>
                  <div><span className="text-gray-500">Backend:</span> Node.js, Express, REST APIs, GraphQL</div>
                  <div><span className="text-gray-500">Concepts:</span> Web Performance, Accessibility (WCAG), SSR, PWA, Responsive Design</div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Experience</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between"><span className="font-medium">Senior Frontend Developer</span><span className="text-sm text-gray-500">2021 - Present</span></div>
                    <p className="text-sm text-gray-400">WebApp Co, New York</p>
                    <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                      <li>Led redesign of main product UI using React and TypeScript, improving Lighthouse performance score from 45 to 92</li>
                      <li>Built shared component library adopted by 4 product teams, reducing development time by 40%</li>
                      <li>Implemented comprehensive E2E testing with Playwright, achieving 95% test coverage on critical user flows</li>
                      <li>Mentored 3 junior developers through code reviews, pair programming, and frontend guild sessions</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between"><span className="font-medium">Frontend Developer</span><span className="text-sm text-gray-500">2019 - 2021</span></div>
                    <p className="text-sm text-gray-400">StartupXYZ, Remote</p>
                    <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                      <li>Built customer dashboard with Vue.js and TailwindCSS, serving 50K+ monthly users</li>
                      <li>Reduced page load time by 60% through code splitting, lazy loading, and image optimization</li>
                      <li>Implemented WCAG 2.1 AA accessibility standards, making the product usable for all users</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Education</h4>
                <p className="text-gray-300">B.S. Computer Science, Columbia University (2015 - 2019)</p>
              </div>
            </div>
          </section>

          <SkillsGrid jobTitle={page.jobTitle} />

          {/* Tips */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Frontend Developer Resume Tips</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <div><h3 className="text-lg font-semibold text-white">1. Showcase Performance Metrics</h3><p className="mt-1">Frontend hiring managers love numbers. Instead of &quot;improved page speed,&quot; say &quot;reduced Largest Contentful Paint from 4.2s to 1.1s.&quot; Use real metrics like Lighthouse scores, bundle size reductions, and time-to-interactive improvements.</p></div>
              <div><h3 className="text-lg font-semibold text-white">2. Demonstrate Accessibility Knowledge</h3><p className="mt-1">Accessibility is increasingly important in frontend roles. Mention WCAG compliance, ARIA attributes, keyboard navigation, screen reader testing, and any accessibility audits you have contributed to.</p></div>
              <div><h3 className="text-lg font-semibold text-white">3. Link to Live Projects</h3><p className="mt-1">Every frontend resume should include links to live, working projects. A GitHub repo is good, but a deployed, interactive demo is better. Make sure your personal website and portfolio are polished.</p></div>
              <div><h3 className="text-lg font-semibold text-white">4. Highlight Collaboration with Design</h3><p className="mt-1">Frontend developers sit at the intersection of engineering and design. Mention experience working with design systems, Figma handoff, design reviews, and bridging the gap between design and implementation.</p></div>
            </div>
          </section>

          {/* ATS */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">ATS Optimization for Frontend Developer Resumes</h2>
            <p className="text-gray-400 leading-relaxed">Applicant Tracking Systems scan resumes for specific keywords. For frontend roles, make sure your resume includes modern framework names (React, Vue, Angular), build tools (Webpack, Vite), testing frameworks (Jest, Playwright), and relevant concepts (responsive design, accessibility, web performance). Use our free ATS resume checker to see how your resume scores.</p>
          </section>

          <RelatedLinks currentSlug={page.slug} />
          <CTASection heading="Generate Your AI-Powered Frontend Developer Resume" />
          <FAQSection items={faqItems} />
        </article>
      </div>
    </>
  );
}
