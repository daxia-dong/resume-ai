import { skillsByJob } from "@/lib/seo-pages";
import Link from "next/link";

export function SkillsGrid({ jobTitle }: { jobTitle: string }) {
  const skills = skillsByJob[jobTitle];
  if (!skills) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">
        Top Skills for a {jobTitle} Resume
      </h2>
      <p className="text-gray-400 mb-4">
        Recruiters and ATS systems scan for specific skills. Here are the
        most in-demand skills for {jobTitle.toLowerCase()}s in 2026:
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="bg-gray-900 p-5 rounded-lg">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
              {group.category}
            </h3>
            <p className="mt-2 text-gray-300">{group.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
