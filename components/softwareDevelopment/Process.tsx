"use client";

const developmentProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, existing systems, challenges and desired outcomes before writing code.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the product scope, architecture, technology stack, user experience and delivery roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive interfaces and technical designs that balance usability, performance and scalability.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our development team turns the approved designs into reliable, production-ready software.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We validate functionality, performance, security and reliability before your application goes live.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We deploy your solution and can continue supporting, maintaining and improving it as your business grows.",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Our Process
          </p>

          <h2 className="text-4xl font-serif font-black text-gray-900 mb-5">
            A clear path from idea to impact.
          </h2>

          <p className="text-lg text-gray-600">
            We keep the process collaborative and transparent, so you always
            know what we're building, why we're building it and what's next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentProcess.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
