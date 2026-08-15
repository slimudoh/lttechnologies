"use client";

import { Code2, Cloud, BarChart3, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Introduction() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              What We Do
            </p>

            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              Technology built around your business.
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              We don't believe in building technology simply for the sake of
              technology. Every solution we create starts with understanding the
              business problem, the people using the system and the outcome the
              organization needs.
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Our work combines thoughtful product design, modern software
              engineering and scalable infrastructure to create solutions that
              can grow with your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <Code2 className="mb-5 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2  text-xl font-bold text-gray-900">
                  Custom Development
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Software designed specifically around your requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-cyan-50 shadow-sm">
              <CardContent className="p-6">
                <Cloud className="mb-5 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2  text-xl font-bold text-gray-900">
                  Cloud Solutions
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Infrastructure designed for reliability and scale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-amber-50 shadow-sm">
              <CardContent className="p-6">
                <BarChart3 className="mb-5 h-8 w-8 text-amber-600" />
                <h3 className="mb-2  text-xl font-bold text-gray-900">
                  Automation
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Reduce manual work and improve business efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <ShieldCheck className="mb-5 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2  text-xl font-bold text-gray-900">
                  Secure Systems
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Security considered throughout the development process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
