"use client";

import { CheckCircle } from "lucide-react";

export default function ProjectChallenge({ project }: { project: any }) {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              The Challenge
            </p>
            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              What needed to be solved?
            </h2>
          </div>
          <div className="space-y-5">
            {project?.challenge?.map((item: string) => (
              <div key={item} className="flex items-start gap-4">
                <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle className="h-4 w-4 text-cyan-600" />
                </div>
                <p className="text-lg leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
