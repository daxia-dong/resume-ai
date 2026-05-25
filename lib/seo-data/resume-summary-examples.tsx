import type { SEOContent } from "@/components/seo/SEOPageTemplate";

export const resumeSummaryContent: SEOContent = {
  resumeExample: {
    name: "Resume Summary Examples by Role",
    contact: "Use these examples as templates — customize with your own experience and metrics",
    sections: [
      {
        title: "Software Engineer Summary",
        content: (
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="italic">&ldquo;Senior software engineer with 6+ years of experience building scalable web applications and distributed systems. Proficient in TypeScript, Python, and Go. Led cross-functional teams delivering products serving 2M+ users. Passionate about clean architecture, test-driven development, and mentoring junior engineers.&rdquo;</p>
              <p className="text-xs text-gray-500 mt-2">✅ Best for: Senior Engineer, Tech Lead roles</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="italic">&ldquo;Full stack developer with 3 years of experience building modern web applications with React, Node.js, and PostgreSQL. Strong foundation in computer science fundamentals and agile development. Excited to contribute to high-impact projects in a collaborative environment.&rdquo;</p>
              <p className="text-xs text-gray-500 mt-2">✅ Best for: Mid-level Engineer roles</p>
            </div>
          </div>
        ),
      },
      {
        title: "Product Manager Summary",
        content: (
          <div className="bg-gray-800/50 p-4 rounded text-gray-300">
            <p className="italic">&ldquo;Results-driven product manager with 5+ years of experience leading cross-functional teams to deliver B2B SaaS products. Proven track record of growing ARR from $4M to $12M through strategic roadmapping and data-informed decision making. Expert in user research, A/B testing, and go-to-market strategy.&rdquo;</p>
            <p className="text-xs text-gray-500 mt-2">✅ Best for: Senior PM, Product Lead roles</p>
          </div>
        ),
      },
      {
        title: "Data Analyst Summary",
        content: (
          <div className="bg-gray-800/50 p-4 rounded text-gray-300">
            <p className="italic">&ldquo;Detail-oriented data analyst with 4+ years of experience transforming raw data into actionable business insights. Proficient in SQL, Python, Tableau, and statistical analysis. Track record of driving $2M+ in cost savings through data-driven recommendations. Passionate about using data to solve complex business problems.&rdquo;</p>
            <p className="text-xs text-gray-500 mt-2">✅ Best for: Data Analyst, Business Intelligence roles</p>
          </div>
        ),
      },
      {
        title: "Recent Graduate Summary",
        content: (
          <div className="bg-gray-800/50 p-4 rounded text-gray-300">
            <p className="italic">&ldquo;Computer Science graduate with strong fundamentals in data structures, algorithms, and full-stack development. Completed internships at two tech companies building React dashboards and REST APIs. Active open source contributor with 500+ GitHub contributions. Seeking an entry-level software engineering role.&rdquo;</p>
            <p className="text-xs text-gray-500 mt-2">✅ Best for: New Grad, Entry Level roles</p>
          </div>
        ),
      },
      {
        title: "Career Change Summary",
        content: (
          <div className="bg-gray-800/50 p-4 rounded text-gray-300">
            <p className="italic">&ldquo;Former marketing manager transitioning to product management with 4 years of experience in campaign strategy, data analysis, and cross-functional leadership. Completed Product School certification and led 2 successful product launches. Combining business acumen with technical product skills to drive user-centric solutions.&rdquo;</p>
            <p className="text-xs text-gray-500 mt-2">✅ Best for: Career Transition roles</p>
          </div>
        ),
      },
    ],
  },
  skillsGrid: [
    { category: "For Experienced Pros", skills: "Highlight years of experience, key achievements, leadership, and specific technologies. 2-3 sentences." },
    { category: "For Entry Level", skills: "Focus on education, projects, internships, and potential. Show enthusiasm and foundation." },
    { category: "For Career Changes", skills: "Bridge your past experience to the new field. Highlight transferable skills and relevant training." },
    { category: "For Executives", skills: "Emphasize strategic impact, revenue growth, team building, and industry vision. Keep it high-level." },
    { category: "For Freelancers", skills: "Showcase client results, project diversity, specialized expertise, and reliability metrics." },
    { category: "What to Avoid", skills: "Generic phrases ('hardworking,' 'team player'), first-person pronouns, irrelevant details, clichés." },
  ],
  tips: [
    { title: "Lead with Your Strongest Asset", content: "Your first sentence should be your most impressive qualification: years of experience in the field, a major achievement, or a unique combination of skills. Hook the reader immediately." },
    { title: "Customize for Every Application", content: "A generic summary is better than none, but a tailored summary significantly outperforms. Mention the specific role, company, or industry you're applying to. It takes 2 extra minutes and can double your response rate." },
    { title: "Include Relevant Keywords", content: "Your summary should contain 3-5 keywords from the job description. This helps both ATS systems and recruiters quickly match you to the role. Use the exact terminology the job posting uses." },
    { title: "Keep It to 2-4 Sentences Maximum", content: "A resume summary is not a biography. It's a 30-second pitch. Recruiters scan it in seconds — make every word earn its place. Cut adjectives, filler words, and obvious statements." },
    { title: "Show, Don't Just Tell", content: "Instead of 'strong leader,' say 'led a team of 8 engineers to ship 3 major products.' Instead of 'data-driven,' say 'used A/B testing to improve conversion by 22%.' Prove your claims with specifics." },
  ],
  atsTips: [
    { title: "Front-Load Keywords in the Summary", desc: "ATS systems weight the top of your resume more heavily. Include your most important skills and role-specific keywords in the first 2 sentences of your professional summary." },
    { title: "Use Standard Section Headings", desc: 'Use "Professional Summary" or "Summary" as your heading. Avoid creative alternatives like "About Me," "Profile," or "Who I Am" which may confuse ATS parsers.' },
    { title: "Mirror the Job Title Phrasing", desc: "If the job is 'Senior Software Engineer, Platform,' use those exact words in your summary. This signals to the ATS that you're a strong match for that specific role." },
    { title: "Avoid Tables and Columns in the Header", desc: "Keep your contact info and summary in a simple linear layout. complex multi-column header layouts often cause ATS parsing errors that lose your summary entirely." },
  ],
};

export const resumeSummaryFAQ = [
  {
    question: "What is a resume summary?",
    answer: "A resume summary is a 2-4 sentence paragraph at the top of your resume that summarizes your most relevant qualifications, experience, and skills. Its purpose is to quickly show recruiters and ATS systems that you're a strong match for the role.",
  },
  {
    question: "What is the difference between a resume summary and an objective?",
    answer: "A resume summary highlights your existing experience and qualifications (best for candidates with 2+ years of experience). A resume objective states your career goals and what you're looking for (best for entry-level candidates, career changers, or those with gaps in employment).",
  },
  {
    question: "Should I include a resume summary?",
    answer: "Yes, if you have 2+ years of relevant experience. A well-written summary increases your resume's effectiveness by quickly communicating your value proposition. For entry-level candidates, a career objective may be more appropriate than a summary.",
  },
  {
    question: "How long should a resume summary be?",
    answer: "2-4 sentences, or about 50-80 words. It should be concise enough to read in 10 seconds but substantive enough to communicate your key qualifications and career narrative.",
  },
  {
    question: "Can AI write my resume summary?",
    answer: "Absolutely. Our AI resume builder analyzes your experience and generates a professional summary optimized for the specific role you're applying for. It ensures proper keyword inclusion for ATS systems while maintaining a natural, professional tone.",
  },
];
