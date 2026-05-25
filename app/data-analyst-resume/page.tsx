import { makeSEOMetadata } from "@/lib/seo-metadata";
import { getRelatedPages } from "@/lib/seo-pages";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import { dataAnalystContent, dataAnalystFAQ } from "@/lib/seo-data/data-analyst-resume";

export const metadata = makeSEOMetadata({
  title: "Data Analyst Resume Example - 2026 Template & Skills | AI Resume Builder",
  description: "A complete data analyst resume example with SQL, Python, and Tableau skills. Learn what recruiters look for in a data analyst resume. Free AI resume builder included.",
  ogTitle: "Data Analyst Resume Example & Template (2026)",
  ogDescription: "See a real data analyst resume example. Build yours free with AI.",
});

const pageData = {
  slug: "data-analyst-resume",
  title: "Data Analyst Resume Example - 2026 Template & Skills",
  description: "A complete data analyst resume example with SQL, Python, and Tableau skills.",
  ogTitle: "Data Analyst Resume Example & Template (2026)",
  ogDescription: "See a real data analyst resume example. Build yours free with AI.",
  h1: "Data Analyst Resume Example: 2026 Template & Skills Guide",
  intro: "Data analysts are in high demand across every industry. A strong data analyst resume needs to demonstrate technical proficiency in SQL, Python, and visualization tools while showing how your insights drive real business decisions. This guide shows you exactly what works.",
  jobTitle: "Data Analyst",
  relatedSlugs: [
    "data-scientist-resume-example",
    "software-engineer-resume-example",
    "business-analyst-resume-example",
    "resume-keywords-for-tech-jobs",
  ],
};

export default function DataAnalystResumePage() {
  const related = getRelatedPages("data-analyst-resume");
  return (
    <SEOPageTemplate
      page={pageData}
      content={dataAnalystContent}
      relatedPages={related}
      faqItems={dataAnalystFAQ}
    />
  );
}
