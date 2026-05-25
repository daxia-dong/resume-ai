"use client";

import { useState } from "react";
import posthog from "posthog-js";

interface RoastResult {
  score: number;
  good: string[];
  bad: string[];
  brutal: string[];
  tips: string[];
}

interface RoastProps {
  jobTitle: string;
  experience: string;
  skills: string;
  resume: string;
}

export default function RoastMyResume({ jobTitle, experience, skills, resume }: RoastProps) {
  const [roast, setRoast] = useState<RoastResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [roastStyle, setRoastStyle] = useState<string>("");

  async function handleRoast() {
    posthog.capture("click_roast_my_resume");
    setLoading(true);
    setRoast(null);

    const res = await fetch("/api/roast-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobTitle, experience, skills, resume }),
    });

    const data = await res.json();
    if (data.error) {
      console.error("Roast failed:", data.error);
      setLoading(false);
      return;
    }

    setRoastStyle(data.roastStyle || "unknown");
    posthog.capture("roast_completed", { score: data.score, style: data.roastStyle });
    setRoast(data);
    setLoading(false);
  }

  function handleShare() {
    if (!roast) return;
    const shareText = `🔥 My resume got ROASTED by AI!\n\nATS Score: ${roast.score}/100\n\n${roast.brutal.map((b) => `💀 ${b}`).join("\n")}\n\n${roast.bad.map((b) => `⚠️ ${b}`).join("\n")}\n\nWant to get roasted? 👇\nhttps://resume-ai-two-green.vercel.app`;

    posthog.capture("click_share_roast", { score: roast.score, style: roastStyle });

    if (navigator.share) {
      navigator.share({ title: "My Resume Roast", text: shareText });
    } else {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function getScoreColor(score: number) {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    if (score >= 40) return "text-orange-400";
    return "text-red-400";
  }

  function getScoreLabel(score: number) {
    if (score >= 85) return "🚀 Strong";
    if (score >= 70) return "👍 Decent";
    if (score >= 55) return "⚠️ Needs Work";
    if (score >= 40) return "🔥 Rough";
    return "💀 Oof";
  }

  return (
    <div className="mt-8 border-t border-gray-800 pt-8">
      {!roast && !loading && (
        <div className="text-center">
          <button
            onClick={handleRoast}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            🔥 Roast My Resume
          </button>
          <p className="text-gray-500 text-sm mt-2">
            Get an AI-powered, brutally honest review of your resume
          </p>
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="animate-pulse">
            <span className="text-4xl">🔥</span>
            <p className="text-gray-400 mt-2">Analyzing your resume...</p>
            <p className="text-gray-600 text-sm mt-1">Preparing the roast 🔥</p>
          </div>
        </div>
      )}

      {roast && (
        <div className="space-y-6">
          {/* Style badge */}
          <div className="text-center">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
              {roastStyle === "savage" && "🔥 毒舌模式"}
              {roastStyle === "hr-cold" && "❄️ HR冷酷模式"}
              {roastStyle === "funny" && "😂 搞笑模式"}
              {![ "savage", "hr-cold", "funny"].includes(roastStyle) && "🎯 随机模式"}
            </span>
          </div>

          {/* Score */}
          <div className="text-center">
            <div className={`text-6xl font-black ${getScoreColor(roast.score)}`}>
              {roast.score}/100
            </div>
            <div className={`text-lg font-semibold mt-1 ${getScoreColor(roast.score)}`}>
              {getScoreLabel(roast.score)}
            </div>
          </div>

          {/* Good */}
          <div className="bg-green-900/20 border border-green-800/50 p-5 rounded-xl">
            <h3 className="font-semibold text-green-400 mb-3">✅ Good — You&apos;re Not a Disaster</h3>
            <ul className="space-y-2">
              {roast.good.map((g, i) => (
                <li key={i} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-green-400 shrink-0">•</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Bad */}
          <div className="bg-yellow-900/20 border border-yellow-800/50 p-5 rounded-xl">
            <h3 className="font-semibold text-yellow-400 mb-3">⚠️ Bad — Could Be Better</h3>
            <ul className="space-y-2">
              {roast.bad.map((b, i) => (
                <li key={i} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-yellow-400 shrink-0">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Brutal */}
          <div className="bg-red-900/20 border border-red-800/50 p-5 rounded-xl">
            <h3 className="font-semibold text-red-400 mb-3">💀 Brutal — The Hard Truth</h3>
            <ul className="space-y-2">
              {roast.brutal.map((b, i) => (
                <li key={i} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-red-400 shrink-0">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="bg-gray-800/50 border border-gray-700/50 p-5 rounded-xl">
            <h3 className="font-semibold text-blue-400 mb-3">💡 Tips to Improve</h3>
            <ul className="space-y-2">
              {roast.tips.map((t, i) => (
                <li key={i} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-blue-400 shrink-0">{i + 1}.</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all"
            >
              {copied ? "✅ Copied!" : "📤 Share Roast"}
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-all"
            >
              ✨ Fix Your Resume with AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
