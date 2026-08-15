"use client";

import Link from "next/link";

export default function Introduction() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              About LT Technologies
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Technology should solve problems, not create them.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              We help businesses turn ideas and challenges into practical
              digital solutions. Whether you need a new website, a custom
              application, a mobile product, AI automation, or ongoing technical
              support, we combine technology with a clear understanding of your
              business goals.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our goal is simple: build technology that is useful, maintainable,
              scalable, and capable of creating measurable value for your
              business.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center font-semibold text-slate-950 hover:text-cyan-600"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
