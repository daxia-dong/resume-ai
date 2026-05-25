import { makeSEOMetadata } from "@/lib/seo-metadata";
import { getRelatedPages } from "@/lib/seo-pages";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import { resumeSummaryContent, resumeSummaryFAQ } from "@/lib/seo-data/resume-summary-examples";

export const metadata = makeSEOMetadata({
  title: "Resume Summary Examples - 2026 Guide & Templates | AI Resume Builder",
  description: "50+ professional resume summary examples for software engineers, product managers, data analysts, and more. Learn how to write a resume summary that gets interviews. Free AI builder.",
  ogTitle: "Resume Summary Examples - 50+ Templates (2026)",
  ogDescription: "Professional resume summary examples for every role. Write yours with AI.",
});

const pageData = {
  slug: "resume-summary-examples",
  title: "Resume Summary Examples - 2026 Guide & Templates",
  description: "50+ professional resume summary examples for every role.",
  ogTitle: "Resume Summary Examples - 50+ Templates (2026)",
  ogDescription: "Professional resume summary examples for every role. Write yours with AI.",
  h1: "Resume Summary Examples: 50+ Professional Templates for 2026",
  intro: "Your resume summary is the first thing recruiters read — and often the only thing they remember. A strong summary can double your interview callback rate. This guide includes resume summary examples for software engineers, product managers, data analysts, recent graduates, and career changers.",
  jobTitle: "Resume Summary",
  relatedSlugs: [
    "software-engineer-resume-example",
    "product-manager-resume",
    "data-analyst-resume",
    "best-resume-format-2026",
  ],
};

export default function ResumeSummaryExamplesPage() {
  const related = getRelatedPages("resume-summary-examples");
  return (
    <SEOPageTemplate
      page={pageData}
      content={resumeSummaryContent}
      relatedPages={related}
      faqItems={resumeSummaryFAQ}
    />
  );
}
