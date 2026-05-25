import type { SEOContent } from "@/components/seo/SEOPageTemplate";

export const dataAnalystContent: SEOContent = {
  resumeExample: {
    name: "Jessica Wong",
    contact: "jessica.wong@email.com | (555) 345-6789 | Chicago, IL | linkedin.com/in/jessicawong",
    sections: [
      {
        title: "Professional Summary",
        content: (
          <p className="text-gray-300">
            Detail-oriented data analyst with 4+ years of experience transforming
            raw data into actionable business insights. Proficient in SQL, Python,
            Tableau, and statistical analysis. Track record of driving $2M+ in
            cost savings and revenue growth through data-driven recommendations
            across marketing, operations, and product teams.
          </p>
        ),
      },
      {
        title: "Technical Skills",
        content: (
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <div><span className="text-gray-500">Languages:</span> SQL, Python, R, DAX</div>
            <div><span className="text-gray-500">Visualization:</span> Tableau, Power BI, Looker, Matplotlib</div>
            <div><span className="text-gray-500">Data Tools:</span> Excel, Google Sheets, Snowflake, BigQuery</div>
            <div><span className="text-gray-500">Statistics:</span> Hypothesis Testing, Regression, A/B Testing, Clustering</div>
            <div><span className="text-gray-500">ETL & Workflow:</span> Airflow, dbt, Alteryx, Apache Spark</div>
            <div><span className="text-gray-500">Soft Skills:</span> Storytelling, Stakeholder Management, Presentation, Critical Thinking</div>
          </div>
        ),
      },
      {
        title: "Experience",
        content: (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Data Analyst</span>
                <span className="text-sm text-gray-500">2021 - Present</span>
              </div>
              <p className="text-sm text-gray-400">DataDriven Corp., Chicago</p>
              <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Built automated Tableau dashboards tracking 50+ KPIs across 4 departments, saving 20 hours/week of manual reporting</li>
                <li>Identified $800K in annual cost savings through supply chain data analysis and vendor optimization</li>
                <li>Led A/B testing program that improved marketing campaign conversion by 22% through data-driven targeting</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Junior Data Analyst</span>
                <span className="text-sm text-gray-500">2019 - 2021</span>
              </div>
              <p className="text-sm text-gray-400">InsightLab, Remote</p>
              <ul className="mt-2 text-sm text-gray-300 list-disc pl-5 space-y-1">
                <li>Wrote complex SQL queries analyzing 10M+ rows of user behavior data for product team</li>
                <li>Created weekly executive dashboards in Tableau, presenting insights to C-suite stakeholders</li>
                <li>Developed Python scripts automating data cleaning and validation, reducing errors by 95%</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Education",
        content: (
          <p className="text-gray-300">
            B.S. Statistics, University of Michigan (2015 - 2019)<br />
            Google Data Analytics Professional Certificate
          </p>
        ),
      },
    ],
  },
  skillsGrid: [
    { category: "SQL & Databases", skills: "SQL, PostgreSQL, MySQL, BigQuery, Snowflake, Redshift" },
    { category: "Programming", skills: "Python (Pandas, NumPy, Scikit-learn), R, DAX" },
    { category: "Visualization", skills: "Tableau, Power BI, Looker, Google Data Studio, Matplotlib, Seaborn" },
    { category: "Statistical Analysis", skills: "Hypothesis Testing, Regression, A/B Testing, Time Series, Clustering" },
    { category: "Data Tools", skills: "Excel, Google Sheets, Airflow, dbt, Alteryx, Spark" },
    { category: "Soft Skills", skills: "Data Storytelling, Stakeholder Communication, Critical Thinking, Presentation" },
  ],
  tips: [
    { title: "Quantify Everything", content: "Data analysts are measured by impact. Every bullet point should include a number: 'reduced reporting time by 20 hours/week,' 'identified $800K in savings,' 'improved conversion by 22%.' Numbers prove your value." },
    { title: "Show the Full Analysis Pipeline", content: "Demonstrate you can handle the end-to-end analytics workflow: data extraction (SQL), transformation (Python/Excel), analysis (statistics), and communication (dashboards/presentations)." },
    { title: "Include Domain Knowledge", content: "Whether it's marketing, finance, operations, or product analytics, showing domain expertise makes you stand out. Tailor your examples to the industry you're applying for." },
    { title: "Highlight Communication Skills", content: "Data without insights is just numbers. Emphasize how you presented findings to stakeholders and influenced business decisions. This is what separates senior analysts from junior ones." },
    { title: "List Tools You Actually Know", content: "Be specific about tool proficiency. Instead of just 'SQL,' mention 'Advanced SQL (CTEs, window functions, query optimization).' Instead of 'Tableau,' say 'Tableau (calculated fields, LOD expressions, dashboard design).'" },
  ],
  atsTips: [
    { title: "Use Analytics Keywords", desc: "Include terms like 'SQL,' 'Python,' 'Tableau,' 'A/B testing,' 'statistical analysis,' 'data visualization,' 'KPI tracking,' and 'business intelligence.' These are the keywords ATS systems prioritize for data analyst roles." },
    { title: "List Specific Tools", desc: "ATS systems match against tool names. List specific tools like 'BigQuery,' 'Snowflake,' 'Looker,' 'Power BI,' 'Airflow,' not just generic categories." },
    { title: "Show Both Technical and Business Impact", desc: "The best data analyst resumes combine technical skills with business outcomes. 'Used Python to build an automated reporting pipeline that saved 20 hrs/week' beats 'Proficient in Python.'" },
    { title: "Include Certifications", desc: "Certifications like Google Data Analytics Professional Certificate, Tableau Desktop Specialist, or AWS Data Analytics are highly scannable by ATS systems." },
  ],
};

export const dataAnalystFAQ = [
  {
    question: "What should a data analyst resume include?",
    answer: "A data analyst resume should include a professional summary, technical skills (SQL, Python, Tableau, Excel), work experience with quantifiable outcomes, education, and certifications. Each experience should demonstrate the full analysis pipeline: data collection, cleaning, analysis, and communication of insights.",
  },
  {
    question: "What are the most important skills for a data analyst?",
    answer: "SQL is the most important technical skill for data analysts — you'll use it daily. Python/R for data manipulation, a BI tool (Tableau, Power BI, Looker), and statistical knowledge are also essential. Soft skills like data storytelling and stakeholder communication separate great analysts from good ones.",
  },
  {
    question: "How do I make a data analyst resume stand out?",
    answer: "Quantify your impact with specific metrics. Show you can work across the full analytics lifecycle. Include business context — don't just list technical skills, demonstrate how your analysis drove real business decisions. Use a clean, single-column format that's ATS-friendly.",
  },
  {
    question: "Should data analysts include a portfolio?",
    answer: "Yes. A link to a GitHub portfolio with analysis projects, a Tableau Public profile, or a personal website with case studies significantly strengthens your application. Include 3-5 projects that demonstrate different skills (SQL, Python, visualization, statistical analysis).",
  },
  {
    question: "How many years of experience do I need for a data analyst role?",
    answer: "Entry-level data analyst roles typically require 0-2 years of experience. Junior roles: 1-3 years. Mid-level: 3-5 years. Senior: 5+ years. However, relevant coursework, certifications, and portfolio projects can substitute for experience in entry-level positions.",
  },
];
