"use client";

import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SubTitle title="Custom Software Development" />

            <PageTitle
              darkTitle="Software built around"
              coloredTitle="your business"
            />

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              We design and build reliable software solutions around the way
              your business actually works — from customer-facing applications
              and internal platforms to SaaS products and enterprise systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

          <div className="relative">
            <div className="rounded-2xl bg-gray-900 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="text-gray-500">
                  // Building software for your business
                </div>

                <div>
                  <span className="text-cyan-400">const</span>{" "}
                  <span className="text-white">solution</span> ={" "}
                  <span className="text-amber-300">await</span>{" "}
                  <span className="text-green-400">build</span>
                  {"("}
                </div>

                <div className="pl-6 text-gray-300">
                  business:{" "}
                  <span className="text-amber-300">
                    &quot;your-business&quot;
                  </span>
                  ,
                </div>

                <div className="pl-6 text-gray-300">
                  scalable: <span className="text-cyan-400">true</span>,
                </div>

                <div className="pl-6 text-gray-300">
                  secure: <span className="text-cyan-400">true</span>,
                </div>

                <div className="pl-6 text-gray-300">
                  futureReady: <span className="text-cyan-400">true</span>,
                </div>

                <div>);</div>

                <div className="pt-4 text-green-400">✓ Ready for growth</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-white rounded-xl shadow-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-cyan-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Built for reliability
                </p>
                <p className="text-xs text-gray-500">
                  Secure & scalable architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
