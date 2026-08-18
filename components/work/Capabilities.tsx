"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  Code2,
  Cloud,
  Smartphone,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Business applications and software platforms designed around your unique processes.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description:
      "Fast, scalable and responsive web applications built for real-world users.",
  },
  {
    icon: Smartphone,
    title: "Digital Products",
    description:
      "Customer-facing platforms and digital experiences that make your business easier to use.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deployment, infrastructure and cloud architecture designed for reliability and growth.",
  },
  {
    icon: BarChart3,
    title: "Business Automation",
    description:
      "Technology solutions that eliminate repetitive processes and improve operational efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Systems",
    description:
      "Authentication, authorization and security practices built into applications from the ground up.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4  text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Capabilities
          </p>

          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            More than software development.
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We bring together product thinking, engineering, infrastructure and
            automation to deliver complete technology solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <Card
                key={capability.title}
                className="border border-gray-100 shadow-sm transition-shadow "
              >
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <h3 className="mb-3  text-xl font-bold text-gray-900">
                    {capability.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-600">
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
