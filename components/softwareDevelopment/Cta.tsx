"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl  font-black text-white mb-6">
          Have a software idea?
        </h2>

        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Tell us what you're trying to build, improve or solve. We'll help you
          determine the right technology approach.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
            >
              Discuss Your Project
            </Button>
          </Link>

          <Link href="/work">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-cyan-600 sm:w-auto rounded-full cursor-pointer"
            >
              See Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
