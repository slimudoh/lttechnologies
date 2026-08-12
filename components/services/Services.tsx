"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "software-development",
    title: "Web, Mobile & Software",
    description:
      "We design and build modern digital products that help businesses operate more efficiently, serve customers better, and create new opportunities for growth.",
    icon: Code2,
    features: [
      "Business websites",
      "Web applications",
      "Mobile applications",
      "SaaS platforms",
      "Custom business software",
      "APIs & integrations",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "We help businesses use AI and automation to reduce repetitive work, improve customer experiences, and make everyday operations smarter and more efficient.",
    icon: Bot,
    features: [
      "AI assistants",
      "AI chatbots",
      "Workflow automation",
      "AI integrations",
      "Business process automation",
      "Intelligent data processing",
    ],
  },
  {
    slug: "digital-growth",
    title: "Digital Growth",
    description:
      "We help businesses build a stronger digital presence and reach more customers through content, SEO, social media, email marketing, and digital strategy.",
    icon: TrendingUp,
    features: [
      "Content creation",
      "Search engine optimization",
      "Social media",
      "Email marketing",
      "Digital strategy",
      "Analytics & reporting",
    ],
  },
  {
    slug: "managed-support",
    title: "Managed Technology",
    description:
      "We keep your websites, applications, and digital infrastructure secure, updated, optimized, and reliable so you can focus on running your business.",
    icon: ShieldCheck,
    features: [
      "Website maintenance",
      "Application support",
      "Security updates",
      "Performance optimization",
      "Cloud support",
      "Technical monitoring",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-4">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-5">
            Solutions designed around your business.
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're starting something new, improving an existing system,
            or looking for ways to work smarter, we can help you turn your goals
            into practical technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.slug}
                className="group border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <span className="text-sm font-semibold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-6">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-base md:text-lg leading-relaxed text-gray-600 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:border-cyan-600 hover:text-cyan-600"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
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
