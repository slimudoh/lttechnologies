import type React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/contact/Hero";
import ContactMethods from "@/components/contact/ContactMethods";
import MainContact from "@/components/contact/MainContact";
import Services from "@/components/contact/Services";
import Process from "@/components/contact/Process";
import Faq from "@/components/contact/Faq";
import Cta from "@/components/contact/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact Us | LT Technologies Limited",
    template: "%s | LT Technologies",
  },
  description:
    "Talk to LT Technologies about your software, AI automation, digital growth, or technology needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <Hero />

      {/* Contact Methods */}
      <ContactMethods />

      {/* Main Contact Section */}
      <MainContact />

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <Cta />

      <Footer />
    </div>
  );
}
