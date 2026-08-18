"use client";

import FeaturedProjects from "@/components/work/FeaturedProjects";
import MoreProjects from "@/components/work/MoreProjects";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4  text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Selected Work
          </p>

          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Solutions we've built.
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            A selection of digital products, business applications and
            technology solutions designed to solve real business problems.
          </p>
        </div>

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* More Projects */}
        <MoreProjects />
      </div>
    </section>
  );
}
