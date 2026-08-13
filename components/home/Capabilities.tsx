"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Layers3, LifeBuoy, Rocket, Workflow } from "lucide-react";

const capabilities = [
  "Responsive and modern interfaces",
  "Scalable application architecture",
  "Secure APIs and integrations",
  "Cloud deployment and infrastructure",
  "AI-powered business solutions",
  "Ongoing maintenance and support",
];

export default function Capabilities() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Why LT Technologies
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              More than a developer. A technology partner.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We don't just write code and hand over an application. We consider
              how the technology fits into your business, how it will grow, and
              what you will need after launch.
            </p>
            <div className="mt-8 space-y-4">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-cyan-600" />
                  <span className="text-slate-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <Layers3 className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-5 text-xl font-bold">Scalable Solutions</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We build with the future in mind so your technology can evolve
                  as your business grows.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm sm:mt-10">
              <CardContent className="p-7">
                <Rocket className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-5 text-xl font-bold"> Business Focused </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Every technical decision should ultimately support a business
                  objective.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <Workflow className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-5 text-xl font-bold"> Smart Automation </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We identify opportunities to remove repetitive work and
                  improve efficiency with automation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm sm:mt-10">
              <CardContent className="p-7">
                <LifeBuoy className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-5 text-xl font-bold">Long-term Support</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We can remain involved after launch to maintain and improve
                  your technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
