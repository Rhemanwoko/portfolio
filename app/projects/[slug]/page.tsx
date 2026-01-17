import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mt-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-2 text-xl text-muted-foreground">{project.tagline}</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {project.category}
          </span>
        </div>

        {/* Meta Info */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
          {project.timeframe && (
            <div>
              <span className="font-semibold">Timeline:</span> {project.timeframe}
            </div>
          )}
          <div>
            <span className="font-semibold">Role:</span> {project.role}
          </div>
        </div>

        {/* Links */}
        {(project.links.live || project.links.github) && (
          <div className="mt-6 flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-semibold shadow-sm hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border bg-card px-3 py-2 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-8 rounded-lg border bg-muted/50 p-6">
            <h2 className="text-sm font-semibold">Key Metrics</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-primary">{metric.split(" ")[0]}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{metric.split(" ").slice(1).join(" ")}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Sections */}
      <div className="mt-16 space-y-12">
        {/* Problem */}
        <section>
          <h2 className="text-2xl font-bold">Problem</h2>
          <p className="mt-4 text-muted-foreground">{project.problem}</p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold">Solution</h2>
          <p className="mt-4 text-muted-foreground">{project.solution}</p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 text-primary">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold">Challenges & Trade-offs</h2>
            <ul className="mt-4 space-y-2">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 text-primary">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold">Results</h2>
            <ul className="mt-4 space-y-2">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 text-primary">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Screenshots Placeholder */}
        <section>
          <h2 className="text-2xl font-bold">Screenshots</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {project.images.map((image, idx) => (
              <div key={idx} className="aspect-video overflow-hidden rounded-lg border bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <span className="text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Note: Replace placeholder images with actual project screenshots in /public/projects/
          </p>
        </section>
      </div>

      {/* Navigation */}
      <div className="mt-16 border-t pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Projects
        </Link>
      </div>
    </div>
  );
}
