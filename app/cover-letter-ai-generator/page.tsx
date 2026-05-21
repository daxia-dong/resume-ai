import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cover Letter AI Generator - Free AI Cover Letter Writer | AI Resume Builder",
  description:
    "Generate a professional cover letter with our AI cover letter generator. Free to use. Tailored to your job title and experience in seconds.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">← Back to App</Link>
        <h1 className="text-4xl font-bold mt-8">Cover Letter AI Generator</h1>
        <p className="mt-4 text-lg text-gray-400">Write a compelling cover letter with AI. Professional tone, tailored content, ready in seconds. Free to try.</p>
        <Link href="/" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">Write Cover Letter Free</Link>
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">Why Use AI for Cover Letters?</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✅ Professional tone that impresses hiring managers</li>
            <li>✅ Strong opening hook to grab attention</li>
            <li>✅ Tailored to your experience and target role</li>
            <li>✅ Optimal length (250-350 words)</li>
          </ul>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200">Generate Your Cover Letter</Link>
        </div>
      </div>
    </div>
  );
}
