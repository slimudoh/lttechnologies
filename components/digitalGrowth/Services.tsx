"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  PenTool,
  Share2,
  Mail,
  BarChart3,
  Target,
  CheckCircle,
} from "lucide-react";

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

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
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
                className="border-0 shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <CardTitle className="text-xl  font-bold text-gray-900">
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
  );
}
