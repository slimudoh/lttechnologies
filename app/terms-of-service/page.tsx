import Footer from "@/components/Footer";
import Hero from "@/components/terms/Hero";
import Content from "@/components/terms/Content";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Terms of Service | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies Limited",
  },
};


export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Terms Content */}
      <Content />

      <Footer />
    </div>
  );
}
