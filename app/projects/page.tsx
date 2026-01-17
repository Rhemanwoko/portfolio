"use client";

import { useState, useMemo, Suspense } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { useSearchParams, useRouter } from "next/navigation";

const categories = ["All", "SaaS", "Dashboard", "Mini App", "Redesign", "Freelance"];
const techFilters = ["All", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
  const [selectedTech, setSelectedTech] = useState(searchParams.get("tech") || "All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
      const techMatch = selectedTech === "All" || project.stack.includes(selectedTech);
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTech]);

  const updateFilters = (type: "category" | "tech", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (type === "category") {
      setSelectedCategory(value);
      if (value === "All") {
        params.delete("category");
      } else {
        params.set("category", value);
      }
    } else {
      setSelectedTech(value);
      if (value === "All") {
        params.delete("tech");
      } else {
        params.set("tech", value);
      }
    }
    
    router.push(`/projects?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A collection of projects showcasing my frontend development work
      </p>

      {/* Filters */}
      <div className="mt-12 space-y-6">
        <div>
          <h2 className="mb-3 text-sm font-semibold">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => updateFilters("category", category)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border bg-background hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold">Filter by Technology</h2>
          <div className="flex flex-wrap gap-2">
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => updateFilters("tech", tech)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTech === tech
                    ? "bg-primary text-primary-foreground"
                    : "border bg-background hover:bg-muted"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-12">
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-muted-foreground">
            No projects found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
