"use client";

import { CheckCircle } from "lucide-react";

export default function WhatWeCan() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Support for the Technology You Already Use
          </h2>

          <p className="text-lg text-gray-600 font-sans">
            We can work with existing systems or technology we have built for
            you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Websites",
            "Web Applications",
            "Mobile Apps",
            "APIs",
            "SaaS Platforms",
            "Cloud Infrastructure",
            "Databases",
            "Business Systems",
            "Payment Systems",
            "Third-Party Integrations",
            "Internal Tools",
            "Digital Platforms",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 border border-gray-200 rounded-lg p-4"
            >
              <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
              <span className="text-sm font-sans text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
