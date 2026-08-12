import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Gauge,
  ServerCog,
  CloudCog,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function ManagedSupportPage() {
  const supportAreas = [
    {
      icon: Wrench,
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated, and performing reliably with ongoing technical maintenance.",
      features: [
        "Content and technical updates",
        "Dependency updates",
        "Bug fixes",
        "Website backups",
      ],
    },
    {
      icon: ServerCog,
      title: "Application Support",
      description:
        "Keep your business applications running smoothly with proactive monitoring, troubleshooting, and technical support.",
      features: [
        "Application monitoring",
        "Bug investigation",
        "Error resolution",
        "Ongoing improvements",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security & Updates",
      description:
        "Protect your digital systems with regular security updates, vulnerability monitoring, and best-practice security measures.",
      features: [
        "Security updates",
        "Vulnerability monitoring",
        "Access management",
        "Security best practices",
      ],
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Improve the speed, reliability, and efficiency of your websites and applications.",
      features: [
        "Performance monitoring",
        "Database optimization",
        "API optimization",
        "Page speed improvements",
      ],
    },
    {
      icon: CloudCog,
      title: "Cloud & Infrastructure Support",
      description:
        "Maintain the infrastructure your applications depend on with ongoing cloud and deployment support.",
      features: [
        "Cloud infrastructure support",
        "Deployment management",
        "Server configuration",
        "Infrastructure monitoring",
      ],
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description:
        "Get access to experienced developers when your team needs help solving technical problems or maintaining systems.",
      features: [
        "Technical troubleshooting",
        "Developer support",
        "System investigations",
        "Priority assistance",
      ],
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Stay Secure",
      description:
        "Keep your applications and infrastructure updated and protected against common security risks.",
    },
    {
      icon: Gauge,
      title: "Improve Performance",
      description:
        "Identify and resolve performance bottlenecks before they affect your customers.",
    },
    {
      icon: ServerCog,
      title: "Reduce Downtime",
      description:
        "Proactive monitoring and maintenance help keep your critical systems available and reliable.",
    },
    {
      icon: Headphones,
      title: "Technical Expertise",
      description:
        "Extend your team with experienced developers without the cost of maintaining a full-time technical support team.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Assess",
      description:
        "We review your existing websites, applications, infrastructure, dependencies, and technical risks.",
    },
    {
      number: "02",
      title: "Stabilize",
      description:
        "We address critical issues, security concerns, performance problems, and outstanding technical debt.",
    },
    {
      number: "03",
      title: "Maintain",
      description:
        "We continuously monitor, update, optimize, and maintain your technology environment.",
    },
    {
      number: "04",
      title: "Improve",
      description:
        "We identify opportunities to improve reliability, performance, security, and overall system quality.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">
                Managed Technology
              </Badge>

              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                Keep Your Technology{" "}
                <span className="text-cyan-600">Running</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                Keep your websites, applications, and digital infrastructure
                secure, updated, optimized, and reliable without needing to
                build and manage a full-time technical team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
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
                    <h3 className="font-serif font-bold text-gray-900">
                      Security
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Keep systems protected and up to date.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Gauge className="h-10 w-10 text-cyan-600 mb-5" />
                    <h3 className="font-serif font-bold text-gray-900">
                      Performance
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Keep applications fast and reliable.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <ServerCog className="h-10 w-10 text-cyan-600 mb-5" />
                    <h3 className="font-serif font-bold text-gray-900">
                      Reliability
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Reduce downtime and technical issues.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Headphones className="h-10 w-10 text-cyan-600 mb-5" />
                    <h3 className="font-serif font-bold text-gray-900">
                      Support
                    </h3>
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

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
            Technology Should Support Your Business, Not Slow It Down
          </h2>

          <p className="text-xl text-gray-600 font-sans leading-relaxed">
            Software requires continuous attention after it is launched.
            Dependencies need updates, security threats evolve, infrastructure
            needs monitoring, and business requirements change. Our managed
            technology services provide ongoing technical support so your team
            can focus on running the business.
          </p>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              What We Manage
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Practical ongoing technology support designed around your business
              and your existing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Card
                  key={area.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-cyan-600" />
                    </div>

                    <CardTitle className="text-xl font-serif font-bold text-gray-900">
                      {area.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 font-sans leading-relaxed mb-5">
                      {area.description}
                    </p>

                    <ul className="space-y-3">
                      {area.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-600 font-sans"
                        >
                          <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Managed Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-cyan-100 text-cyan-700 mb-4">
                Why Managed Technology?
              </Badge>

              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
                Your Technology Should Keep Getting Better
              </h2>

              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                Launching software is only the beginning. We provide the ongoing
                technical expertise required to keep your systems secure,
                stable, and ready for what comes next.
              </p>

              <Link href="/contact">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Discuss Your Support Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <Card
                    key={benefit.title}
                    className="border border-gray-100 shadow-md"
                  >
                    <CardContent className="p-6">
                      <Icon className="h-10 w-10 text-cyan-600 mb-4" />

                      <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>

                      <p className="text-sm text-gray-600 font-sans leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              How Our Managed Support Works
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A straightforward approach to keeping your technology healthy and
              reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-serif font-black">
                  {step.number}
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Support */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Support for the Technology You Already Use
            </h2>

            <p className="text-lg text-gray-600 font-sans">
              We can work with existing systems or technology we have built for
              you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Websites",
              "Web Applications",
              "Mobile Apps",
              "APIs",
              "SaaS Platforms",
              "Cloud Infrastructure",
              "Databases",
              "Business Systems",
              "Payment Systems",
              "Third-Party Integrations",
              "Internal Tools",
              "Digital Platforms",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 border border-gray-200 rounded-lg p-4"
              >
                <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <span className="text-sm font-sans text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-6">
            Need Someone to Look After Your Technology?
          </h2>

          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Let LT Technologies handle the ongoing technical work while you
            focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg bg-transparent"
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
