"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-black text-white mb-4">
          Have an Idea? Let's Talk.
        </h2>
        <p className="text-xl text-cyan-100 mb-8 font-sans">
          Whether you're starting from scratch or improving an existing system,
          we're ready to help you turn your technology goals into reality.
        </p>
        <Link href="#consultation-form">
          <Button
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
