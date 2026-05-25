import type { SEOContent } from "@/components/seo/SEOPageTemplate";

export const coverLetterGeneratorContent: SEOContent = {
  resumeExample: {
    name: "Michael Park",
    contact: "michael.park@email.com | (555) 456-7890 | Seattle, WA | linkedin.com/in/michaelpark",
    sections: [
      {
        title: "Cover Letter Example",
        content: (
          <div className="text-gray-300 space-y-4 text-sm">
            <p>Dear Hiring Manager,</p>
            <p>
              I am excited to apply for the Senior Software Engineer position at
              TechCorp. With 6 years of experience building scalable web
              applications and leading engineering teams, I am confident I can
              make an immediate impact on your engineering organization.
            </p>
            <p>
              At my current role at StartupCo, I led the migration of a
              monolithic application to a microservices architecture, reducing
              deployment time by 80% and improving system reliability to 99.9%
              uptime. I also mentored 4 junior engineers and built an internal
              tooling platform that saved the team 100+ engineering hours per
              quarter.
            </p>
            <p>
              What draws me to TechCorp is your mission to democratize access to
              financial data. I have been following your recent work with
              real-time analytics and believe my experience with high-throughput
              data pipelines (500K+ events/second) aligns perfectly with your
              technical challenges.
            </p>
            <p>
              I would welcome the opportunity to discuss how my experience can
              contribute to TechCorp&apos;s continued growth. Thank you for your
              consideration.
            </p>
            <p>Sincerely,<br />Michael Park</p>
          </div>
        ),
      },
    ],
  },
  skillsGrid: [
    { category: "Structure", skills: "Opening Hook, Experience Summary, Company Research, Skills Match, Call to Action" },
    { category: "Personalization", skills: "Company Research, Role-Specific Details, Technology Alignment, Culture Fit" },
    { category: "Formatting", skills: "Professional Tone, Concise Paragraphs, Bullet Points, PDF Format" },
    { category: "Content Elements", skills: "Quantified Achievements, Relevant Skills, Industry Keywords, Enthusiasm" },
    { category: "Common Mistakes", skills: "Generic Openings, Repeating Resume, Too Long, Typos, No Customization" },
    { category: "AI Optimization", skills: "Keyword Matching, Tone Adjustment, Length Optimization, ATS Scanning" },
  ],
  tips: [
    { title: "Never Use a Generic Cover Letter", content: "Recruiters can spot a template from a mile away. Customize each cover letter for the specific company and role. Mention the company's recent projects, products, or challenges you find exciting." },
    { title: "Lead with Your Biggest Win", content: "Your opening paragraph should grab attention. Start with your most impressive, relevant achievement rather than 'I am writing to apply for...' Make it about what you can do for them." },
    { title: "Quantify Your Impact Everywhere", content: "Use numbers throughout: 'reduced costs by 30%,' 'managed a team of 12,', 'grew revenue from $2M to $5M.' Specific numbers make your achievements concrete and memorable." },
    { title: "Show You Did Your Research", content: "Dedicate a paragraph to why you want to work at THAT specific company. Reference their products, blog posts, recent news, or company values. This demonstrates genuine interest and initiative." },
    { title: "Keep It to One Page", content: "A cover letter should be 250-400 words — about 3-4 short paragraphs. Recruiters spend 10-20 seconds reading cover letters. Be concise, impactful, and end with a clear call to action." },
  ],
  atsTips: [
    { title: "Use Keywords from the Job Description", desc: "ATS systems scan cover letters just like resumes. Include key skills and qualifications mentioned in the job posting. If they ask for 'project management experience,' make sure that phrase appears naturally." },
    { title: "Save as PDF, Not DOCX", desc: "PDF is the most reliable format for ATS parsing. DOCX files can have formatting issues that cause parsing errors. Name your file professionally: 'FirstName_LastName_CoverLetter.pdf'." },
    { title: "Include Job-Specific Terminology", desc: "Use industry and role-specific terminology. For a software engineer role: 'agile development,' 'CI/CD,' 'microservices.' For marketing: 'ROI,' 'campaign optimization,' 'growth metrics.'" },
    { title: "Put Key Information in the First 200 Words", desc: "Some ATS systems truncate long cover letters. Include your most important qualifications, target role, and key skills in the first paragraph to ensure they're captured." },
  ],
};

export const coverLetterFAQ = [
  {
    question: "How long should a cover letter be?",
    answer: "A cover letter should be 250-400 words, or about 3-4 short paragraphs. Recruiters spend very little time reading cover letters, so every sentence must add value. Get straight to the point and make every word count.",
  },
  {
    question: "Do I really need a cover letter?",
    answer: "For most professional roles, yes. While some companies don't require them, a well-written cover letter can set you apart from candidates who skip it. It's especially important for career changers, entry-level applicants, and roles where you need to explain context (gaps, relocation, industry switch).",
  },
  {
    question: "What is the best format for a cover letter?",
    answer: "The standard format includes: your contact information, date, hiring manager's details, a salutation, 3-4 paragraphs (hook, experience, company research, close), and a professional sign-off. Save as PDF and name it 'YourName_CoverLetter.pdf'.",
  },
  {
    question: "Can AI write a good cover letter?",
    answer: "AI can generate a strong first draft, but you should always customize it. Our AI cover letter generator creates personalized, role-specific cover letters that you can refine. The key is feeding it good context about the company, role, and your relevant experience.",
  },
  {
    question: "Should I address the cover letter to a specific person?",
    answer: "Yes — addressing a specific person (the hiring manager or recruiter) significantly increases response rates. Check the job posting, LinkedIn, or company website to find the right name. If you can't find it, 'Dear Hiring Manager' or 'Dear [Team Name] Team' are acceptable alternatives.",
  },
];

export const coverLetterSEO: {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  intro: string;
  jobTitle: string;
  relatedSlugs: string[];
} = {
  slug: "cover-letter-generator",
  title: "AI Cover Letter Generator - Free, Fast & Personalized | AI Resume Builder",
  description: "Generate a professional cover letter in seconds with our free AI cover letter generator. Personalized for any role, ATS-friendly, and ready to download. No signup required.",
  ogTitle: "Free AI Cover Letter Generator (2026)",
  ogDescription: "Generate a personalized cover letter in seconds with AI. Free, no signup.",
  h1: "AI Cover Letter Generator: Write Professional Cover Letters in Seconds",
  intro: "Writing a cover letter from scratch is time-consuming and stressful. Our free AI cover letter generator creates a personalized, professional cover letter tailored to your experience and the specific role you're applying for — in under 30 seconds.",
  jobTitle: "Cover Letter",
  relatedSlugs: [
    "product-manager-cover-letter",
    "marketing-manager-cover-letter",
    "software-engineer-resume-example",
    "ai-cover-letter-generator",
  ],
};
