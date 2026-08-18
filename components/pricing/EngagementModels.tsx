"use client";

import { CheckCircle, Code2, RefreshCw, Users, Rocket } from "lucide-react";
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

const engagementModels = [
  {
    title: "Fixed Project",
    description:
      "Ideal when you have a defined business need, project scope, and expected deliverables.",
    icon: Code2,
    price: "Custom Quote",
    priceLabel: "Based on scope and requirements",
    features: [
      "Business websites",
      "Web & mobile applications",
      "Custom business software",
      "AI implementations",
      "Defined project scope",
      "Testing and deployment",
    ],
    popular: false,
    cta: "Discuss Your Project",
  },
  {
    title: "Monthly Partnership",
    description:
      "Ongoing technology and digital support for businesses that need continuous improvement and reliable expertise.",
    icon: RefreshCw,
    price: "Monthly",
    priceLabel: "Based on services and workload",
    features: [
      "Website maintenance",
      "Application support",
      "SEO & content",
      "Social media support",
      "AI & workflow automation",
      "Performance monitoring",
    ],
    popular: true,
    cta: "Start a Partnership",
  },
  {
    title: "Dedicated Development",
    description:
      "Add experienced development capacity to your business with a dedicated developer or development team.",
    icon: Users,
    price: "From ₦750K",
    priceLabel: "Per month",
    features: [
      "Dedicated developer or team",
      "Ongoing software development",
      "Priority communication",
      "Agile development process",
      "Regular progress updates",
      "Flexible workload",
    ],
    popular: false,
    cta: "Build Your Team",
  },
  {
    title: "Enterprise",
    description:
      "For organizations requiring complex platforms, integrations, automation, infrastructure, security, or long-term technology partnerships.",
    icon: Rocket,
    price: "Custom",
    priceLabel: "Based on requirements",
    features: [
      "Enterprise architecture",
      "Scalable infrastructure",
      "Advanced integrations",
      "AI & business automation",
      "Security and compliance",
      "Long-term technology support",
    ],
    popular: false,
    cta: "Talk to an Expert",
  },
];

export default function EngagementModels() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Flexible Engagement
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible Ways to Work With Us
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you need a one-time project, ongoing digital support,
            additional development capacity, or a long-term technology partner,
            we can structure our services around your business needs.
          </p>
        </div>

        {/* Engagement Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {engagementModels.map((plan) => {
            const Icon = plan.icon;

            return (
              <Card
                key={plan.title}
                className={`relative border-2 ${
                  plan.popular
                    ? "border-cyan-600 shadow-xl"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white hover:bg-amber-500 px-4 py-1">
                    Most Flexible
                  </Badge>
                )}

                <CardHeader className="text-center pt-8">
                  <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <CardTitle className="text-lg font-bold text-gray-900">
                    {plan.title}
                  </CardTitle>

                  <CardDescription className="text-sm leading-relaxed min-h-[96px]">
                    {plan.description}
                  </CardDescription>

                  <div className="pt-5">
                    <div className="text-2xl font-black text-cyan-600">
                      {plan.price}
                    </div>

                    <div className="text-sm text-gray-500 mt-1">
                      {plan.priceLabel}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-7">
                  <div>
                    <h4 className="font-bold text-md text-gray-900 mb-4">
                      What's Included
                    </h4>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-gray-700 text-xs"
                        >
                          <CheckCircle className="h-3 w-3 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full py-3 cursor-pointer ${
                        plan.popular
                          ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Every business is different. Final pricing depends on project
            complexity, scope, required integrations, timeline, and level of
            ongoing support. Contact us for a tailored proposal.
          </p>
        </div>
      </div>
    </section>
  );
}
