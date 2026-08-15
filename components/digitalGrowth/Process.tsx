"use client";

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, competitors and current digital presence.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We develop a practical digital growth strategy based on your goals and available resources.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We create content, optimize channels and launch campaigns designed to reach your audience.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "We monitor performance, identify opportunities and continuously improve your digital results.",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Approach
          </p>

          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            How We Drive Digital Growth
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            We combine strategy, execution and continuous improvement to create
            a digital growth system around your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step) => (
            <div key={step.number} className="relative">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 text-xl font-bold">
                {step.number}
              </div>

              <h3 className="text-xl  font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
