"use client";

import {
  Code2,
  Layers3,
  Database,
  Workflow,
  Gauge,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Modern, responsive and scalable web applications built around your business processes and customer needs.",
  },
  {
    icon: Layers3,
    title: "Enterprise Applications",
    description:
      "Secure business systems that help organizations manage operations, workflows, employees, customers and data.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences for iOS, Android and cross-platform environments that extend your business beyond the browser.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    description:
      "Reliable APIs and integrations that connect your applications, services and third-party platforms.",
  },
  {
    icon: Database,
    title: "Business Management Systems",
    description:
      "Custom platforms for managing processes such as customers, sales, operations, finance, inventory and reporting.",
  },
  {
    icon: Gauge,
    title: "SaaS Products",
    description:
      "Scalable software products designed for recurring revenue, multiple users, subscriptions and long-term growth.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            What We Build
          </p>

          <h2 className="text-4xl font-serif font-black text-gray-900 mb-5">
            Software for real-world business needs.
          </h2>

          <p className="text-lg text-gray-600">
            From a focused business application to a complete digital platform,
            we build technology that can grow with your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <CardTitle className="text-xl font-serif font-bold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
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
