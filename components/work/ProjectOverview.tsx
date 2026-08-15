"use client";

export default function ProjectOverview({ project }: { project: any }) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
          Project Overview
        </p>
        <h2 className="text-4xl  font-bold text-gray-900 mb-4">
          Building a better digital experience.
        </h2>
        <p className="text-lg leading-8 text-gray-600">{project.description}</p>
      </div>
    </section>
  );
}
