import Link from "next/link";
import { Code2, Bot, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    slug: "software-development",
    title: "Web, Mobile & Software",
    description:
      "We design and build modern digital products that help businesses operate more efficiently, serve customers better, and create new opportunities for growth.",
    icon: Code2,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "We help businesses use AI and automation to reduce repetitive work, improve customer experiences, and make everyday operations smarter and more efficient.",
    icon: Bot,
  },
  {
    slug: "digital-growth",
    title: "Digital Growth",
    description:
      "We help businesses build a stronger digital presence and reach more customers through content, SEO, social media, email marketing, and digital strategy.",
    icon: TrendingUp,
  },
  {
    slug: "managed-support",
    title: "Managed Technology",
    description:
      "We keep your websites, applications, and digital infrastructure secure, updated, optimized, and reliable so you can focus on running your business.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Technology Solutions for Growing Businesses
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            From building digital products and automating business processes to
            growing your online presence and managing your technology, we help
            businesses use technology to work smarter and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full border border-gray-100 shadow-sm hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
                  <CardContent className="p-7 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5 group-hover:bg-cyan-600 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="inline-flex items-center text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Services */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
