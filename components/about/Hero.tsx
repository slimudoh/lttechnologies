"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubTitle from "@/components/SubTitle";
import PageTitle from "@/components/PageTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SubTitle title="About LT Technologies" />

          <PageTitle
            darkTitle="Technology that helps"
            coloredTitle="businesses move forward."
          />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            LT Technologies helps businesses turn ideas, challenges, and
            opportunities into practical technology solutions. From websites and
            web applications to AI-powered automation and ongoing technology
            support, we build solutions designed around the way businesses
            actually work.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
              >
                Let's Work Together
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
