import { Footer } from "@/components/Footer";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Capabilities } from "@/components/home/Capabilities";
import { Faq } from "@/components/home/Faq";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Code2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Home | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-400" /> Technology that
              moves your business forward
            </div>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build better.
              <span className="block text-cyan-400">
                Grow faster. Automate smarter.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              LT Technologies helps businesses build modern digital products,
              strengthen their online presence, and use AI and automation to
              work smarter.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-white px-7 text-base font-semibold text-slate-950 hover:bg-slate-200 sm:w-auto"
                >
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-white/20 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
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

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                About LT Technologies
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Technology should solve problems, not create them.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-600">
                We help businesses turn ideas and challenges into practical
                digital solutions. Whether you need a new website, a custom
                application, a mobile product, AI automation, or ongoing
                technical support, we combine technology with a clear
                understanding of your business goals.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our goal is simple: build technology that is useful,
                maintainable, scalable, and capable of creating measurable value
                for your business.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center font-semibold text-slate-950 hover:text-cyan-600"
              >
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <Capabilities />

      {/* Process */}
      <Process />

      {/* Existing Applications / Support */}
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
                  maintain, fix, improve, modernize, and extend it. From bug
                  fixes and content updates to new features and performance
                  improvements, we can become your ongoing technology partner.
                </p>
                <Link href="/services/managed-support">
                  <Button className="mt-7 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
                    Get Application Support
                    <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* FAQ */}
      <Faq />

      {/* Final CTA */}
      <section className="bg-cyan-600 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Let's Build Something
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Have an idea, problem, or business process to improve?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
            Tell us what you're trying to achieve. We'll help you determine
            whether you need a new product, an improvement to an existing
            system, or a smarter way to work.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/consultation">
              <Button
                size="lg"
                className="w-full rounded-full bg-white px-8 text-base font-semibold text-cyan-700 hover:bg-slate-100 sm:w-auto"
              >
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-cyan-700 sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
