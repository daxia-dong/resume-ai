import type { Metadata } from "next";

export function makeSEOMetadata(opts: {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    openGraph: {
      title: opts.ogTitle,
      description: opts.ogDescription,
    },
  };
}
