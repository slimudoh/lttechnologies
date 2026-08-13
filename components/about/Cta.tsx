"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Cta() {
  return (
    <section className="bg-cyan-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-5 text-4xl font-black text-white">
          Have a technology challenge?
        </h2>
        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Tell us what you are trying to build, improve, or automate. Let's
          explore how technology can help your business.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto"
            >
              Start a Conversation
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-cyan-600 sm:w-auto"
            >
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
