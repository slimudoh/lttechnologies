"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2, ShieldCheck, Users } from "lucide-react";

export default function Why() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Why LT Technologies
          </p>

          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Technology that works for your business.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <Code2 className="h-10 w-10 text-cyan-600 mb-5" />

              <h3 className="text-xl  font-bold text-gray-900 mb-3">
                Business-Focused
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We don't build technology for technology's sake. Every solution
                starts with understanding the business problem and the outcome
                you want.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <ShieldCheck className="h-10 w-10 text-cyan-600 mb-5" />

              <h3 className="text-xl  font-bold text-gray-900 mb-3">
                Built to Last
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We prioritize clean architecture, maintainability, security and
                scalability so your software can evolve as your business grows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <Users className="h-10 w-10 text-cyan-600 mb-5" />

              <h3 className="text-xl  font-bold text-gray-900 mb-3">
                Long-Term Partnership
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our relationship doesn't have to end when your application
                launches. We can continue to maintain, improve and scale your
                technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
