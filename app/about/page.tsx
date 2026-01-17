import { Metadata } from "next";
import { personalInfo, skills, whatImBestAt } from "@/data/personal";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name}, a Front-End Developer specializing in React, TypeScript, and Tailwind CSS.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-bold">About Me</h1>
      
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>{personalInfo.bio}</p>
      </div>

      <div className="mt-12">
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>

      {/* What I'm Best At */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">What I'm Best At</h2>
        <ul className="mt-6 space-y-3">
          {whatImBestAt.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                ✓
              </span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-card px-3 py-2 text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">State & Data Management</h3>
            <div className="flex flex-wrap gap-2">
              {skills.stateAndData.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-card px-3 py-2 text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Backend (Working Knowledge)</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backendWorking.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-card px-3 py-2 text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Tooling & Workflow</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tooling.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border bg-card px-3 py-2 text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
