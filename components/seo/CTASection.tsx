import Link from "next/link";

export function CTASection({
  heading = "Generate Your AI-Powered Resume",
  buttonText = "Build Your Resume Free",
  href = "/",
}: {
  heading?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <section className="mt-16 text-center py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-400 mb-6 max-w-xl mx-auto">
        Stop staring at a blank page. Our AI creates a professional,
        ATS-optimized resume from your experience in seconds.
      </p>
      <Link
        href={href}
        className="inline-block bg-white text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
      >
        {buttonText} →
      </Link>
    </section>
  );
}
