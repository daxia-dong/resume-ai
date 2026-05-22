import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/sign-in/", "/sign-up/"],
    },
    sitemap: "https://resume-ai-two-green.vercel.app/sitemap.xml",
  };
}
