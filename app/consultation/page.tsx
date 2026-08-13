import Footer from "@/components/Footer";
import type { Metadata } from "next";
import MainConsultation from "@/components/consultation/MainConsultation";
import Faq from "@/components/consultation/Faq";
import Cta from "@/components/consultation/Cta";
import Hero from "@/components/consultation/Hero";

export const metadata: Metadata = {
  title: {
    default: "Consultation | LT Technologies Limited",
    template: "%s | LT Technologies",
  },
  description:
    "Talk to LT Technologies about your software, AI automation, digital growth, or technology needs.",
};

export default function ConsultationPage() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Main Consultation Section */}
      <MainConsultation />

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
