# Google Search Console Setup Guide

## 1. 添加网站到 Search Console

1. 打开 https://search.google.com/search-console
2. 点击 "Add property" → 选择 "URL prefix"
3. 输入: `https://resume-ai-two-green.vercel.app`
4. 选择验证方式：

### 推荐：HTML tag 验证（最简单）
1. Search Console 会给你一段 `<meta>` 代码
2. 把这段代码加到 `app/layout.tsx` 的 `<head>` 中
3. 重新部署
4. 回到 Search Console 点击 "Verify"

### 或者：DNS 验证（Vercel 推荐）
1. 选择 "Domain" 而非 "URL prefix"
2. 输入你的域名（如果有自定义域名）
3. 在 DNS 配置中添加 TXT 记录

## 2. 提交 Sitemap

验证通过后：
1. 左侧菜单 → "Sitemaps"
2. 输入: `sitemap.xml`
3. 点击 Submit

## 3. 检查收录状态

- **URL Inspection**: 顶部搜索框输入 URL → 查看是否被索引
- **Pages**: 左侧 "Pages" → 查看哪些页面已收录
- **Request Indexing**: 在 URL Inspection 中点击 "Request Indexing"

## 4. 查看性能数据

- **Performance**: 左侧 "Performance" → 查看 Impressions / Clicks / CTR
- **Queries**: 哪些搜索词带来流量
- **Pages**: 哪些页面表现最好
- **Countries**: 哪些国家的用户最多

## 5. 最容易先拿排名的页面

按竞争度从低到高：
1. `resume-keywords-for-tech-jobs` — 长尾内容词，竞争低
2. `best-resume-format-2026` — 年份词，时效性高
3. `junior-software-engineer-resume` — 垂直词
4. `customer-service-resume-example` — 非技术词，竞争极低
5. `marketing-manager-cover-letter` — 非技术词

## 6. 每周检查项

- [ ] Search Console → 新收录页面数
- [ ] Search Console → Impressions 变化
- [ ] Search Console → 哪些页面获得首次点击
- [ ] 检查 Index Coverage 错误
- [ ] 提交新页面的 sitemap 更新
