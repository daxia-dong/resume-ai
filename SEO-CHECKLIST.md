# SEO Health Checklist

## Metadata

- [x] Every page has unique `<title>` (60 chars max)
- [x] Every page has `<meta name="description">` (155 chars max)
- [x] No duplicate titles
- [x] No duplicate descriptions
- [x] `generateMetadata` used for all SEO pages

## Structure

- [x] Every page has one `<h1>`
- [x] Semantic HTML (`<article>`, `<section>`, `<nav>`)
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Breadcrumb navigation present

## Schema

- [x] FAQPage JSON-LD on all SEO pages
- [ ] HowTo schema for tutorial-style pages
- [ ] Product schema for homepage
- [ ] BreadcrumbList schema

## Technical

- [x] robots.txt allows Google crawling
- [x] sitemap.xml submitted and accessible
- [x] All pages return 200 (not 404 or 500)
- [x] SSG (pre-rendered static HTML)
- [x] No broken internal links
- [x] Canonical URLs (Next.js default)
- [ ] Custom domain configured (optional)

## Performance

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] Lazy loading implemented

## Indexing

- [ ] Submitted to Google Search Console
- [ ] Sitemap submitted in GSC
- [ ] First pages indexed by Google
- [ ] No indexing errors in GSC

## Next Actions

| Priority | Action | Status |
|----------|--------|--------|
| P0 | Submit sitemap to Google Search Console | ⏳ |
| P0 | Manual request indexing for top 5 pages | ⏳ |
| P1 | Add custom domain (resumebuilder.com etc.) | ❌ |
| P1 | Add HowTo schema to tutorial pages | ❌ |
| P2 | Add BreadcrumbList schema | ❌ |
| P2 | Add open graph images | ❌ |
| P3 | Google Analytics / Vercel Analytics | ❌ |
