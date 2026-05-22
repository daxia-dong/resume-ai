import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Job Search Blog | AI Resume Builder",
  description: "Expert advice on resume writing, ATS optimization, job search strategies, and career development. Written by career professionals.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
