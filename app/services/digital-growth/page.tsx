import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  PenTool,
  Share2,
  Mail,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Globe,
  Users,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Growth | LT Technologies",
  description:
    "Grow your digital presence with content, SEO, social media, email marketing and digital strategies designed to attract and convert customers.",
};

export default function DigitalGrowthPage() {
  const growthServices = [
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "Create valuable, engaging content that communicates your brand clearly and gives your audience a reason to trust your business.",
      features: [
        "Website content",
        "Blog articles",
        "Marketing copy",
        "Social media content",
      ],
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Improve your visibility on search engines and help potential customers discover your business when they are looking for your services.",
      features: [
        "SEO audits",
        "Keyword research",
        "On-page optimization",
        "Technical SEO",
      ],
    },
    {
      icon: Share2,
      title: "Social Media",
      description:
        "Build a consistent social presence that increases brand awareness, engages your audience and supports your wider business goals.",
      features: [
        "Social media strategy",
        "Content planning",
        "Post creation",
        "Performance monitoring",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Turn your audience into long-term customers with targeted email campaigns, newsletters and automated communication.",
      features: [
        "Email campaigns",
        "Newsletter setup",
        "Email automation",
        "Audience segmentation",
      ],
    },
    {
      icon: BarChart3,
      title: "Digital Analytics",
      description:
        "Understand how people interact with your digital presence and use meaningful data to improve your marketing decisions.",
      features: [
        "Analytics setup",
        "Conversion tracking",
        "Performance reports",
        "Data-driven insights",
      ],
    },
    {
      icon: Target,
      title: "Digital Strategy",
      description:
        "Develop a practical digital strategy that connects your website, content, marketing channels and business objectives.",
      features: [
        "Digital strategy",
        "Audience research",
        "Campaign planning",
        "Growth roadmap",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your business, audience, competitors and current digital presence.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We develop a practical digital growth strategy based on your goals and available resources.",
    },
    {
      number: "03",
      title: "Execute",
      description:
        "We create content, optimize channels and launch campaigns designed to reach your audience.",
    },
    {
      number: "04",
      title: "Measure & Improve",
      description:
        "We monitor performance, identify opportunities and continuously improve your digital results.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-5 px-4 py-2">
                Digital Growth
              </Badge>

              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6 leading-tight">
                Grow Your Business{" "}
                <span className="text-cyan-600">In The Digital World</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed max-w-2xl">
                Build a stronger digital presence with content, SEO, social
                media, email marketing and digital strategies designed to
                attract the right audience and turn attention into business
                growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg"
                  >
                    Start Growing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                  >
                    See Our Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-100 rounded-3xl blur-2xl opacity-50" />

              <img
                src="/images/digital-growth.jpg"
                alt="Digital growth strategy"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-4">
            More Than Marketing
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-6">
            Your Digital Presence Should Drive Business
          </h2>

          <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
            A website alone is not enough. Your business needs to be visible,
            discoverable and relevant to the people you want to reach. We bring
            together strategy, content, search, social media and analytics to
            create a digital presence that supports your business objectives.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
              What We Do
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
              Digital Growth Services
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Practical digital services that help your business attract
              attention, build trust and generate opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-cyan-600" />
                    </div>

                    <CardTitle className="text-xl font-serif font-bold text-gray-900">
                      {service.title}
                    </CardTitle>

                    <p className="text-gray-600 font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600 font-sans"
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

      {/* Why Digital Growth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
                Why It Matters
              </p>

              <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-6">
                Turn Digital Attention Into Real Opportunities
              </h2>

              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                Your customers are already searching, comparing and making
                decisions online. We help position your business where those
                decisions are happening.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      Stronger Online Presence
                    </h3>

                    <p className="text-gray-600 font-sans">
                      Make your business easier to discover and understand
                      across the digital channels that matter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      Reach The Right Audience
                    </h3>

                    <p className="text-gray-600 font-sans">
                      Focus your digital efforts on the people most likely to
                      need and value your products or services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      Sustainable Growth
                    </h3>

                    <p className="text-gray-600 font-sans">
                      Build digital systems and strategies that continue
                      creating opportunities rather than relying only on
                      short-term campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
              <Megaphone className="h-12 w-12 text-cyan-600 mb-6" />

              <h3 className="text-3xl font-serif font-black text-gray-900 mb-4">
                Everything Works Together
              </h3>

              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                SEO brings people to your website. Content gives them a reason
                to stay. Social media expands your reach. Email keeps your
                audience engaged. Analytics tells you what is working.
              </p>

              <div className="space-y-4">
                {[
                  "Strategy",
                  "Content",
                  "SEO",
                  "Social Media",
                  "Email Marketing",
                  "Analytics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-gray-200 pb-3"
                  >
                    <span className="font-semibold text-gray-900">{item}</span>

                    <CheckCircle className="h-5 w-5 text-cyan-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Our Approach
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
              How We Drive Digital Growth
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We combine strategy, execution and continuous improvement to
              create a digital growth system around your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.number} className="relative">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 text-xl font-bold">
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

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
              What We Aim to Improve
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every digital growth strategy should ultimately support measurable
              business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-10 pb-10">
                <Search className="h-10 w-10 text-cyan-600 mx-auto mb-5" />

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Visibility
                </h3>

                <p className="text-gray-600">
                  Help more potential customers discover your business online.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-10 pb-10">
                <Users className="h-10 w-10 text-amber-600 mx-auto mb-5" />

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Engagement
                </h3>

                <p className="text-gray-600">
                  Build stronger relationships with the people who interact with
                  your brand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-10 pb-10">
                <TrendingUp className="h-10 w-10 text-cyan-600 mx-auto mb-5" />

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Growth
                </h3>

                <p className="text-gray-600">
                  Convert digital attention into leads, customers and long-term
                  business opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6">
            Ready to Grow Your Digital Presence?
          </h2>

          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Let's build a digital strategy that helps your business reach more
            people and create more opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Start a Conversation
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
