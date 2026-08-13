import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Capabilities from "@/components/softwareDevelopment/Capabilities";
import Process from "@/components/softwareDevelopment/Process";
import Technology from "@/components/softwareDevelopment/Technology";

export const metadata: Metadata = {
  title: "Custom Software Development | LT Technologies",
  description:
    "Custom software development services for businesses that need reliable web applications, enterprise systems, SaaS products, APIs and digital platforms.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
                <Code2 className="h-4 w-4" />
                Custom Software Development
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 leading-tight mb-6">
                Software built around{" "}
                <span className="text-cyan-600">your business.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                We design and build reliable software solutions around the way
                your business actually works — from customer-facing applications
                and internal platforms to SaaS products and enterprise systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 bg-transparent"
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

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-4">
            More Than Just Development
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-6">
            We solve business problems with technology.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Good software is not simply about writing code. It should make
            processes easier, help people work better, reduce unnecessary costs
            and create better experiences for your customers. We work with you
            to understand the problem first, then design and build the right
            technology solution.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <Capabilities />

      {/* What We Can Build */}
      <Technology />

      {/* Process */}
      <Process />

      {/* Why LT Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
              Why LT Technologies
            </p>

            <h2 className="text-4xl font-serif font-black text-gray-900 mb-5">
              Technology that works for your business.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Code2 className="h-10 w-10 text-cyan-600 mb-5" />

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Business-Focused
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We don't build technology for technology's sake. Every
                  solution starts with understanding the business problem and
                  the outcome you want.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <ShieldCheck className="h-10 w-10 text-cyan-600 mb-5" />

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Built to Last
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We prioritize clean architecture, maintainability, security
                  and scalability so your software can evolve as your business
                  grows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-cyan-600 mb-5" />

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Long-Term Partnership
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Our relationship doesn't have to end when your application
                  launches. We can continue to maintain, improve and scale your
                  technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">
            Need More Than Software Development?
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            We can also help with the infrastructure, AI, integrations and
            digital platforms that support your software.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/cloud-devops">
              <Button variant="outline" className="bg-white">
                Cloud & DevOps
              </Button>
            </Link>

            <Link href="/services/ai-machine-learning">
              <Button variant="outline" className="bg-white">
                AI & Machine Learning
              </Button>
            </Link>

            <Link href="/services/mobile-development">
              <Button variant="outline" className="bg-white">
                Mobile Development
              </Button>
            </Link>

            <Link href="/services/systems-integration">
              <Button variant="outline" className="bg-white">
                Systems Integration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-5">
            Have a software idea?
          </h2>

          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Tell us what you're trying to build, improve or solve. We'll help
            you determine the right technology approach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg bg-transparent"
              >
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
