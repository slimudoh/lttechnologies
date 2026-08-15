"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Why() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-4">
              Why LT Technologies
            </p>

            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              We don't just build technology. We solve problems.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Good technology should make your business better. That's why we
              focus on understanding the problem first, choosing the right
              solution, and building something that delivers lasting value.
            </p>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Business-first thinking",
                description:
                  "We focus on your business objectives rather than building technology for technology's sake.",
              },
              {
                title: "Modern technology",
                description:
                  "We use current tools and engineering practices to build maintainable and scalable solutions.",
              },
              {
                title: "Practical solutions",
                description:
                  "We recommend technology that makes sense for your budget, users, operations, and growth plans.",
              },
              {
                title: "Long-term partnership",
                description:
                  "Our relationship doesn't have to end when your project launches. We can continue supporting and improving it.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 p-5 rounded-2xl bg-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
