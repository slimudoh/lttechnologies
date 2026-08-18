"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ShieldCheck,
  Gauge,
  ServerCog,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl  font-bold text-gray-900 mb-4">
          Technology Should Support Your Business, Not Slow It Down
        </h2>

        <p className="text-xl text-gray-600  leading-relaxed">
          Software requires continuous attention after it is launched.
          Dependencies need updates, security threats evolve, infrastructure
          needs monitoring, and business requirements change. Our managed
          technology services provide ongoing technical support so your team can
          focus on running the business.
        </p>
      </div>
    </section>
  );
}
