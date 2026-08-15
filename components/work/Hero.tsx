"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <SubTitle title="Our Work" />

          <PageTitle
            darkTitle="We Build Technology That"
            coloredTitle="Moves Businesses Forward."
          />

          <p className="max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            From custom software and web applications to cloud infrastructure
            and business automation, we turn complex business challenges into
            practical digital solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
