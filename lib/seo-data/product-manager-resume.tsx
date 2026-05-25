import type { SEOContent } from "@/components/seo/SEOPageTemplate";

export const productManagerContent: SEOContent = {
  resumeExample: {
    name: "Sarah Mitchell",
    contact: "sarah.mitchell@email.com | (555) 234-5678 | New York, NY | linkedin.com/in/sarahmitchell",
    sections: [
      {
        title: "Professional Summary",
        content: (
          <p className="text-gray-300">
            Results-driven product manager with 5+ years of experience leading
            cross-functional teams to deliver SaaS products serving 1M+ users.
            Expertise in product strategy, user research, data-driven decision
            making, and go-to-market execution. Successfully launched 4 major
            product lines generating $12M in annual recurring revenue.
          </p>
        ),
      },
      {
        title: "Technical Skills",
        content: (
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <div><span className="text-gray-500">Product:</span> Strategy, Roadmapping, OKRs, KPI Definition</div>
            <div><span className="text-gray-500">Analytics:</span> SQL, Mixpanel, Amplitude, Google Analytics</div>
            <div><span className="text-gray-500">User Research:</span> Interviews, Surveys, Usability Testing, Personas</div>
            <div><span className="text-gray-500">Tools:</span> Jira, Figma, Notion, Aha!, Productboard</div>
            <div><span className="text-gray-500">Technical:</span> API Design, A/B Testing, Agile/Scrum, SDLC</div>
            <div><span className="text-gray-500">Soft Skills:</span> Stakeholder Mgmt, Cross-functional Leadership, Presentation</div>
          </div>
        ),
      },
      {
        title: "Experience",
        content: (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Senior Product Manager</span>
                <span className="text-sm text-gray-500">2021 - Present</span>
              </div>
              <p className="text-sm text-gray-400">SaaSPlatform Inc., New York</p>
              <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Led product strategy for B2B analytics platform, growing ARR from $4M to $12M in 2 years</li>
                <li>Launched self-serve onboarding flow, reducing time-to-value from 14 days to 3 days</li>
                <li>Drove user research program with 200+ customer interviews, informing 3 major feature releases</li>
                <li>Managed roadmap across 3 engineering teams (15 engineers) using OKR framework</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Product Manager</span>
                <span className="text-sm text-gray-500">2019 - 2021</span>
              </div>
              <p className="text-sm text-gray-400">GrowthTech, San Francisco</p>
              <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Owned the user acquisition product vertical, improving conversion by 35% through A/B testing</li>
                <li>Defined and tracked 15+ product KPIs using SQL and Mixpanel dashboards</li>
                <li>Collaborated with design to ship a redesigned onboarding that increased activation by 28%</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Education",
        content: (
          <p className="text-gray-300">
            MBA, Stanford Graduate School of Business (2017 - 2019)<br />
            B.S. Computer Science, UC Berkeley (2013 - 2017)
          </p>
        ),
      },
    ],
  },
  skillsGrid: [
    { category: "Product Strategy", skills: "Product Roadmapping, OKRs, Go-to-Market, Competitive Analysis, Pricing Strategy" },
    { category: "Analytics & Data", skills: "SQL, Mixpanel, Amplitude, Google Analytics, A/B Testing, Cohort Analysis" },
    { category: "User Research", skills: "User Interviews, Surveys, Usability Testing, Persona Development, Journey Mapping" },
    { category: "Tools & Methods", skills: "Jira, Figma, Notion, Aha!, Productboard, Agile, Scrum, Lean" },
    { category: "Technical Knowledge", skills: "API Design, SDLC, Web Technologies, Mobile Apps, Data Pipelines" },
    { category: "Soft Skills", skills: "Stakeholder Management, Cross-functional Leadership, Storytelling, Negotiation" },
  ],
  tips: [
    { title: "Quantify Product Impact", content: "Product management is inherently measurable. Use metrics like revenue growth, user adoption rates, conversion improvements, and time-to-value reductions. Instead of 'improved the product,' say 'grew ARR from $4M to $12M through strategic feature prioritization.'" },
    { title: "Show End-to-End Ownership", content: "PM resumes should demonstrate you own the full product lifecycle — from discovery and strategy through development, launch, and iteration. Frame each experience as a complete story: the problem, your approach, the outcome." },
    { title: "Highlight Cross-Functional Leadership", content: "PMs lead without authority. Emphasize how you aligned engineering, design, marketing, and sales teams. Mention team sizes, stakeholder management, and how you drive consensus." },
    { title: "Use the Product Management Vocabulary", content: "Include terms like roadmap, prioritization, user stories, sprint planning, MVP, north star metric, OKRs, and product-market fit. These signal to recruiters that you speak the PM language fluently." },
    { title: "Include Technical Competence", content: "You don't need to be an engineer, but demonstrating technical literacy (SQL, API design, system architecture understanding) sets you apart from non-technical PMs." },
  ],
  atsTips: [
    { title: "Include PM-Specific Keywords", desc: "ATS systems scan for product management terminology like 'roadmap,' 'stakeholder management,' 'user research,' 'A/B testing,' 'OKRs,' and 'go-to-market.' Make sure these appear naturally in your experience bullets." },
    { title: "Show Metrics Everywhere", desc: "PM roles are metrics-driven. Every bullet point should include a number: revenue impacted, users affected, percentage improvements. ATS algorithms rank candidates higher with quantifiable results." },
    { title: "Standardize Section Headings", desc: "Use 'Experience,' 'Education,' 'Skills,' and 'Certifications.' ATS parsers struggle with creative headings like 'My Journey' or 'What I've Done.'" },
    { title: "Match Job Description Language", desc: "If the job description says 'cross-functional collaboration' and 'data-informed decisions,' use those exact phrases in your resume. ATS matching is keyword-based." },
  ],
};

export const productManagerFAQ = [
  {
    question: "What should a product manager resume include?",
    answer: "A product manager resume should include a professional summary, product management experience with measurable outcomes, technical skills (SQL, analytics tools), product management methodologies (Agile, Scrum), and education. Quantify every achievement with metrics like revenue, user growth, or conversion improvements.",
  },
  {
    question: "How long should a product manager resume be?",
    answer: "One page for PMs with less than 10 years of experience. Senior PMs and Directors may use two pages. Recruiters spend an average of 7 seconds scanning a resume, so every bullet must demonstrate impact quickly.",
  },
  {
    question: "What skills do product managers need?",
    answer: "Core PM skills include product strategy, user research, data analysis (SQL, A/B testing), roadmapping, stakeholder management, and cross-functional leadership. Technical literacy and familiarity with agile methodologies are also highly valued.",
  },
  {
    question: "How do I write a product manager resume with no PM experience?",
    answer: "Focus on transferable skills. Highlight any experience with cross-functional projects, user research, data analysis, or feature launches. Frame your experience in PM terms: instead of 'coordinated the team,' say 'led cross-functional initiative that resulted in X.' Include relevant certifications (CSPO, Pragmatic Institute).",
  },
  {
    question: "Should product managers include a skills section?",
    answer: "Yes. A dedicated skills section helps ATS systems quickly categorize your expertise. Include both hard skills (SQL, A/B testing, roadmapping tools) and soft skills (leadership, communication, stakeholder management).",
  },
];
