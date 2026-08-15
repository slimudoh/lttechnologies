"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RelatedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl  font-bold text-gray-900 mb-4">
          Need More Than Software Development?
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          We can also help with the infrastructure, AI, integrations and digital
          platforms that support your software.
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
  );
}
