import Link from "next/link";
import { use } from "react";
import { getRelatedPages, getSEOPage } from "@/lib/seo-pages";

export function RelatedLinks({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPages(currentSlug);
  if (related.length === 0) return null;

  // Get more pages for cross-linking (include current page's related + additional)
  const currentPage = getSEOPage(currentSlug);
  
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">
        More Resume Examples & Guides
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {related.map((page) => (
          <Link
            key={page.slug}
            href={`/${page.slug}`}
            className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <h3 className="font-medium">{page.h1.replace(/:.*$/, "")}</h3>
            <p className="text-sm text-gray-400 mt-1">{page.description.slice(0, 80)}...</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
