import Footer from "@/components/Footer";
import Hero from "@/components/privacyPolicy/Hero";
import Content from "@/components/privacyPolicy/Content";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Privacy Policy | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies Limited",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Content */}
      <Content />

      <Footer />
    </div>
  );
}
