import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Hero from "@/components/insights/Hero";
import Featured from "@/components/insights/Featured";
import Recent from "@/components/insights/Recent";
import Cta from "@/components/insights/Cta";

export const metadata: Metadata = {
  title: {
    default: "Insight | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Post */}
      <Featured />

      {/* Recent Posts Grid */}
      <Recent />

      <Cta />

      <Footer />
    </div>
  );
}
