import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Resume Generator AI - AI-Powered Resume Builder | AI Resume Builder",
  description:
    "Generate a professional resume for free with our AI resume generator. No templates, just describe your experience and get an ATS-friendly resume instantly.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">← Back to App</Link>
        <h1 className="text-4xl font-bold mt-8">Free Resume Generator AI</h1>
        <p className="mt-4 text-lg text-gray-400">Use our free AI resume generator to create a professional, ATS-friendly resume. No credit card required.</p>
        <Link href="/" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">Generate Resume Free</Link>
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-gray-900 p-6 rounded-lg"><div className="text-3xl mb-2">1</div><h3 className="font-semibold">Describe</h3><p className="text-sm text-gray-400 mt-1">Tell us your job title and experience.</p></div>
            <div className="bg-gray-900 p-6 rounded-lg"><div className="text-3xl mb-2">2</div><h3 className="font-semibold">Generate</h3><p className="text-sm text-gray-400 mt-1">AI creates a professional resume instantly.</p></div>
            <div className="bg-gray-900 p-6 rounded-lg"><div className="text-3xl mb-2">3</div><h3 className="font-semibold">Copy</h3><p className="text-sm text-gray-400 mt-1">Copy and start applying to jobs.</p></div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200">Try Free Now</Link>
        </div>
      </div>
    </div>
  );
}
