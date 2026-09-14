import Footer from "@/components/Footer";
import Hero from "@/components/aiAutomation/Hero";
import Solutions from "@/components/aiAutomation/Solutions";
import Automation from "@/components/aiAutomation/Automation";
import Process from "@/components/aiAutomation/Process";
import Cta from "@/components/aiAutomation/Cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AI Automation | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies Limited",
  },
};


export default function AiAutomationPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* AI Solutions */}
      <Solutions />

      {/* Why AI & Automation */}
      <Automation />

      {/* Process */}
      <Process />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
