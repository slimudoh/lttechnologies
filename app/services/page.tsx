import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Rocket } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Services } from "@/components/services/Services";
import { Capabilities } from "@/components/services/Capabilities";
import { Process } from "@/components/services/Process";

export const metadata: Metadata = {
  title: "Services | LT Technologies",
  description:
    "LT Technologies helps businesses build digital products, automate operations, grow online, and keep their technology running reliably.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-24 md:py-28">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700 mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              Technology for modern businesses
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-gray-900 mb-6">
              Technology That Helps Your Business{" "}
              <span className="text-cyan-600">Move Forward.</span>
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              From building digital products to automating operations and
              growing your online presence, we provide the technology and
              expertise your business needs to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
                  className="px-8 border-gray-300 hover:border-cyan-600 hover:text-cyan-600"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Capabilities */}
      <Capabilities />

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                Why LT Technologies
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-6">
                We don't just build technology. We solve problems.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Good technology should make your business better. That's why we
                focus on understanding the problem first, choosing the right
                solution, and building something that delivers lasting value.
              </p>

              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Business-first thinking",
                  description:
                    "We focus on your business objectives rather than building technology for technology's sake.",
                },
                {
                  title: "Modern technology",
                  description:
                    "We use current tools and engineering practices to build maintainable and scalable solutions.",
                },
                {
                  title: "Practical solutions",
                  description:
                    "We recommend technology that makes sense for your budget, users, operations, and growth plans.",
                },
                {
                  title: "Long-term partnership",
                  description:
                    "Our relationship doesn't have to end when your project launches. We can continue supporting and improving it.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-5 rounded-2xl bg-gray-50"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <Process />

      {/* CTA */}
      <section className="py-24 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="h-10 w-10 text-white/80 mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-5">
            Have a project in mind?
          </h2>

          <p className="text-xl text-cyan-100 leading-relaxed mb-9">
            Tell us what you're trying to build, improve, or automate. We'll
            help you figure out the best way forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-6 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
