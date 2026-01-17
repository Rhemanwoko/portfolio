import { Metadata } from "next";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work experience and career timeline",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-bold">Experience</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        My professional journey in frontend development
      </p>

      <div className="mt-12 space-y-12">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative border-l-2 border-primary/20 pl-8 pb-8">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{exp.role}</h2>
                  <p className="mt-1 text-lg text-primary">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="font-medium">
                    {exp.start} - {exp.end || "Present"}
                  </div>
                  <div className="mt-1">{exp.locationType}</div>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 text-primary">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.stack && exp.stack.length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
