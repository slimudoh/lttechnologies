"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SubTitle title="Flexible Engagement Models" />

          <PageTitle darkTitle="Simple, Transparent" coloredTitle="Pricing" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Every business and software project is different. We offer flexible
            engagement models designed around your requirements, budget,
            timeline, and long-term goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
              >
                Get a Project Estimate
              </Button>
            </Link>
            <Link href="/consultation">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
