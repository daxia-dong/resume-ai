"use client";

import { useEffect, Suspense } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

function PostHogEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || key.includes("***")) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { url });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || key.includes("***")) return;

    if (!posthog.__loaded) {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
        person_profiles: "always",
        capture_pageview: false,
      });

      // 首页访问
      posthog.capture("page_view_home");
    }
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogEvents />
      </Suspense>
      {children}
    </>
  );
}
