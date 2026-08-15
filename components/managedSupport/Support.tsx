"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  ShieldCheck,
  Wrench,
  Gauge,
  ServerCog,
  CloudCog,
  Headphones,
} from "lucide-react";

const supportAreas = [
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing reliably with ongoing technical maintenance.",
    features: [
      "Content and technical updates",
      "Dependency updates",
      "Bug fixes",
      "Website backups",
    ],
  },
  {
    icon: ServerCog,
    title: "Application Support",
    description:
      "Keep your business applications running smoothly with proactive monitoring, troubleshooting, and technical support.",
    features: [
      "Application monitoring",
      "Bug investigation",
      "Error resolution",
      "Ongoing improvements",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Updates",
    description:
      "Protect your digital systems with regular security updates, vulnerability monitoring, and best-practice security measures.",
    features: [
      "Security updates",
      "Vulnerability monitoring",
      "Access management",
      "Security best practices",
    ],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Improve the speed, reliability, and efficiency of your websites and applications.",
    features: [
      "Performance monitoring",
      "Database optimization",
      "API optimization",
      "Page speed improvements",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud & Infrastructure Support",
    description:
      "Maintain the infrastructure your applications depend on with ongoing cloud and deployment support.",
    features: [
      "Cloud infrastructure support",
      "Deployment management",
      "Server configuration",
      "Infrastructure monitoring",
    ],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Get access to experienced developers when your team needs help solving technical problems or maintaining systems.",
    features: [
      "Technical troubleshooting",
      "Developer support",
      "System investigations",
      "Priority assistance",
    ],
  },
];

export default function Support() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            What We Manage
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Practical ongoing technology support designed around your business
            and your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Card
                key={area.title}
                className="border-0 shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <CardTitle className="text-xl  font-bold text-gray-900">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 font-sans leading-relaxed mb-5">
                    {area.description}
                  </p>

                  <ul className="space-y-3">
                    {area.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600 font-sans"
                      >
                        <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
