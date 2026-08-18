import Footer from "@/components/Footer";
import Hero from "@/components/privacyPolicy/Hero";
import Content from "@/components/privacyPolicy/Content";

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
