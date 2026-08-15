"use client";

import {
  ArrowRight,
  Bot,
  Code2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-400" /> Technology that moves
            your business forward
          </div>

          <h1 className="text-5xl md:text-6xl  font-black  mb-6 text-white mt-4">
            Build better.
            <span className="block text-cyan-400">
              Grow faster. Automate smarter.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            LT Technologies helps businesses build modern digital products,
            strengthen their online presence, and use AI and automation to work
            smarter.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/consultation">
              <Button
                size="lg"
                className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
              >
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-transparent border border-slate-300 px-8 text-white hover:bg-slate-50 sm:w-auto rounded-full cursor-pointer"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
        {/* Hero capability cards */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Code2, title: "Build", text: "Web, mobile & software" },
            {
              icon: Bot,
              title: "Automate",
              text: "AI & intelligent workflows",
            },
            {
              icon: TrendingUp,
              title: "Grow",
              text: "Digital growth & content",
            },
            {
              icon: ShieldCheck,
              title: "Support",
              text: "Managed technology",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <Icon className="mb-4 h-6 w-6 text-cyan-400" />
                <h3 className="font-semibold text-white"> {item.title} </h3>
                <p className="mt-1 text-sm text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
