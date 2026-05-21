import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Resume Generator - Free ATS-Friendly Resume Builder",
  description:
    "Generate a professional ATS-friendly resume in seconds with AI. Free to use. No signup required. Used by software engineers, marketers, and fresh graduates.",
  openGraph: {
    title: "AI Resume Generator - Free ATS Resume Builder",
    description:
      "Create a professional resume with AI in seconds. Free to start.",
  },
};

export default function AIResumeGeneratorPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto p-8">
        {/* 导航回首页 */}
        <Link href="/" className="text-gray-400 hover:text-white text-sm">
          ← Back to App
        </Link>

        {/* Hero */}
        <h1 className="text-4xl font-bold mt-8">AI Resume Generator</h1>
        <p className="mt-4 text-lg text-gray-400">
          Generate a professional ATS-friendly resume in seconds. No templates,
          no hassle — just describe your experience and let AI do the work.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200"
        >
          Generate Your Resume Free
        </Link>

        {/* How it works */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl mb-2">1</div>
              <h3 className="font-semibold">Enter Your Info</h3>
              <p className="text-sm text-gray-400 mt-1">
                Tell us your job title, experience, and skills.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl mb-2">2</div>
              <h3 className="font-semibold">AI Generates</h3>
              <p className="text-sm text-gray-400 mt-1">
                Our AI writes a professional, ATS-optimized resume.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="text-3xl mb-2">3</div>
              <h3 className="font-semibold">Copy & Apply</h3>
              <p className="text-sm text-gray-400 mt-1">
                Copy the result or upgrade to Pro for unlimited use.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">Why Use Our AI Resume Generator?</h2>
          <ul className="space-y-3 text-gray-400">
            <li>✅ ATS-optimized formatting — passes automated screening</li>
            <li>✅ Strong action verbs and quantified achievements</li>
            <li>✅ Tailored to your specific job title and industry</li>
            <li>✅ Generated in seconds, not hours</li>
            <li>✅ Free to try — no credit card required</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Is the resume generator really free?</h3>
              <p className="text-sm text-gray-400 mt-1">
                Yes! You get 1 free resume generation. Upgrade to Pro for unlimited access.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Is it ATS-friendly?</h3>
              <p className="text-sm text-gray-400 mt-1">
                Yes. Our AI is trained to write resumes that pass Applicant Tracking Systems.
              </p>
            </div>
            <div>
              <h3 className="font-medium">What job titles do you support?</h3>
              <p className="text-sm text-gray-400 mt-1">
                All of them. Software engineer, marketing manager, fresh graduate — our AI adapts to your input.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
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
