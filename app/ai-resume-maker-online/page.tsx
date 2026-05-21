import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Resume Maker Online - Free AI Resume Generator | AI Resume Builder",
  description:
    "Create a professional resume online with our AI resume maker. Free ATS-friendly resume generator. No signup required to start.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">← Back to App</Link>
        <h1 className="text-4xl font-bold mt-8">AI Resume Maker Online</h1>
        <p className="mt-4 text-lg text-gray-400">Create a professional resume online in seconds with our AI-powered resume maker. Free to try.</p>
        <Link href="/" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">Make Your Resume Free</Link>
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Why Use Our AI Resume Maker?</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✅ ATS-optimized formatting</li>
            <li>✅ Professional action verbs</li>
            <li>✅ Tailored to your job title</li>
            <li>✅ Generated in seconds</li>
          </ul>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200">Create Your Resume Free</Link>
        </div>
      </div>
    </div>
  );
}
