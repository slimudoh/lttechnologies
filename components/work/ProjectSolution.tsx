"use client";

import { Layers, Code2, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectSolution({ project }: { project: any }) {
  return (
    <section className="bg-gray-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The Solution
          </p>
          <h2 className="mb-5  text-4xl font-black text-white">
            Turning the idea into a product.
          </h2>
          <p className="text-lg leading-8 text-gray-400">
            We combined product design, application development, integrations
            and infrastructure to create the final solution.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {project?.solution?.map((item: string, index: number) => {
            const icons = [Layers, Code2, Zap, ShieldCheck, Code2, Layers];
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={item}
                className="border border-gray-800 bg-gray-800/50 shadow-none"
              >
                <CardContent className="p-7">
                  <Icon className="mb-5 h-7 w-7 text-cyan-400" />
                  <p className="leading-7 text-gray-300">{item}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
