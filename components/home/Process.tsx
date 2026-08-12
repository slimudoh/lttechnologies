"use client";

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, your customers, your challenges, and what you want technology to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the right solution, technology, scope, timeline, and priorities before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team designs and develops your solution with a focus on performance, usability, security, and scalability.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "After launch, we can continue supporting, improving, automating, and scaling your digital product.",
  },
];

export function Process() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Our Process
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From idea to impact.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            A straightforward process designed to keep projects focused,
            transparent, and aligned with your goals.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {process.map((step) => (
            <div
              key={step.number}
              className="relative border-l border-white/10 pl-6"
            >
              <span className="text-sm font-bold text-cyan-400">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
