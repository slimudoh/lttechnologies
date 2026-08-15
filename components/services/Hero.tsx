"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SubTitle title="Technology for modern businesses" />

          <PageTitle
            darkTitle="Technology That Helps Your Business"
            coloredTitle="Move Forward"
          />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            From building digital products to automating operations and growing
            your online presence, we provide the technology and expertise your
            business needs to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
              >
                Start a Project
              </Button>
            </Link>

            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
