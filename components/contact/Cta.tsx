"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-5">
          Have a Project in Mind?
        </h2>
        <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us what you're trying to build. We'll help you turn the idea into
          a practical technology solution.
        </p>
        <a href="#contact-form">
          <Button
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
}
