"use client";

import Link from "next/link";
import { Code2, ShieldCheck, TrendingUp, Smartphone } from "lucide-react";
import { Button } from "../ui/button";

export default function Support() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Already Have an Application?
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                You don't always need to start from scratch.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                If you already have a website or application, we can help
                maintain, fix, improve, modernize, and extend it. From bug fixes
                and content updates to new features and performance
                improvements, we can become your ongoing technology partner.
              </p>
              <Link href="/services/managed-support">
                <Button className="mt-7 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800 cursor-pointer">
                  Get Application Support
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Bug Fixes",
                  text: "Resolve issues affecting your users.",
                },
                {
                  icon: Smartphone,
                  title: "New Features",
                  text: "Extend your application as your needs change.",
                },
                {
                  icon: TrendingUp,
                  title: "Performance",
                  text: "Improve speed, reliability and scalability.",
                },
                {
                  icon: Code2,
                  title: "Modernization",
                  text: "Upgrade outdated technology and architecture.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <Icon className="h-6 w-6 text-cyan-600" />
                    <h3 className="mt-4 font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
