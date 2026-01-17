import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about frontend development, React, TypeScript, and web performance",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Articles about frontend development, React patterns, and web performance
      </p>

      <div className="mt-12 rounded-lg border bg-muted/50 p-12 text-center">
        <p className="text-muted-foreground">
          Blog posts coming soon! This section is scaffolded and ready for MDX content.
        </p>
        <Link href="/" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      {/* Scaffold for future blog posts */}
      <div className="mt-8 text-sm text-muted-foreground">
        <p>To add blog posts:</p>
        <ol className="mt-2 list-inside list-decimal space-y-1">
          <li>Create MDX files in /content/blog/</li>
          <li>Add frontmatter (title, date, tags, description)</li>
          <li>Update this page to read and display posts</li>
          <li>Add individual post pages at /blog/[slug]</li>
        </ol>
      </div>
    </div>
  );
}
