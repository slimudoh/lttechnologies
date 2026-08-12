import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { PricingModels } from "@/components/pricing/PricingModels";
import { PricingServices } from "@/components/pricing/PricingServices";
import { ProjectFactors } from "@/components/pricing/ProjectFactors";

export const metadata: Metadata = {
  title: {
    default: "Pricing | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
  description:
    "Explore flexible software development, cloud, AI, consulting, and dedicated development pricing from LT Technologies.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-5 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
              Flexible Engagement Models
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-cyan-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
              Every business and software project is different. We offer
              flexible engagement models designed around your requirements,
              budget, timeline, and long-term goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8"
                >
                  Get a Project Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/consultation">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-gray-300"
                >
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PricingModels */}
      <PricingModels />

      {/* Services & Starting Prices */}
      <PricingServices />

      {/* How We Price */}
      <ProjectFactors />
      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              From Idea to Investment
            </h2>
            <p className="text-lg text-gray-600 font-sans">
              A straightforward process designed to give you clarity before
              development begins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We understand your business, users, goals, and technical requirements.",
              },
              {
                number: "02",
                title: "Proposal",
                description:
                  "You receive a clear scope, timeline, deliverables, and project estimate.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Our team designs, develops, tests, and iterates on your solution.",
              },
              {
                number: "04",
                title: "Launch & Support",
                description:
                  "We deploy your product and can continue supporting and improving it.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Pricing FAQs
            </h2>
            <p className="text-lg text-gray-600 font-sans">
              A few things you may want to know before starting.
            </p>
          </div>
          <div className="space-y-5">
            {[
              {
                question: "Do you have fixed prices for software projects?",
                answer:
                  "We provide starting prices for common services, but most software projects are quoted based on their specific requirements. This ensures you only pay for what your business actually needs.",
              },
              {
                question: "How do you determine the final project cost?",
                answer:
                  "We review your requirements, features, integrations, design needs, technical architecture, timeline, and other project factors before preparing a detailed proposal.",
              },
              {
                question: "Can I hire a developer on a monthly basis?",
                answer:
                  "Yes. Our dedicated development model allows you to engage individual developers or a development team on a monthly basis for ongoing product development.",
              },
              {
                question: "Do you require a deposit before starting?",
                answer:
                  "Project payment terms depend on the engagement. For project-based work, payments are typically structured around agreed milestones so that both parties have clear expectations throughout development.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes. We offer maintenance and support engagements covering bug fixes, updates, monitoring, performance improvements, security updates, and ongoing development.",
              },
              {
                question: "Can you work with an existing development team?",
                answer:
                  "Absolutely. We can integrate with your existing team and provide additional frontend, backend, DevOps, cloud, AI, or full-stack engineering capacity.",
              },
            ].map((faq) => (
              <Card key={faq.question} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-5">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans max-w-2xl mx-auto">
            Tell us what you're building. We'll help you understand the
            approach, timeline, and investment required to bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg bg-transparent"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
