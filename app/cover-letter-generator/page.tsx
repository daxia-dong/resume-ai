import { makeSEOMetadata } from "@/lib/seo-metadata";
import { getRelatedPages } from "@/lib/seo-pages";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import { coverLetterGeneratorContent, coverLetterFAQ, coverLetterSEO } from "@/lib/seo-data/cover-letter-generator";

export const metadata = makeSEOMetadata({
  title: coverLetterSEO.title,
  description: coverLetterSEO.description,
  ogTitle: coverLetterSEO.ogTitle,
  ogDescription: coverLetterSEO.ogDescription,
});

const pageData = {
  slug: coverLetterSEO.slug,
  title: coverLetterSEO.title,
  description: coverLetterSEO.description,
  ogTitle: coverLetterSEO.ogTitle,
  ogDescription: coverLetterSEO.ogDescription,
  h1: coverLetterSEO.h1,
  intro: coverLetterSEO.intro,
  jobTitle: coverLetterSEO.jobTitle,
  relatedSlugs: coverLetterSEO.relatedSlugs,
};

export default function CoverLetterGeneratorPage() {
  const related = getRelatedPages("cover-letter-generator");
  return (
    <SEOPageTemplate
      page={pageData}
      content={coverLetterGeneratorContent}
      relatedPages={related}
      faqItems={coverLetterFAQ}
    />
  );
}
