import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Code2,
  Bot,
  TrendingUp,
  ShieldCheck,
  Target,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Us | LT Technologies Limited",
    template: "%s | LT Technologies",
  },
  description:
    "Learn about LT Technologies Limited, a technology company helping businesses build digital products, automate processes, and grow through technology.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              About LT Technologies
            </div>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Technology that helps
              <span className="text-cyan-600">businesses move forward.</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              LT Technologies helps businesses turn ideas, challenges, and
              opportunities into practical technology solutions. From websites
              and web applications to AI-powered automation and ongoing
              technology support, we build solutions designed around the way
              businesses actually work.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto"
                >
                  Let's Work Together
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
                Who We Are
              </p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
                A technology partner, not just a development company.
              </h2>
              <p className="mb-6 text-lg leading-8 text-slate-600">
                LT Technologies Limited is a technology company focused on
                helping businesses use software and digital technologies to
                operate better, serve customers more effectively, and create new
                opportunities for growth.
              </p>
              <p className="mb-6 text-lg leading-8 text-slate-600">
                We work with businesses that need more than someone to simply
                write code. We help understand the problem, define the right
                solution, build the technology, and provide the support needed
                to keep it working as the business evolves.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                Whether you need a professional website, a custom web
                application, an automated business process, or ongoing technical
                support, our goal is to make technology useful, reliable, and
                aligned with your business objectives.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <Code2 className="mb-4 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Build
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Websites, web applications, platforms, and digital products
                    built around your requirements.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <Bot className="mb-4 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Automate
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    AI and automation solutions that reduce repetitive work and
                    improve business processes.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <TrendingUp className="mb-4 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Grow
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Digital solutions that help businesses improve their
                    presence and reach more customers.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <ShieldCheck className="mb-4 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Support
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Ongoing maintenance, improvements, troubleshooting, and
                    technical support after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
              What Drives Us
            </p>
            <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
              Building technology with purpose.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Technology should solve real problems. Our approach is focused on
              creating solutions that are practical, scalable, and valuable to
              the businesses using them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-sm">
              <CardHeader className="p-8 pb-4">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                  <Target className="h-7 w-7 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-base leading-7 text-slate-600">
                  To help businesses use technology more effectively by
                  delivering reliable software, automation, and digital
                  solutions that solve real business problems.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="p-8 pb-4">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                  <Lightbulb className="h-7 w-7 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-base leading-7 text-slate-600">
                  To become a trusted technology partner for businesses looking
                  to build, improve, and automate the way they operate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
              Our Values
            </p>
            <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
              How we work
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Good technology starts with good communication, clear thinking,
              and a commitment to delivering real value.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border border-slate-200 shadow-sm transition-shadow hover:shadow-lg">
              <CardHeader className="p-8 pb-4">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                  <Handshake className="h-7 w-7 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-7 text-slate-600">
                  We work collaboratively with our clients and treat their goals
                  as part of the project.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 shadow-sm transition-shadow hover:shadow-lg">
              <CardHeader className="p-8 pb-4">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                  <CheckCircle className="h-7 w-7 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Quality
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-7 text-slate-600">
                  We care about clean implementation, usability, reliability,
                  security, and maintainability.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-slate-200 shadow-sm transition-shadow hover:shadow-lg">
              <CardHeader className="p-8 pb-4">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                  <Users className="h-7 w-7 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Client Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-7 text-slate-600">
                  We focus on understanding the business behind the technology
                  so that the final solution delivers meaningful value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Our Approach */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
                Our Approach
              </p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
                From business problem to working solution.
              </h2>
              <p className="mb-8 text-lg leading-8 text-slate-600">
                We don't believe every business problem needs a complicated
                technology solution. We start by understanding what you are
                trying to achieve and then determine the most practical way to
                get there.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">
                      Understand
                    </h3>
                    <p className="text-slate-600">
                      We learn about your business, customers, challenges, and
                      objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">Plan</h3>
                    <p className="text-slate-600">
                      We define the solution, technology, scope, and priorities
                      before development begins.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">Build</h3>
                    <p className="text-slate-600">
                      We develop, test, and refine the solution with regular
                      communication throughout the project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                    4
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">
                      Support & Improve
                    </h3>
                    <p className="text-slate-600">
                      We can continue supporting, maintaining, and improving the
                      technology as your business grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl lg:p-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">
                Our Philosophy
              </p>
              <h3 className="mb-6 text-3xl font-black">
                Technology should make business simpler, not harder.
              </h3>
              <p className="mb-8 leading-8 text-slate-300">
                From a company's first website to a complex business platform,
                we believe technology should be understandable, maintainable,
                and built with the future in mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>Practical technology solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>Clear communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>Scalable architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>Long-term support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
              What We Do
            </p>
            <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
              Technology services for modern businesses
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Whether you are starting from scratch or improving an existing
              system, we can help you identify and implement the right
              technology solution.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Code2,
                title: "Web & App Development",
                description:
                  "Professional websites, web applications, portals, dashboards, and custom business platforms.",
              },
              {
                icon: Bot,
                title: "AI & Automation",
                description:
                  "AI-powered tools and automated workflows that help businesses reduce repetitive work.",
              },
              {
                icon: TrendingUp,
                title: "Digital Growth",
                description:
                  "Digital solutions that improve your online presence, content, visibility, and customer reach.",
              },
              {
                icon: ShieldCheck,
                title: "Managed Technology",
                description:
                  "Ongoing maintenance, troubleshooting, updates, monitoring, and technical support.",
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader className="p-6 pb-3">
                    <Icon className="mb-4 h-8 w-8 text-cyan-600" />
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-cyan-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-4xl font-black text-white">
            Have a technology challenge?
          </h2>
          <p className="mb-8 text-lg leading-8 text-cyan-50">
            Tell us what you are trying to build, improve, or automate. Let's
            explore how technology can help your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto"
              >
                Start a Conversation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-cyan-600 sm:w-auto"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
