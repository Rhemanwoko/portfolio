import { personalInfo, socialLinks } from "@/data/personal";

export function PersonJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ugochukwunwoko.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    email: personalInfo.email,
    url: baseUrl,
    sameAs: socialLinks.map((link) => link.url),
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "Frontend Development",
      "Web Development",
      "UI Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ugochukwunwoko.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.name} - Portfolio`,
    description: personalInfo.tagline,
    url: baseUrl,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
