"use client";
import { useState, useEffect } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [upgraded, setUpgraded] = useState(false);
  const [generateCount, setGenerateCount] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setUpgraded(true);
      window.history.replaceState({}, "", "/");
    }
  }, []);

  async function generate() {
    setError("");
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobTitle, experience, skills }),
    });
    const data = await res.json();

    if (data.limitReached) {
      setError("Free limit reached. Please upgrade to Pro.");
      setLoading(false);
      return;
    }
    if (data.error) {
      setError(data.error);
      setLoading(false);
      return;
    }

    setResult(data.text);
    setGenerateCount((c) => c + 1);
    setLoading(false);
  }

  async function upgrade() {
    const res = await fetch("/api/stripe", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-4">
        {/* 头部 */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">AI Resume Builder</h1>
          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <>
                <span className="text-sm text-gray-400">
                  {user?.emailAddresses?.[0]?.emailAddress}
                </span>
                {upgraded ? (
                  <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                    PRO
                  </span>
                ) : (
                  <button
                    onClick={upgrade}
                    className="bg-yellow-400 text-black px-4 py-2 rounded font-medium text-sm"
                  >
                    Upgrade to Pro
                  </button>
                )}
                <SignOutButton>
                  <button className="text-sm text-gray-500 hover:text-white">
                    Sign out
                  </button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-white text-black px-4 py-2 rounded font-medium text-sm">
                  Sign in
                </button>
              </SignInButton>
            )}
          </div>
        </div>

        {/* 用量提示 */}
        {isSignedIn && !upgraded && (
          <p className="text-sm text-gray-400">
            Free: {generateCount}/{1} generation
            {generateCount >= 1 && " — Upgrade to continue"}
          </p>
        )}
        {upgraded && (
          <p className="text-sm text-green-400">Pro: unlimited generations</p>
        )}
        {!isSignedIn && (
          <p className="text-sm text-yellow-500">
            Sign in to generate your AI resume
          </p>
        )}

        {/* 错误提示 */}
        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded text-sm">
            {error}
            {error.includes("limit") && (
              <button
                onClick={upgrade}
                className="ml-2 underline text-yellow-400"
              >
                Upgrade now
              </button>
            )}
          </div>
        )}

        {/* 输入表单 */}
        <input
          className="w-full p-3 text-black rounded"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <textarea
          className="w-full p-3 text-black rounded"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows={5}
        />
        <input
          className="w-full p-3 text-black rounded"
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        {/* 生成按钮 */}
        <button
          onClick={generate}
          disabled={!isSignedIn || loading || (!upgraded && generateCount >= 1)}
          className="bg-white text-black px-4 py-2 rounded font-medium disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {/* 输出 */}
        {result && (
          <pre className="whitespace-pre-wrap bg-gray-900 p-4 rounded">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}
