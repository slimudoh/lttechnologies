import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Capabilities from "@/components/work/Capabilities";
import Hero from "@/components/work/Hero";
import Introduction from "@/components/work/Introduction";
import Projects from "@/components/work/Projects";
import Process from "@/components/work/Process";
import Cta from "@/components/softwareDevelopment/Cta";

export const metadata: Metadata = {
  title: {
    default: "Our Work | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
};

export default function WorkPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <Hero />

      {/* Introduction */}
      <Introduction />

      {/* Projects */}

      <Projects />

      {/* Capabilities */}
      <Capabilities />

      {/* Process */}

      <Process />

      <Cta />

      <Footer />
    </div>
  );
}
