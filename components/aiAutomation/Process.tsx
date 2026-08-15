"use client";

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Our AI & Automation Process
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            From identifying an opportunity to deploying and improving your
            solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              number: "1",
              title: "Discover",
              description:
                "Understand your business, processes, challenges, and opportunities for AI and automation.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Develop a practical solution and determine the technologies and integrations required.",
            },
            {
              number: "3",
              title: "Build",
              description:
                "Develop, integrate, test, and deploy your AI-powered solution.",
            },
            {
              number: "4",
              title: "Optimize",
              description:
                "Monitor performance and continuously improve the solution as your business evolves.",
            },
          ].map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl  font-black">
                {step.number}
              </div>

              <h3 className="text-lg  font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
