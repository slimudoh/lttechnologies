"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SubTitle title="Digital Growth" />

            <PageTitle
              darkTitle="Grow Your Business"
              coloredTitle="In The Digital World"
            />

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Build a stronger digital presence with content, SEO, social media,
              email marketing and digital strategies designed to attract the
              right audience and turn attention into business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
                >
                  Start Growing
                </Button>
              </Link>

              <Link href="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
                >
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-100 rounded-3xl blur-2xl opacity-50" />

            <Image
              src="/images/insights/digital-growth-strategy.jpg"
              alt="Digital growth strategy"
              width={600}
              height={400}
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
