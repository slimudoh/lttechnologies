"use client";

import { Layers, Code2, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function ProjectTechnology({ project }: { project: any }) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
          Technology
        </p>
        <h2 className="text-4xl  font-bold text-gray-900 mb-4">
          Built with modern technology.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-600">
          The technology stack was selected based on performance,
          maintainability, security and the long-term requirements of the
          product.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {project.technologies.map((technology: string) => (
            <Badge
              key={technology}
              variant="outline"
              className="px-5 py-2 text-sm"
            >
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
