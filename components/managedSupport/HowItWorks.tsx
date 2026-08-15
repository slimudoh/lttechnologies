"use client";

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "We review your existing websites, applications, infrastructure, dependencies, and technical risks.",
  },
  {
    number: "02",
    title: "Stabilize",
    description:
      "We address critical issues, security concerns, performance problems, and outstanding technical debt.",
  },
  {
    number: "03",
    title: "Maintain",
    description:
      "We continuously monitor, update, optimize, and maintain your technology environment.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We identify opportunities to improve reliability, performance, security, and overall system quality.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            How Our Managed Support Works
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            A straightforward approach to keeping your technology healthy and
            reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 text-xl  font-black">
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
