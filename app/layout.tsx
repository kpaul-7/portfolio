import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koushik Paul | Full-Stack Developer & Team Lead",
  description: "Portfolio of Koushik Paul, a dynamic Full-Stack Developer specializing in React, Next.js, NestJS, and .NET Core. Based in Kolkata.",
  keywords: ["Koushik Paul", "Full-Stack Developer", "React", "Next.js", "NestJS", "Software Engineer", "Kolkata"],
  authors: [{ name: "Koushik Paul" }],
  openGraph: {
    title: "Koushik Paul | Full-Stack Developer",
    description: "Architecting scalable web applications. Explore my projects and experience.",
    url: "https://kpaul7.github.io",
    siteName: "Koushik Paul Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}