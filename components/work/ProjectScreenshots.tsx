"use client";

import { Layers, Code2, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectScreenshots({ project }: { project: any }) {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Product Experience
          </p>
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Inside the product.
          </h2>
        </div>
        <div className="space-y-16">
          {project?.screenshots?.map((screenshot: any, index: number) => (
            <div
              key={screenshot.title}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div
                className={`relative aspect-video overflow-hidden rounded-2xl bg-gray-200 shadow-xl ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="mb-4 block  text-5xl font-black text-cyan-100">
                  0{index + 1}
                </span>
                <h3 className="mb-4  text-3xl font-bold text-gray-900">
                  {screenshot.title}
                </h3>
                <p className="text-lg leading-8 text-gray-600">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
