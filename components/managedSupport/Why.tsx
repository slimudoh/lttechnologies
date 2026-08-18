"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Gauge, ServerCog, Headphones } from "lucide-react";
import Link from "next/link";
import SubTitle from "../SubTitle";

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
export default function Why() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SubTitle title="Why Managed Technology?" />

            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              Your Technology Should Keep Getting Better
            </h2>

            <p className="text-lg text-gray-600  leading-relaxed mb-8">
              Launching software is only the beginning. We provide the ongoing
              technical expertise required to keep your systems secure, stable,
              and ready for what comes next.
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-cyan-600 px-8 text-white hover:bg-cyan-700 sm:w-auto rounded-full cursor-pointer"
              >
                Discuss Your Support Needs
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

                    <h3 className="text-lg  font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-gray-600  leading-relaxed">
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
  );
}
