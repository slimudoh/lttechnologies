"use client";

import {
  Gauge,
  Globe,
  Search,
  Settings,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built around your business objectives.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Mobile experiences that help you connect with customers and employees wherever they are.",
  },
  {
    icon: Workflow,
    title: "Systems Integration",
    description:
      "Connect your applications, APIs, payment systems, and third-party platforms.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Improve application speed, reliability, scalability, and overall user experience.",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Improve your visibility online and use data to understand what is working.",
  },
  {
    icon: Settings,
    title: "Technical Support",
    description:
      "Ongoing technical assistance, maintenance, monitoring, and improvements.",
  },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-4">
            Our Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-5">
            The expertise behind our services.
          </h2>

          <p className="text-xl text-gray-600">
            We combine design, engineering, automation, marketing, and
            technology support to deliver complete digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <Card
                key={capability.title}
                className="border-0 shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                    {capability.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
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
