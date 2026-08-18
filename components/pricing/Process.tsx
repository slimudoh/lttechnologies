"use client";

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            From Idea to Investment
          </h2>
          <p className="text-lg text-gray-600 ">
            A straightforward process designed to give you clarity before
            development begins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              title: "Discovery",
              description:
                "We understand your business, users, goals, and technical requirements.",
            },
            {
              number: "02",
              title: "Proposal",
              description:
                "You receive a clear scope, timeline, deliverables, and project estimate.",
            },
            {
              number: "03",
              title: "Development",
              description:
                "Our team designs, develops, tests, and iterates on your solution.",
            },
            {
              number: "04",
              title: "Launch & Support",
              description:
                "We deploy your product and can continue supporting and improving it.",
            },
          ].map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
                {step.number}
              </div>
              <h3 className="text-xl  font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
