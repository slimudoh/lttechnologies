"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SubTitle from "../SubTitle";

const projectFactors = [
  "Number and complexity of features",
  "UI/UX design requirements",
  "Number of platforms and integrations",
  "Backend and API complexity",
  "Third-party services",
  "Security and compliance requirements",
  "Cloud infrastructure",
  "Expected delivery timeline",
];

export default function ProjectFactors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SubTitle title="No One-Size-Fits-All Pricing" />
            <h2 className="text-4xl  font-bold text-gray-900 mb-6">
              Your Project Determines the Price
            </h2>
            <p className="text-lg text-gray-600  leading-relaxed mb-6">
              We don't believe in forcing every software project into a
              predefined package. A simple business website and a complex
              enterprise platform have very different requirements.
            </p>
            <p className="text-lg text-gray-600  leading-relaxed">
              That's why we first understand your business, define the
              requirements, and then provide a clear proposal with scope,
              timeline, deliverables, and pricing.
            </p>
            <Link href="/contact">
              <Button className="rounded-full bg-cyan-600 px-5 text-sm text-white shadow-lg shadow-cyan-600/10 hover:bg-cyan-500 cursor-pointer mt-8">
                Discuss Your Requirements
              </Button>
            </Link>
          </div>
          <Card className="border-0 shadow-xl bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl  font-bold text-gray-900">
                What Determines Your Project Cost?
              </CardTitle>
              <CardDescription className="">
                We consider several factors when preparing your proposal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-start gap-3 bg-white rounded-lg p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 ">{factor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
