export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function seoMetadata({
  title,
  description,
  ogTitle,
  ogDescription,
}: {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}) {
  return {
    title,
    description,
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
    },
  };
}
