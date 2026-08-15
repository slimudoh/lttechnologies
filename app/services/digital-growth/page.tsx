import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Hero from "@/components/digitalGrowth/Hero";
import Introduction from "@/components/digitalGrowth/Introduction";
import Services from "@/components/digitalGrowth/Services";
import Why from "@/components/digitalGrowth/Why";
import Process from "@/components/digitalGrowth/Process";
import Results from "@/components/digitalGrowth/Results";
import Cta from "@/components/digitalGrowth/Cta";

export const metadata: Metadata = {
  title: "Digital Growth | LT Technologies",
  description:
    "Grow your digital presence with content, SEO, social media, email marketing and digital strategies designed to attract and convert customers.",
};

export default function DigitalGrowthPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Introduction */}
      <Introduction />

      {/* Services */}
      <Services />

      {/* Why Digital Growth */}
      <Why />

      {/* Process */}
      <Process />

      {/* Results */}
      <Results />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
