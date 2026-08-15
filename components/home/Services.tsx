"use client";

import { Bot, CheckCircle, Code2, ShieldCheck, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Web, Mobile & Software",
    description:
      "We design and build modern websites, web applications, mobile apps, SaaS platforms, dashboards, APIs, and custom business software.",
    href: "/services/software-development",
    features: [
      "Business websites",
      "Web applications",
      "Mobile applications",
      "Custom software",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Use AI and automation to reduce repetitive work, improve customer experiences, and help your business operate more efficiently.",
    href: "/services/ai-automation",
    features: [
      "AI assistants",
      "AI chatbots",
      "Workflow automation",
      "AI integrations",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description:
      "Build a stronger digital presence with content, SEO, social media, email marketing, and digital strategies designed to attract customers.",
    href: "/services/digital-growth",
    features: ["Content creation", "SEO", "Social media", "Email marketing"],
  },
  {
    icon: ShieldCheck,
    title: "Managed Technology",
    description:
      "Keep your website and applications secure, updated, optimized, and running reliably without needing a full-time technical team.",
    href: "/services/managed-support",
    features: [
      "Website maintenance",
      "Application support",
      "Security updates",
      "Performance optimization",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            What We Do
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Everything you need to build and grow digitally.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From building your first digital product to improving an existing
            application and automating your business, we provide technology
            solutions around the way your business actually works.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group border-slate-200 bg-white shadow-sm transition-all duration-300  hover:border-slate-300"
              >
                <CardHeader className="p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white transition-colors group-hover:bg-cyan-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Link
                      href={service.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-cyan-200 group-hover:text-cyan-600"
                    ></Link>
                  </div>
                  <CardTitle className="mt-6 text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-7 pb-7">
                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-cyan-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="mt-7 inline-flex items-center text-sm font-semibold text-slate-950 transition-colors hover:text-cyan-600"
                  >
                    Explore service
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
