"use client";

import { Code2, Cloud, Bot, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
            Technology Solutions for Growing Businesses
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From your first idea to a production-ready platform, we help
            businesses use technology to build, improve, and automate their
            operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <Code2 className="h-8 w-8 text-cyan-600 mb-5" />
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Custom Software
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scalable software solutions designed around your business
                processes and requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <Smartphone className="h-8 w-8 text-cyan-600 mb-5" />
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Web & Mobile
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Modern web and mobile applications built for performance,
                usability, and growth.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <Bot className="h-8 w-8 text-cyan-600 mb-5" />
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                AI & Automation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Automate repetitive processes and use AI to improve
                productivity, customer experiences, and decision-making.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <Cloud className="h-8 w-8 text-cyan-600 mb-5" />
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Cloud & DevOps
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reliable cloud infrastructure, deployment pipelines, and
                scalable application architecture.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
