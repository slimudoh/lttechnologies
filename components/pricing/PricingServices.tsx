"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Cloud,
  BrainCircuit,
  Users,
  Settings,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Business websites, web applications, portals, dashboards, APIs, and complete business management systems.",
    price: "From ₦500K",
  },
  {
    icon: Users,
    title: "Dedicated Development",
    description:
      "Extend your team with experienced frontend, backend, full-stack, or specialized developers.",
    price: "From ₦750K/month",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, deployment, CI/CD, server configuration, monitoring, optimization, and infrastructure automation.",
    price: "From ₦300K",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "AI-powered applications, business automation, intelligent workflows, integrations, and data-driven solutions.",
    price: "From ₦1M",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Keep your existing applications secure, updated, monitored, optimized, and running reliably.",
    price: "From ₦150K/month",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology selection, technical assessments, project planning, and engineering guidance.",
    price: "From ₦100K",
  },
];

export default function PricingServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Our Services & Starting Prices
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            These starting prices provide an indication of our typical
            engagement ranges. Your final quote depends on the scope and
            complexity of your requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-0 shadow-md transition-shadow"
              >
                <CardContent className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-cyan-600" />
                    </div>
                    <span className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-xl  font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
