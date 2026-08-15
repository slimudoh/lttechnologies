import Footer from "@/components/Footer";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Capabilities from "@/components/home/Capabilities";
import Faq from "@/components/home/Faq";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Support from "@/components/home/Support";
import Cta from "@/components/home/Cta";

export const metadata: Metadata = {
  title: {
    default: "Home | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <Hero />

      {/* Introduction */}
      <Introduction />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <Capabilities />

      {/* Process */}
      <Process />

      {/* Existing Applications / Support */}
      <Support />

      {/* FAQ */}
      <Faq />

      {/* Final CTA */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
}
