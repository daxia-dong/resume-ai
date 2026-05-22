# AI Resume Builder — SEO Expansion Plan

> 主方向切换：SEO 长尾流量 → Google 收录 → 自然流量 → Stripe 转化
> 
> 线上地址: https://resume-ai-two-green.vercel.app

---

## 第一部分：30 个 SEO 长尾页面规划

### 优先级 Tier 1（最容易收录 + 最低竞争 + 最容易转化）

| # | keyword | page type | intent | difficulty | why it matters |
|---|---------|-----------|--------|------------|----------------|
| 1 | software engineer resume example | Landing Page | Commercial | Low | 最热门职业，搜索量大但模板页竞争低 |
| 2 | frontend developer resume | Landing Page | Commercial | Low | 前端开发者基数大，长尾关键词易排 |
| 3 | backend developer resume example | Landing Page | Commercial | Low | 后端人群精准，转化率高 |
| 4 | entry level software engineer resume | Landing Page | Informational | Low | 应届生痛点强，付费意愿高 |
| 5 | ai resume generator free | Blog / LP | Commercial | Med | 产品核心词，SEO 锚点 |
| 6 | ats friendly resume checker | Tool Page | Commercial | Low | ATS 兼容性检查是刚需 |
| 7 | product manager cover letter | Landing Page | Commercial | Low | PM 垂直词，竞争小 |
| 8 | data scientist resume example | Landing Page | Commercial | Low | 数据科学赛道精准 |
| 9 | resume keywords for tech jobs | Blog | Informational | Low | 长尾内容词，易收录 |
| 10 | software engineer cover letter | Landing Page | Commercial | Low | 求职信垂直场景 |

### 优先级 Tier 2

| # | keyword | page type | intent | difficulty | why it matters |
|---|---------|-----------|--------|------------|----------------|
| 11 | full stack developer resume | Landing Page | Commercial | Low | 全栈人群大 |
| 12 | devops engineer resume example | Landing Page | Commercial | Low | DevOps 垂直 |
| 13 | machine learning engineer resume | Landing Page | Commercial | Low | ML 工程师高价用户 |
| 14 | react developer resume | Landing Page | Commercial | Low | React 生态大 |
| 15 | python developer resume | Landing Page | Commercial | Low | Python 最热语言 |
| 16 | project manager resume summary | Blog | Informational | Low | resume summary 长尾 |
| 17 | software developer cover letter examples | Landing Page | Commercial | Med | 求职信需求大 |
| 18 | remote job resume template | Landing Page | Commercial | Med | 远程工作趋势 |
| 19 | resume bullet point examples | Blog | Informational | Low | 高搜索量内容词 |
| 20 | technical skills for resume | Blog | Informational | Low | 技能关键词 |

### 优先级 Tier 3（批量扩充池）

| # | keyword | page type | intent | difficulty | why it matters |
|---|---------|-----------|--------|------------|----------------|
| 21 | cybersecurity resume example | Landing Page | Commercial | Low | 安全方向垂直 |
| 22 | cloud engineer resume | Landing Page | Commercial | Low | 云计算赛道 |
| 23 | ios developer resume example | Landing Page | Commercial | Low | iOS 开发者 |
| 24 | ux designer resume | Landing Page | Commercial | Low | UX 设计垂直 |
| 25 | sql developer resume | Landing Page | Commercial | Low | SQL 技术词 |
| 26 | career change resume example | Blog / LP | Informational | Low | 转行人群痛点 |
| 27 | resume objective for software engineer | Blog | Informational | Low | resume objective 词 |
| 28 | how to list certifications on resume | Blog | Informational | Low | 内容词 |
| 29 | fresher resume for it jobs | Landing Page | Commercial | Low | 印度/东南亚市场 |
| 30 | ats score resume checker free | Tool Page | Commercial | Med | ATS 工具词 |

---

## 第二部分：页面结构模板

### 可复用 SEO Landing Page 模板（Next.js App Router）

```tsx
// app/[keyword]/page.tsx
import type { Metadata } from 'next'
import FaqSection from '@/components/FaqSection'
import CTASection from '@/components/CTASection'
import ResumeBuilder from '@/components/ResumeBuilder'

interface SEOProps {
  params: { keyword: string }
}

export async function generateMetadata({ params }: SEOProps): Promise<Metadata> {
  const data = await getPageData(params.keyword)
  return {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
    }
  }
}

export default async function SEOPage({ params }: SEOProps) {
  const data = await getPageData(params.keyword)
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* H1 */}
      <h1 className="text-4xl font-bold mb-6">{data.h1}</h1>
      
      {/* Introduction */}
      <section className="prose lg:prose-lg mb-8">
        <p>{data.introduction}</p>
      </section>
      
      {/* Keyword Sections */}
      {data.sections.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: section.content }} />
        </section>
      ))}
      
      {/* CTA: Resume Builder */}
      <CTASection keyword={params.keyword} />
      
      {/* Resume Builder Embed */}
      <ResumeBuilder keyword={params.keyword} />
      
      {/* FAQ with Schema */}
      <FaqSection items={data.faq} />
    </article>
  )
}
```

### FAQ Schema 组件

```tsx
// components/FaqSection.tsx
export default function FaqSection({ items }: { items: FaqItem[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mt-12">
        <h2>Frequently Asked Questions</h2>
        {items.map((item, i) => (
          <details key={i} className="mb-4">
            <summary className="font-medium cursor-pointer">{item.question}</summary>
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </section>
    </>
  )
}
```

### SEO Meta Requirements Per Page

| Field | Requirement | Character Limit |
|-------|-------------|-----------------|
| Title | keyword + " | Example & Template" | 60 chars |
| Meta Description | Action-oriented, includes keyword, has CTA | 155 chars |
| H1 | Includes keyword + benefit | 70 chars |
| URL | /keyword-slug | lowercase, hyphens |

---

## 第三部分：项目目录规划

```
app/
├── [slug]/                          # SEO landing pages (catch-all)
│   └── page.tsx                     # Dynamic SEO page
├── blog/
│   └── [slug]/
│       └── page.tsx                 # Blog content pages
├── templates/
│   └── [slug]/
│       └── page.tsx                 # Resume templates showcase
├── resume-builder/
│   ├── page.tsx                     # Main builder
│   └── result/
│       └── page.tsx                 # Generated result
├── cover-letter/
│   └── page.tsx                     # Cover letter builder
├── ats-checker/
│   └── page.tsx                     # ATS score tool
├── layout.tsx
└── page.tsx                         # Homepage

lib/
├── seo/
│   ├── pages.ts                     # SEO page data (30+ pages)
│   ├── templates.ts                 # Content templates
│   └── generator.ts                 # AI content generation
├── resume/
│   ├── builder.ts
│   └── ats.ts
└── utils/
    └── seo-utils.ts                 # Slugify, meta helpers

components/
├── CTASection.tsx
├── FaqSection.tsx
├── ResumeBuilder.tsx
├── SeoContent.tsx
└── ...
```

**路由策略：**
- `app/[slug]/page.tsx` 作为 catch-all SEO 页面路由
- 在 `lib/seo/pages.ts` 中维护所有 SEO page 的数据映射
- `generateStaticParams()` 预生成静态页面，提升 SEO 性能
- Blog 和 Templates 路由分开，避免冲突

---

## 第四部分：自动化生成方案

### 架构设计

```
User Input (keyword, job title, industry)
        │
        ▼
lib/seo/generator.ts (DeepSeek API)
        │
        ├── Generate SEO title + meta description
        ├── Generate article content (sections)
        ├── Generate FAQ items
        └── Return structured data
        │
        ▼
Page Component (renders structured data)
        │
        ▼
Static HTML (Next.js SSG / ISR)
```

### 批量生成脚本

```typescript
// scripts/generate-seo-pages.ts
import { generateSEOPage } from '@/lib/seo/generator'
import { seoPages } from '@/lib/seo/pages'
import fs from 'fs'

async function batchGenerate() {
  for (const page of seoPages) {
    const content = await generateSEOPage({
      keyword: page.keyword,
      jobTitle: page.jobTitle,
      industry: page.industry,
      intent: page.intent,
      pageType: page.pageType,
    })
    
    // Save to data file
    fs.writeFileSync(
      `data/seo/${page.slug}.json`,
      JSON.stringify(content, null, 2)
    )
  }
}
```

### DeepSeek Prompt Template

```
You are an SEO content writer for a resume builder SaaS.
Write content for a page targeting the keyword: "${keyword}"

Requirements:
- Tone: professional, helpful, action-oriented
- Include real examples and data points
- Natural keyword placement (don't over-optimize)
- Convert readers to try the resume builder
- Output in JSON format with: title, metaDescription, h1, introduction, sections[], faq[]
```

### 轻量化策略（先不做数据库）

1. Page data stored as JSON files in `data/seo/`
2. Next.js reads at build time via `getStaticProps` / `generateStaticParams`
3. AI generates content → writes to JSON → commit → deploy
4. 后期接数据库：只需要把 JSON → API endpoint 即可

---

## 第五部分：优先级路线图

### 第一阶段：快速收拢低垂果实（本周）

| 优先级 | 页面 | 预期收录时间 | 预估流量潜力 |
|--------|------|-------------|-------------|
| P0 | software engineer resume example | 1-2 周 | 高 |
| P0 | frontend developer resume | 1-2 周 | 高 |
| P0 | entry level software engineer resume | 1-2 周 | 高 |
| P0 | product manager cover letter | 1-2 周 | 中 |
| P0 | data scientist resume example | 1-2 周 | 中 |
| P1 | backend developer resume example | 2-3 周 | 中 |
| P1 | ats friendly resume checker | 2-3 周 | 高 |
| P1 | software engineer cover letter | 2-3 周 | 中 |
| P1 | resume keywords for tech jobs (blog) | 1-2 周 | 中 |
| P1 | software developer cover letter examples | 2-3 周 | 中 |

### 第二阶段：扩充覆盖面（下两周）

P2 页面 11-20，批量生成 + 上线

### 第三阶段：内容矩阵（第三周起）

P3 页面 21-30 + 持续根据 Google Search Console 数据优化

### 执行节奏

```
每周一：  用 DeepSeek 批量生成 5 个页面的内容
每周二：  审查 + 微调 AI 生成内容
每周三：  部署上线 + 提交 Google Search Console
每周四：  检查收录 + 调整内容
每周五：  复盘关键词排名 + 规划下周
```

### 成功指标

| 指标 | 第一月目标 | 第三月目标 |
|------|-----------|-----------|
| 收录页面数 | 20+ | 50+ |
| 日均自然搜索点击 | 50+ | 500+ |
| 日均新用户注册 | 5+ | 50+ |
| Stripe 转化 | 2+/月 | 20+/月 |

---

> 下一步：确认这个方案后，我开始搭建 SEO 页面模板 + 第一个软件工程师简历页面。
