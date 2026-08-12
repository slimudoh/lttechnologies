"use client";

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, challenges, and objectives before recommending a solution.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the solution, scope, technology, priorities, and roadmap required to achieve your goals.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, develop, test, and refine your solution using modern engineering practices.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your solution and can continue supporting, optimizing, and improving it as your business grows.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-black mb-5">
            From idea to implementation.
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed">
            A clear, collaborative process keeps projects focused and ensures
            we're solving the right problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((step) => (
            <div key={step.number}>
              <div className="text-5xl font-serif font-black text-cyan-500 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-serif font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
