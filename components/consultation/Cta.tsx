"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl  font-bold text-white mb-6">
          Have an Idea? Let's Talk.
        </h2>
        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Whether you're starting from scratch or improving an existing system,
          we're ready to help you turn your technology goals into reality.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
