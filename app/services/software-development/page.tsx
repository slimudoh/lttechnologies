import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Capabilities from "@/components/softwareDevelopment/Capabilities";
import Process from "@/components/softwareDevelopment/Process";
import Technology from "@/components/softwareDevelopment/Technology";
import Hero from "@/components/softwareDevelopment/Hero";
import Introduction from "@/components/softwareDevelopment/Introduction";
import Why from "@/components/softwareDevelopment/Why";
import Cta from "@/components/softwareDevelopment/Cta";

export const metadata: Metadata = {
  title: "Custom Software Development | LT Technologies",
  description:
    "Custom software development services for businesses that need reliable web applications, enterprise systems, SaaS products, APIs and digital platforms.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Introduction */}
      <Introduction />

      {/* Capabilities */}
      <Capabilities />

      {/* What We Can Build */}
      <Technology />

      {/* Process */}
      <Process />

      {/* Why LT Technologies */}
      <Why />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
