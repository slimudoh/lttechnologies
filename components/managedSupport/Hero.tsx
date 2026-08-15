"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Gauge, ServerCog, Headphones } from "lucide-react";
import Link from "next/link";
import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SubTitle title="Managed Technology" />

            <PageTitle
              darkTitle="Keep Your Technology"
              coloredTitle="Running"
            />

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Keep your websites, applications, and digital infrastructure
              secure, updated, optimized, and reliable without needing to build
              and manage a full-time technical team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-cyan-50 p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ShieldCheck className="h-10 w-10 text-cyan-600 mb-5" />
                  <h3 className=" font-bold text-gray-900">Security</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Keep systems protected and up to date.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Gauge className="h-10 w-10 text-cyan-600 mb-5" />
                  <h3 className=" font-bold text-gray-900">Performance</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Keep applications fast and reliable.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ServerCog className="h-10 w-10 text-cyan-600 mb-5" />
                  <h3 className=" font-bold text-gray-900">Reliability</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Reduce downtime and technical issues.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Headphones className="h-10 w-10 text-cyan-600 mb-5" />
                  <h3 className=" font-bold text-gray-900">Support</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Experienced technical support when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
