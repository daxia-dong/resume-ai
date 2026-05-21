import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import I18nProvider from "./I18nProvider";
import PostHogProvider from "./PostHogProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Resume Builder - Free ATS Resume & Cover Letter Generator",
  description: "Generate professional ATS-friendly resumes and cover letters with AI in seconds. Free to start. Used by thousands of job seekers.",
  openGraph: {
    title: "AI Resume Builder - Free ATS Resume Generator",
    description: "Generate professional resumes and cover letters with AI. No signup required to start.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col"><PostHogProvider><I18nProvider>{children}</I18nProvider></PostHogProvider></body>
      </html>
    </ClerkProvider>
  );
}
