import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATS Resume Checker - Free ATS Resume Scanner | AI Resume Builder",
  description:
    "Check if your resume passes ATS filters. Our AI-powered tool scans your resume and suggests improvements. Free to use.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">← Back to App</Link>
        <h1 className="text-4xl font-bold mt-8">ATS Resume Checker</h1>
        <p className="mt-4 text-lg text-gray-400">Our AI generates resumes that are optimized for Applicant Tracking Systems, helping you pass automated screening.</p>
        <Link href="/" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200">Generate ATS-Ready Resume</Link>
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">What Makes a Resume ATS-Friendly?</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✅ Standard section headings (Experience, Skills, Education)</li>
            <li>✅ Keyword optimization based on job title</li>
            <li>✅ Clean formatting without complex tables</li>
            <li>✅ Quantified achievements with action verbs</li>
          </ul>
        </div>
        <div className="mt-16 text-center">
          <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200">Check Your Resume</Link>
        </div>
      </div>
    </div>
  );
}
