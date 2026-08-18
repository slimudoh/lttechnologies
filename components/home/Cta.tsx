"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-cyan-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-4xl md:text-5xl  font-black text-white mb-6">
          Have an idea, problem, or business process to improve?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
          Tell us what you're trying to achieve. We'll help you determine
          whether you need a new product, an improvement to an existing system,
          or a smarter way to work.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/consultation">
            <Button
              size="lg"
              className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
            >
              Book a Consultation
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-cyan-600 sm:w-auto rounded-full cursor-pointer"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
