"use client";
import { useState, useEffect } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useTranslation } from "react-i18next";
import { ClipboardCheck, Sparkles, Lock } from "lucide-react";
import posthog from "posthog-js";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { t, i18n } = useTranslation();
  const { isSignedIn, user } = useUser();
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [generateCount, setGenerateCount] = useState(0);

  // 根据语言设置页面 dir
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      posthog.capture("payment_success");
      window.history.replaceState({}, "", "/");
    }
  }, []);

  async function generate() {
    posthog.capture("click_create_resume");
    setError("");
    setLoading(true);
    setResult("");
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobTitle, experience, skills }),
    });
    const data = await res.json();
    if (data.error) { setError(data.error); setLoading(false); return; }
    setResult(data.text);
    posthog.capture("resume_generated");
    setGenerateCount((c) => c + 1);
    setLoading(false);
  }

  async function upgrade() {
    posthog.capture("click_upgrade");
    const res = await fetch("/api/stripe", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
              <ClipboardCheck className="w-4 h-4 text-white/70" />
            </div>
            <span className="text-sm font-medium text-white/90">{t("app.name")}</span>
          </div>
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            {isSignedIn ? (
              <>
                <span className="text-xs text-white/40 hidden sm:inline">{user?.emailAddresses?.[0]?.emailAddress}</span>
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-medium">Beta - Free</span>
                <SignOutButton>
                  <button className="text-xs text-white/40 hover:text-white/70 transition-colors">{t("button.sign_out")}</button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors">
                  {t("button.sign_in")}
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-white/40 mb-6">
              <Sparkles className="w-3 h-3" />
              {t("hero.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-md mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Usage indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {isSignedIn ? (
              <span className="text-xs text-emerald-400/80">✨ Beta - Free during launch</span>
            ) : (
              <span className="text-xs text-amber-400/60">{t("status.sign_in_required")}</span>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
              <span className="text-xs text-red-400/80">{error}</span>
            </div>
          )}

          {/* Form Card */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-5">
            <div>
              <label className="block text-xs font-medium text-white/50 mb-2">{t("form.role")}</label>
              <input
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/20 outline-none focus:border-white/[0.15] focus:bg-white/[0.06] transition-colors"
                placeholder={t("form.role_placeholder")}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/50 mb-2">{t("form.experience")}</label>
              <textarea
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/20 outline-none focus:border-white/[0.15] focus:bg-white/[0.06] transition-colors resize-none"
                placeholder={t("form.experience_placeholder")}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows={4}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/50 mb-2">{t("form.skills")}</label>
              <input
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/20 outline-none focus:border-white/[0.15] focus:bg-white/[0.06] transition-colors"
                placeholder={t("form.skills_placeholder")}
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            <button
              onClick={generate}
              disabled={!isSignedIn || loading}
              className="w-full py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-black/20 border-t-black/80 animate-spin" />
                  {t("generating")}
                </span>
              ) : !isSignedIn ? (
                <span className="flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  {t("button.sign_in_to_generate")}
                </span>
              ) : (
                t("button.generate")
              )}
            </button>
          </div>

          {/* How it works */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { step: t("step.01"), title: t("step.describe"), desc: t("step.describe_desc") },
              { step: t("step.02"), title: t("step.generate"), desc: t("step.generate_desc") },
              { step: t("step.03"), title: t("step.apply"), desc: t("step.apply_desc") },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-xs text-white/20 mb-1">{item.step}</div>
                <div className="text-sm font-medium text-white/70 mb-1">{item.title}</div>
                <div className="text-xs text-white/30 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Result */}
          {result && (
            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
                <span className="text-xs font-medium text-white/50">{t("result.title")}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(result)}
                  className="px-3 py-1 rounded-md bg-white/[0.06] text-xs text-white/60 hover:bg-white/[0.1] transition-colors"
                >
                  {t("button.copy")}
                </button>
              </div>
              <pre className="p-5 text-sm text-white/70 leading-relaxed whitespace-pre-wrap font-mono">
                {result}
              </pre>
            </div>
          )}

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-xs text-white/15">{t("footer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
