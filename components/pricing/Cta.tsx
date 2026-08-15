"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl  font-bold text-white mb-6">
          Have a Project in Mind?
        </h2>
        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Tell us what you're building. We'll help you understand the approach,
          timeline, and investment required to bring it to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
            >
              Get a Free Estimate
            </Button>
          </Link>
          <Link href="/consultation">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-cyan-600 sm:w-auto rounded-full cursor-pointer"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
