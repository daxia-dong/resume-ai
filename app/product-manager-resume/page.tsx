import { makeSEOMetadata } from "@/lib/seo-metadata";
import { getRelatedPages } from "@/lib/seo-pages";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import { productManagerContent, productManagerFAQ } from "@/lib/seo-data/product-manager-resume";

export const metadata = makeSEOMetadata({
  title: "Product Manager Resume Example - 2026 Template & Skills | AI Resume Builder",
  description: "A complete product manager resume example with strategy, analytics, and leadership skills. Learn how to craft a PM resume that gets interviews. Free AI resume builder included.",
  ogTitle: "Product Manager Resume Example & Template (2026)",
  ogDescription: "See a real product manager resume example with PM skills, experience, and ATS tips. Build yours free.",
});

const pageData = {
  slug: "product-manager-resume",
  title: "Product Manager Resume Example - 2026 Template & Skills",
  description: "A complete product manager resume example with strategy, analytics, and leadership skills.",
  ogTitle: "Product Manager Resume Example & Template (2026)",
  ogDescription: "See a real product manager resume example with PM skills, experience, and ATS tips.",
  h1: "Product Manager Resume Example: 2026 Template & Guide",
  intro: "Product management is one of the most competitive fields in tech. A strong PM resume needs to demonstrate strategic thinking, cross-functional leadership, data-driven decision making, and product delivery — all in one page. This guide breaks down exactly what recruiters and hiring managers look for.",
  jobTitle: "Product Manager",
  relatedSlugs: [
    "software-engineer-resume-example",
    "data-scientist-resume-example",
    "product-manager-cover-letter",
    "frontend-developer-resume-example",
  ],
};

export default function ProductManagerResumePage() {
  const related = getRelatedPages("product-manager-resume");
  return (
    <SEOPageTemplate
      page={pageData}
      content={productManagerContent}
      relatedPages={related}
      faqItems={productManagerFAQ}
    />
  );
}
