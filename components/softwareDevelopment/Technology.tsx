"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Cloud, Database, Gauge, ShieldCheck } from "lucide-react";

const technologyAreas = [
  "Frontend Applications",
  "Backend Systems",
  "REST & GraphQL APIs",
  "Database Architecture",
  "Authentication & Authorization",
  "Payment Integrations",
  "Third-Party Integrations",
  "Cloud Deployment",
  "CI/CD & DevOps",
  "Monitoring & Performance",
  "Security",
  "System Modernization",
];

export default function Technology() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
              Technology Solutions
            </p>

            <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
              From an idea to a production-ready platform.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're starting something new, replacing an outdated
              system or improving an existing application, we can help you move
              from concept to a dependable digital product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologyAreas.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg mt-8">
                <CardContent className="p-6">
                  <Cloud className="h-8 w-8 text-cyan-600 mb-4" />
                  <h3 className="font-serif font-bold text-gray-900 mb-2">
                    Cloud Ready
                  </h3>
                  <p className="text-sm text-gray-600">
                    Applications designed for modern infrastructure and scalable
                    deployment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <ShieldCheck className="h-8 w-8 text-cyan-600 mb-4" />
                  <h3 className="font-serif font-bold text-gray-900 mb-2">
                    Secure
                  </h3>
                  <p className="text-sm text-gray-600">
                    Security considered throughout architecture, development and
                    deployment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-cyan-600 mb-4" />
                  <h3 className="font-serif font-bold text-gray-900 mb-2">
                    Data Driven
                  </h3>
                  <p className="text-sm text-gray-600">
                    Structured data systems that support reporting, integrations
                    and informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg mt-8">
                <CardContent className="p-6">
                  <Gauge className="h-8 w-8 text-cyan-600 mb-4" />
                  <h3 className="font-serif font-bold text-gray-900 mb-2">
                    Performance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fast and optimized applications built with growth and
                    reliability in mind.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
