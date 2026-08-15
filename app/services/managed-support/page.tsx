import Footer from "@/components/Footer";
import Hero from "@/components/managedSupport/Hero";
import Introduction from "@/components/managedSupport/Introduction";
import Support from "@/components/managedSupport/Support";
import Why from "@/components/managedSupport/Why";
import HowItWorks from "@/components/managedSupport/HowItWorks";
import WhatWeCan from "@/components/managedSupport/WhatWeCan";
import Cta from "@/components/managedSupport/Cta";

export default function ManagedSupportPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Introduction */}
      <Introduction />

      {/* Support Areas */}
      <Support />

      {/* Why Managed Support */}
      <Why />

      {/* How It Works */}
      <HowItWorks />

      {/* What We Can Support */}
      <WhatWeCan />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
