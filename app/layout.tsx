import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },

  description:
    "LT Technologies builds websites, web applications, mobile apps, AI-powered solutions, and digital systems that help businesses grow, automate, and operate more efficiently.",

  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI automation",
    "business automation",
    "web applications",
    "digital solutions",
    "software company Nigeria",
    "technology company Nigeria",
    "LT Technologies",
  ],

  authors: [
    {
      name: "LT Technologies Limited",
    },
  ],

  creator: "LT Technologies Limited",
  publisher: "LT Technologies Limited",

  metadataBase: new URL("https://lttechnologies.com"),

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://lttechnologies.com",
    siteName: "LT Technologies Limited",
    title: "LT Technologies Limited | Build. Grow. Automate.",
    description:
      "We build websites, web applications, mobile apps and AI-powered solutions that help businesses grow and operate more efficiently.",
  },

  twitter: {
    card: "summary_large_image",
    title: "LT Technologies Limited | Build. Grow. Automate.",
    description:
      "Web, mobile, software development, AI automation and digital solutions for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body>
        <div className="min-h-screen bg-white">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
