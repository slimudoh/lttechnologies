"use client";

import { CheckCircle } from "lucide-react";

export default function ProjectApproach({ project }: { project: any }) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Our Approach
            </p>
            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              Strategy before software.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Good software starts with understanding the problem. We focused on
              creating a solution that was practical for users while providing a
              strong technical foundation for future growth.
            </p>
          </div>
          <div className="space-y-6">
            {project?.approach?.map((item: string, index: number) => (
              <div
                key={item}
                className="flex gap-5 border-b border-gray-200 pb-6 last:border-0"
              >
                <span className=" text-2xl font-black text-cyan-600">
                  0{index + 1}
                </span>
                <p className="leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
