import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Cloud, BarChart3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { FeaturedProjects } from "@/components/work/FeaturedProjects";
import { MoreProjects } from "@/components/work/MoreProjects";
import { Capabilities } from "@/components/work/Capabilities";

export const metadata: Metadata = {
  title: {
    default: "Our Work | LT Technologies Limited | Build. Grow. Automate.",
    template: "%s | LT Technologies",
  },
};

export default function WorkPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-24 md:py-32">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-cyan-100 px-4 py-2 text-cyan-700 hover:bg-cyan-100">
              Our Work
            </Badge>

            <h1 className="mb-6 font-serif text-5xl font-black leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              We Build Technology That{" "}
              <span className="text-cyan-600">Moves Businesses Forward.</span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
              From custom software and web applications to cloud infrastructure
              and business automation, we turn complex business challenges into
              practical digital solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-cyan-600 px-8 py-6 text-base text-white hover:bg-cyan-700"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <a href="#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-300 px-8 py-6 text-base sm:w-auto"
                >
                  Explore Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                What We Do
              </p>

              <h2 className="mb-6 font-serif text-4xl font-black text-gray-900 md:text-5xl">
                Technology built around your business.
              </h2>

              <p className="mb-6 text-lg leading-8 text-gray-600">
                We don't believe in building technology simply for the sake of
                technology. Every solution we create starts with understanding
                the business problem, the people using the system and the
                outcome the organization needs.
              </p>

              <p className="text-lg leading-8 text-gray-600">
                Our work combines thoughtful product design, modern software
                engineering and scalable infrastructure to create solutions that
                can grow with your business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 bg-gray-50 shadow-sm">
                <CardContent className="p-6">
                  <Code2 className="mb-5 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
                    Custom Development
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    Software designed specifically around your requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-sm">
                <CardContent className="p-6">
                  <Cloud className="mb-5 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
                    Cloud Solutions
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    Infrastructure designed for reliability and scale.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-amber-50 shadow-sm">
                <CardContent className="p-6">
                  <BarChart3 className="mb-5 h-8 w-8 text-amber-600" />
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
                    Automation
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    Reduce manual work and improve business efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gray-50 shadow-sm">
                <CardContent className="p-6">
                  <ShieldCheck className="mb-5 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">
                    Secure Systems
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    Security considered throughout the development process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Selected Work
            </p>

            <h2 className="mb-5 font-serif text-4xl font-black text-gray-900 md:text-5xl">
              Solutions we've built.
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              A selection of digital products, business applications and
              technology solutions designed to solve real business problems.
            </p>
          </div>

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* More Projects */}
          <MoreProjects />
        </div>
      </section>

      {/* Capabilities */}
      <Capabilities />

      {/* Process */}
      <section className="bg-gray-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                How We Work
              </p>

              <h2 className="mb-6 font-serif text-4xl font-black text-white md:text-5xl">
                From idea to impact.
              </h2>

              <p className="text-lg leading-8 text-gray-300">
                Every project is different, but our approach remains focused:
                understand the problem, design the right solution, build it
                properly and continuously improve it.
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="mt-8 bg-cyan-600 px-8 text-white hover:bg-cyan-700"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "We understand your business, users, challenges and desired outcomes.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "We translate requirements into a practical product and technical strategy.",
                },
                {
                  number: "03",
                  title: "Build",
                  text: "Our engineers develop, test and integrate the solution using modern technologies.",
                },
                {
                  number: "04",
                  title: "Launch & Grow",
                  text: "We deploy, monitor and improve your solution as your business evolves.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 border-b border-gray-700 pb-6 last:border-0"
                >
                  <span className="font-serif text-2xl font-black text-cyan-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="mb-2 font-serif text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 font-serif text-4xl font-black text-white md:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mb-8 text-lg leading-8 text-cyan-100 md:text-xl">
            Tell us what you're trying to build, improve or automate. We'll help
            you determine the right technology approach.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-white px-8 py-6 text-base text-cyan-600 hover:bg-gray-100 sm:w-auto"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white bg-transparent px-8 py-6 text-base text-white hover:bg-white hover:text-cyan-600 sm:w-auto"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
