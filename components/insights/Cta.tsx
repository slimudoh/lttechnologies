"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-cyan-600 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl  font-bold text-white mb-6">
          Have a technology challenge?
        </h2>
        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Tell us what you're trying to achieve. We'll help you determine the
          right technology solution for your business.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
            >
              Start a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
