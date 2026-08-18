"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl  font-black text-white mb-6">
          Ready to Put AI to Work?
        </h2>

        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Tell us about your business and we will help you identify
          opportunities where AI and automation can make a real difference.
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
