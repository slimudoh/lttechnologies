"use client";

import { CheckCircle } from "lucide-react";

export default function ProjectResults({ project }: { project: any }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            The Outcome
          </p>
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            What we delivered.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {project?.results?.map((result: string) => (
            <div
              key={result}
              className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-cyan-600" />
              <p className="leading-7 text-gray-700">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
