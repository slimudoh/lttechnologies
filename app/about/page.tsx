import  Footer from "@/components/Footer";
import type { Metadata } from "next";
import Hero  from "@/components/about/Hero";
import WhoWeAre  from "@/components/about/WhoWeAre";
import MissionVision  from "@/components/about/MissionVision";
import  CoreValues  from "@/components/about/CoreValues";
import OurApproach from "@/components/about/OurApproach";
import ServicesOverview from "@/components/about/ServicesOverview";
import  Cta  from "@/components/about/Cta";

export const metadata: Metadata = {
  title: {
    default: "About Us | LT Technologies Limited",
    template: "%s | LT Technologies",
  },
  description:
    "Learn about LT Technologies Limited, a technology company helping businesses build digital products, automate processes, and grow through technology.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <CoreValues />

      {/* Our Approach */}
      <OurApproach />

      {/* Services Overview */}
      <ServicesOverview />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
