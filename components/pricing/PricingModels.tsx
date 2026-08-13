"use client";

import { CheckCircle, ArrowRight, Code2, Users, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const pricingModels = [
  {
    title: "Project-Based",
    description:
      "Best for businesses that have a clearly defined software project with specific requirements and deliverables.",
    icon: Code2,
    price: "From ₦500K",
    priceLabel: "Typical starting point",
    features: [
      "Defined project scope",
      "Clear deliverables",
      "Milestone-based development",
      "UI/UX implementation",
      "Testing and quality assurance",
      "Deployment support",
    ],
    popular: false,
    cta: "Discuss Your Project",
  },
  {
    title: "Dedicated Development",
    description:
      "Get a dedicated developer or development team working continuously on your product or business requirements.",
    icon: Users,
    price: "From ₦750K",
    priceLabel: "Per month",
    features: [
      "Dedicated developer or team",
      "Ongoing development",
      "Priority communication",
      "Agile development process",
      "Regular progress reports",
      "Flexible workload",
    ],
    popular: true,
    cta: "Build Your Team",
  },
  {
    title: "Enterprise",
    description:
      "For organizations requiring complex platforms, integrations, automation, cloud infrastructure, or long-term technology partnerships.",
    icon: Rocket,
    price: "Custom",
    priceLabel: "Based on requirements",
    features: [
      "Enterprise architecture",
      "Scalable infrastructure",
      "Advanced integrations",
      "Security and compliance",
      "Dedicated technical team",
      "Long-term support",
    ],
    popular: false,
    cta: "Talk to an Expert",
  },
];

export default function PricingModels() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
            Choose How You Want to Work With Us
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Whether you need a complete application, additional engineering
            capacity, or a long-term technology partner, we have an engagement
            model that can work for you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingModels.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.title}
                className={`relative border-2 ${plan.popular ? "border-cyan-600 shadow-xl" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white hover:bg-amber-500 px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pt-8">
                  <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-cyan-600" />
                  </div>
                  <CardTitle className="text-3xl font-serif font-bold text-gray-900">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="font-sans text-base leading-relaxed min-h-[72px]">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-5">
                    <div className="text-4xl font-serif font-black text-cyan-600">
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-500 font-sans mt-1">
                      {plan.priceLabel}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-7">
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 font-sans text-gray-700"
                        >
                          <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full py-3 ${plan.popular ? "bg-cyan-600 hover:bg-cyan-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                    >
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
