"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Process() {
  return (
    <section className="bg-gray-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4  text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              How We Work
            </p>

            <h2 className="mb-6  text-4xl font-black text-white">
              From idea to impact.
            </h2>

            <p className="text-lg leading-8 text-gray-300 mb-8">
              Every project is different, but our approach remains focused:
              understand the problem, design the right solution, build it
              properly and continuously improve it.
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
              >
                Discuss Your Project
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your business, users, challenges and desired outcomes.",
              },
              {
                number: "02",
                title: "Design",
                text: "We translate requirements into a practical product and technical strategy.",
              },
              {
                number: "03",
                title: "Build",
                text: "Our engineers develop, test and integrate the solution using modern technologies.",
              },
              {
                number: "04",
                title: "Launch & Grow",
                text: "We deploy, monitor and improve your solution as your business evolves.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex gap-5 border-b border-gray-700 pb-6 last:border-0"
              >
                <span className=" text-2xl font-black text-cyan-400">
                  {step.number}
                </span>

                <div>
                  <h3 className="mb-2  text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
