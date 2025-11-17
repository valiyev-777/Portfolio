import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Muhammadsodiq Valiyev - Frontend Developer Portfolio",
    template: "%s | Muhammadsodiq Valiyev",
  },
  description:
    "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional user experiences with 3+ years of experience.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "web developer",
    "portfolio",
    "UI/UX developer",
    "javascript developer",
  ],
  authors: [{ name: "Muhammadsodiq Valiyev" }],
  creator: "Muhammadsodiq Valiyev",
  publisher: "Muhammadsodiq Valiyev",
  metadataBase: new URL("https://valiyev.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valiyev.netlify.app",
    title: "Muhammadsodiq Valiyev - Frontend Developer Portfolio",
    description:
      "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Muhammadsodiq Valiyev Portfolio",
    // images: [
    //   {
    //     url: "/og-image.png", // Add your OG image when ready (1200x630px)
    //     width: 1200,
    //     height: 630,
    //     alt: "Muhammadsodiq Valiyev Portfolio",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammadsodiq Valiyev - Frontend Developer",
    description:
      "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    // images: ["/og-image.png"], // Add your Twitter image when ready
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammadsodiq Valiyev",
              jobTitle: "Frontend Developer",
              url: "https://valiyev.netlify.app",
              sameAs: [
                "https://github.com/valiyev-777",
                "https://www.linkedin.com/in/muhammadsodiq-valiyev-a479b4379",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Web Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
