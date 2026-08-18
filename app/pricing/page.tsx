import Footer from "@/components/Footer";
import type { Metadata } from "next";
import EngagementModels from "@/components/pricing/EngagementModels";
import ProjectFactors from "@/components/pricing/ProjectFactors";
import Process from "@/components/pricing/Process";
import Faq from "@/components/pricing/Faq";
import Cta from "@/components/pricing/Cta";
import Hero from "@/components/pricing/Hero";

export const metadata: Metadata = {
  title: {
    default: "Pricing | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
  description:
    "Explore flexible software development, cloud, AI, consulting, and dedicated development pricing from LT Technologies.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* PricingModels */}
      <EngagementModels />

      {/* How We Price */}
      <ProjectFactors />

      {/* Process */}
      <Process />

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
