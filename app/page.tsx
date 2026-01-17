import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles, Code2, Zap, Users } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { featuredProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] -z-10" />
        
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl animate-fade-in animate-delay-100">
              Hi, I'm{" "}
              <span className="gradient-text">
                {personalInfo.name.split(" ")[0]}
              </span>
            </h1>
            
            <p className="mt-6 text-2xl font-semibold text-muted-foreground animate-fade-in animate-delay-200">
              {personalInfo.title}
            </p>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-300">
              {personalInfo.tagline}
            </p>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in animate-delay-400">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
              >
                View My Work
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-8 py-4 text-base font-semibold hover:bg-muted hover:scale-105 transition-all"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </Link>
              
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-8 py-4 text-base font-semibold hover:bg-muted hover:scale-105 transition-all"
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Moved up for better flow */}
      <section className="border-y bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code2, value: "3+", label: "Years Experience" },
              { icon: Users, value: "2,000+", label: "Users Impacted" },
              { icon: Zap, value: "10+", label: "Projects Delivered" },
              { icon: Sparkles, value: "40%", label: "Avg. Performance Boost" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 text-center hover-lift border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <metric.icon className="mx-auto h-10 w-10 text-primary mb-4" />
                <div className="text-4xl font-bold gradient-text">{metric.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications built with modern technologies, serving thousands of users
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project, idx) => (
              <div key={project.slug} className={`animate-fade-in animate-delay-${(idx + 1) * 100}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="border-y bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Technologies I use to build exceptional web experiences
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Frontend",
                skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
                gradient: "from-blue-500/10 to-cyan-500/10",
              },
              {
                title: "State & Data",
                skills: ["Redux", "Context API", "REST APIs", "Axios"],
                gradient: "from-purple-500/10 to-pink-500/10",
              },
              {
                title: "Backend",
                skills: ["Node.js", "Express", "API Design"],
                gradient: "from-green-500/10 to-emerald-500/10",
                badge: "Working Knowledge",
              },
              {
                title: "Tooling",
                skills: ["Git", "Vercel", "Netlify", "Figma"],
                gradient: "from-orange-500/10 to-red-500/10",
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover-lift"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    {category.badge && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {category.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium hover:bg-muted/80 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Building impactful products at innovative companies
              </p>
            </div>
            <Link
              href="/experience"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="space-y-6">
            {experience.slice(0, 2).map((exp, idx) => (
              <div
                key={exp.company}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-8 hover-lift animate-fade-in animate-delay-${(idx + 1) * 100}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="mt-1 text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {exp.start} - {exp.end || "Present"}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{exp.locationType}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.bullets.slice(0, 2).map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.stack && exp.stack.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-muted px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Experience
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-y">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm available for frontend development roles and freelance projects. 
            Let's create exceptional digital experiences together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
            >
              <Mail className="h-5 w-5" />
              Start a Conversation
            </Link>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-8 py-4 text-base font-semibold hover:bg-muted hover:scale-105 transition-all"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
