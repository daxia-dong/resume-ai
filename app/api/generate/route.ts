import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const FREE_LIMIT = 1;

// 全局内存计数（开发版，重启即重置）
declare global {
  var __usage: Record<string, number>;
}
globalThis.__usage = globalThis.__usage || {};

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    // 未登录 → 阻止
    if (!userId) {
      return NextResponse.json(
        { error: "Please sign in to use the generator" },
        { status: 401 }
      );
    }

    const { jobTitle, experience, skills } = await req.json();

    // TODO: 后面从 Supabase 读取真实 plan
    const isPro = false;

    // 使用计数
    const usage = globalThis.__usage[userId] || 0;

    // free 用户超限
    if (!isPro && usage >= FREE_LIMIT) {
      return NextResponse.json(
        {
          text: "",
          error: "Free limit reached. Please upgrade to Pro for unlimited generations.",
          limitReached: true,
        },
        { status: 403 }
      );
    }

    const prompt = `
You are an expert resume writer.
Create a professional ATS-friendly resume.
Job Title: ${jobTitle}
Experience:
${experience}
Skills:
${skills}
Rules:
- Output ONLY Markdown resume
- Focus on achievements
- Use strong action verbs
- Make it sound like top 10% candidate
- No explanations
`;

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const result = data?.choices?.[0]?.message?.content || "No response from AI";

    // 计数 +1
    globalThis.__usage[userId] = usage + 1;

    return NextResponse.json({ text: result });
  } catch (error: any) {
    return NextResponse.json(
      { text: "", error: error.message },
      { status: 500 }
    );
  }
}
