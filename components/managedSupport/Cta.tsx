"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl  font-black text-white mb-6">
          Need Someone to Look After Your Technology?
        </h2>

        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Let LT Technologies handle the ongoing technical work while you focus
          on growing your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
            >
              Get Started
            </Button>
          </Link>

          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-cyan-600 sm:w-auto rounded-full cursor-pointer"
            >
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
