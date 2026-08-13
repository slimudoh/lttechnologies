"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code2, ShieldCheck, TrendingUp } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
            What We Do
          </p>
          <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
            Technology services for modern businesses
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Whether you are starting from scratch or improving an existing
            system, we can help you identify and implement the right technology
            solution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Code2,
              title: "Web & App Development",
              description:
                "Professional websites, web applications, portals, dashboards, and custom business platforms.",
            },
            {
              icon: Bot,
              title: "AI & Automation",
              description:
                "AI-powered tools and automated workflows that help businesses reduce repetitive work.",
            },
            {
              icon: TrendingUp,
              title: "Digital Growth",
              description:
                "Digital solutions that improve your online presence, content, visibility, and customer reach.",
            },
            {
              icon: ShieldCheck,
              title: "Managed Technology",
              description:
                "Ongoing maintenance, troubleshooting, updates, monitoring, and technical support.",
            },
          ].map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="p-6 pb-3">
                  <Icon className="mb-4 h-8 w-8 text-cyan-600" />
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-sm leading-6 text-slate-600">
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
