"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-4">
          More Than Marketing
        </p>

        <h2 className="text-4xl  font-bold text-gray-900 mb-4">
          Your Digital Presence Should Drive Business
        </h2>

        <p className="text-lg md:text-xl text-gray-600  leading-relaxed">
          A website alone is not enough. Your business needs to be visible,
          discoverable and relevant to the people you want to reach. We bring
          together strategy, content, search, social media and analytics to
          create a digital presence that supports your business objectives.
        </p>
      </div>
    </section>
  );
}
