import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PricingModels from "@/components/pricing/PricingModels";
import PricingServices from "@/components/pricing/PricingServices";
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
      <PricingModels />

      {/* Services & Starting Prices */}
      <PricingServices />

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
