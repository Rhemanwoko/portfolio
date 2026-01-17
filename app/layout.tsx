import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { personalInfo } from "@/data/personal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | Front-End Developer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: [
    "Front-End Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Web Developer",
    "UI Engineer",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: personalInfo.name,
    title: `${personalInfo.name} | Front-End Developer`,
    description: personalInfo.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Front-End Developer`,
    description: personalInfo.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
