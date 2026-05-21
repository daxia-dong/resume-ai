import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Cover Letter Generator - Free Professional Cover Letter Writer",
  description:
    "Generate a professional cover letter with AI in seconds. Free to use. Tailored to your job title and experience.",
  openGraph: {
    title: "AI Cover Letter Generator - Free AI Cover Letter Writer",
    description: "Write professional cover letters with AI. Free to start.",
  },
};

export default function AICoverLetterPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        <Link href="/" className="text-gray-400 hover:text-white text-sm">
          ← Back to App
        </Link>

        <h1 className="text-4xl font-bold mt-8">AI Cover Letter Generator</h1>
        <p className="mt-4 text-lg text-gray-400">
          Write a compelling cover letter in seconds. Our AI crafts professional,
          tailored cover letters that help you stand out to hiring managers.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200"
        >
          Write Your Cover Letter Free
        </Link>

        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl mb-2">1</div>
              <h3 className="font-semibold">Enter Job Details</h3>
              <p className="text-sm text-gray-400 mt-1">
                Your target role, experience, and skills.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl mb-2">2</div>
              <h3 className="font-semibold">AI Writes It</h3>
              <p className="text-sm text-gray-400 mt-1">
                A professional cover letter tailored to your background.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl mb-2">3</div>
              <h3 className="font-semibold">Copy & Send</h3>
              <p className="text-sm text-gray-400 mt-1">
                Copy the letter and paste it into your job application.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">Why Use AI for Cover Letters?</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✅ Professional tone that impresses hiring managers</li>
            <li>✅ Tailored to your specific experience and skills</li>
            <li>✅ Strong opening hook that grabs attention</li>
            <li>✅ 250-350 word optimal length</li>
            <li>✅ Free to try — no credit card needed</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200"
          >
            Start Free Now
          </Link>
        </div>
      </div>
    </div>
  );
}
