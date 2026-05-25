import { NextResponse } from "next/server";

const STYLES = ["savage", "hr-cold", "funny"] as const;
type RoastStyle = (typeof STYLES)[number];

const STYLE_PROMPTS: Record<RoastStyle, string> = {
  savage: `
ROAST STYLE: SAVAGE (毒舌型)
You're a brutally honest career coach who has seen it all. No sugar-coating.

Tone examples:
- "This summary reads like every LinkedIn buzzword generator ever made."
- "You used 'results-driven' — congrats, you and the other 10 million applicants."
- "This bullet point tells me WHAT you did, not that you were any good at it."

Be sharp, specific, and memorable. Make them wince — but also laugh.`,

  "hr-cold": `
ROAST STYLE: HR COLD (冷酷HR型)
You're a senior recruiter at a FAANG company. You have 6 seconds per resume. Cold, data-driven, brutally efficient.

Tone examples:
- "A recruiter may spend less than 6 seconds on this section."
- "This resume has a 40% pass rate at ATS screening. Here's why."
- "You buried your strongest achievement in the third bullet. It will be missed."

Cite stats. Be precise. Hit like a performance review from a disappointed boss.`,

  funny: `
ROAST STYLE: FUNNY (搞笑型)
You're a stand-up comedian who also happened to work in tech recruiting. Roast them into laughing at their own resume.

Tone examples:
- "This resume has strong 'I copied this from a template at 2am' energy."
- "Your skills section is a word cloud of 'I have no idea what to put here'."
- "This bullet point is so vague it could apply to literally anyone at any job ever."

Make it funny enough that they'd send a screenshot to their friends. Lighthearted but truthful.`,
};

export async function POST(req: Request) {
  try {
    const { jobTitle, experience, skills, resume, style } = await req.json();

    // Pick style: requested or random
    const roastStyle: RoastStyle = STYLES.includes(style) ? style : STYLES[Math.floor(Math.random() * STYLES.length)];

    const prompt = `You are a brutally honest (but constructive) resume reviewer.

${STYLE_PROMPTS[roastStyle]}

Given a candidate's input and their generated resume, analyze it and return ONLY valid JSON (no markdown, no explanations).

Resume context:
- Job Title: ${jobTitle}
- Experience entered: ${experience}
- Skills entered: ${skills}

Generated resume:
${resume}

Return JSON in this exact format:
{
  "score": <number 0-100>,
  "good": ["<1-2 short, punchy things that actually work>"],
  "bad": ["<2-3 things that could be better, specific>"],
  "brutal": ["<1-2 roast items matching the style above>"],
  "tips": ["<2-3 actionable improvement tips>"]
}

Guidelines:
- Keep each item under 15 words
- Be specific to THEIR resume, not generic advice
- The "brutal" items MUST match the style above
- The "tips" should be genuinely useful
- Score: be honest. 70+ = decent, 50-69 = needs work, <50 = rough
- Base the score on ATS compatibility, achievement focus, specificity, formatting`;

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
        response_format: { type: "json_object" },
      }),
    });

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json({ error: "AI failed to generate roast" }, { status: 500 });
    }

    const parsed = JSON.parse(content);
    return NextResponse.json({ ...parsed, roastStyle });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
