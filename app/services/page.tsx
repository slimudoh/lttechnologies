import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Services from "@/components/services/Services";
import Capabilities from "@/components/services/Capabilities";
import Process from "@/components/services/Process";
import Hero from "@/components/services/Hero";
import Why from "@/components/services/Why";
import Cta from "@/components/services/Cta";

export const metadata: Metadata = {
  title: "Services | LT Technologies",
  description:
    "LT Technologies helps businesses build digital products, automate operations, grow online, and keep their technology running reliably.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Capabilities */}
      <Capabilities />

      {/* Why Us */}
      <Why />

      {/* Process */}
      <Process />

      {/* CTA */}
      <Cta />

      <Footer />
    </main>
  );
}
