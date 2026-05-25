# Roast My Resume — 传播钩子方案

## 核心逻辑

用户生成简历后 → 点 "Roast My Resume" → AI 生成毒舌点评 → 可分享截图

## 三层实现（由浅入深）

### Level 1: AI 毒舌点评（1-2天）
- 用户生成简历后，底部显示 "🔥 Roast My Resume" 按钮
- 调用 DeepSeek 生成一份毒舌点评，格式固定：

```
🔥 RESUME ROAST 🔥

Your summary is generic. 80% of engineers 
have the exact same opening paragraph.

You listed "React" but no real project 
impact. That's a red flag.

Your bullet points describe tasks, 
not achievements. Big difference.

ATS Score: 62/100 — Below average
```

- 点评内容结构化：Summary Critique → Skills Gap → Experience Issues → ATS Score
- 复制按钮 + 截图分享

### Level 2: 定制分享卡片（3-4天）
- 生成带样式的分享图（用 HTML2Canvas 或 Vercel OG Image）
- 卡片设计：
  - 顶部："🔥 My Resume Got ROASTED"
  - 中间：2-3 句最毒的点评
  - 底部：ATS Score 大字 + "Made with Resume AI"
- 一键下载为图片，天然传播

### Level 3: 排行榜（5-7天）
- 公开排行榜："Worst Resume of the Week" / "Most Roasted"
- 用户可选择匿名提交到排行榜
- 社交传播爆点
- 需加审核机制

## 技术方案

**Level 1 实现：**
```tsx
// components/RoastMyResume.tsx
// 1. 获取当前简历内容（resumeData）
// 2. 调用 API 路由: /api/roast-resume
// 3. 显示结果的卡片组件
// 4. 分享按钮（复制文本 + 截图）
```

**API 路由：**
```tsx
// app/api/roast-resume/route.ts
// POST: resumeData → DeepSeek → 结构化点评
// Prompt 要固定格式，确保输出一致性
```

**分享按钮：**
- 复制文本 → clipboard API
- 下载截图 → html-to-image (lightweight, 10KB)
- 直接分享 → Web Share API

## 传播路径

预期用户会截图发到：
- LinkedIn: "This AI roasted my resume 💀"
- Reddit r/resumes: "AI told me my resume sucks"
- Twitter/X: "My ATS score is 62 😭"
- 群聊分享

## CTA 优化

共享卡片必须包含：
1. URL 链接（可追踪）
2. "Built with Resume AI" branding
3. 诱人的 CTA："Want to get roasted? →"
