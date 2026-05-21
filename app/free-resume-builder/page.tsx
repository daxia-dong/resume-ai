import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Resume Builder - Online AI Resume Maker (No Signup Required)",
  description:
    "Build a professional resume online for free. No signup required. AI-powered resume builder that creates ATS-friendly resumes in seconds.",
  openGraph: {
    title: "Free Resume Builder - AI-Powered Online Resume Maker",
    description:
      "Create a professional resume free. No signup. AI-powered.",
  },
};

export default function FreeResumeBuilderPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">
          ← Back to App
        </Link>

        <h1 className="text-4xl font-bold mt-8">Free Resume Builder</h1>
        <p className="mt-4 text-lg text-gray-400">
          Build a professional resume online for free. No signup required.
          Our AI creates ATS-optimized resumes tailored to your job title and
          experience in seconds.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200"
        >
          Build Your Resume Free
        </Link>

        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Why Choose Our Free Resume Builder?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold">🆓 Completely Free to Start</h3>
              <p className="text-sm text-gray-400 mt-1">
                No credit card. No hidden fees. Just tell us about yourself.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold">🤖 AI-Powered</h3>
              <p className="text-sm text-gray-400 mt-1">
                Our AI writes professional resumes that pass ATS filters.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold">⚡ 10 Seconds</h3>
              <p className="text-sm text-gray-400 mt-1">
                Enter your info and get a complete resume instantly.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold">📋 Copy & Use</h3>
              <p className="text-sm text-gray-400 mt-1">
                No account needed. Copy your resume and start applying.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">Perfect For</h2>
          <ul className="space-y-3 text-gray-400">
            <li>🎯 Software engineers looking for a quick resume refresh</li>
            <li>🎯 Recent graduates building their first resume</li>
            <li>🎯 Career changers needing a new angle</li>
            <li>🎯 Anyone who wants an ATS-optimized resume fast</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200"
          >
            Build Your Resume Free
          </Link>
        </div>
      </div>
    </div>
  );
}
