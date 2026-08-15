"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SubTitle title="AI & Automation" />

            <PageTitle darkTitle="AI &" coloredTitle="Automation" />

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Use artificial intelligence and intelligent automation to reduce
              repetitive work, improve customer experiences, and help your
              business operate more efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
                >
                  Discuss Your Idea
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/insights/ai-automation.jpg"
              alt="AI and business automation"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
