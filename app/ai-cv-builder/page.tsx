import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI CV Builder - Free AI Curriculum Vitae Generator | AI Resume Builder",
  description:
    "Build a professional CV with our AI CV builder. Free to use. Generate a tailored curriculum vitae in seconds based on your experience.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">← Back to App</Link>
        <h1 className="text-4xl font-bold mt-8">AI CV Builder</h1>
        <p className="mt-4 text-lg text-gray-400">Build a professional CV with AI. Free to try. Perfect for academic, research, and international job applications.</p>
        <Link href="/" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">Build Your CV Free</Link>
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✅ Professional CV formatting</li>
            <li>✅ Tailored to your field and experience level</li>
            <li>✅ ATS-optimized structure</li>
            <li>✅ Free to try, no signup required</li>
          </ul>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200">Start Building</Link>
        </div>
      </div>
    </div>
  );
}
