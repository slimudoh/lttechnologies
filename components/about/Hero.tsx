"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            About LT Technologies
          </div>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Technology that helps{" "}
            <span className="text-cyan-600">businesses move forward.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            LT Technologies helps businesses turn ideas, challenges, and
            opportunities into practical technology solutions. From websites and
            web applications to AI-powered automation and ongoing technology
            support, we build solutions designed around the way businesses
            actually work.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto"
              >
                Let's Work Together
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
