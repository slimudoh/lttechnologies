"use client";

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What Happens Next
          </p>
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            A Simple Way to Get Started
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We keep the first conversation straightforward. You don't need to
            have every technical detail figured out before contacting us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
              01
            </div>
            <h3 className="text-xl  font-bold text-gray-900 mb-3">
              Tell Us What You Need
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Share your idea, business challenge, current system, or project
              requirements.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
              02
            </div>
            <h3 className="text-xl  font-bold text-gray-900 mb-3">
              We Discuss the Solution
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We'll ask the right questions, understand your objectives, and
              identify the best technical approach.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
              03
            </div>
            <h3 className="text-xl  font-bold text-gray-900 mb-3">
              Plan the Next Step
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Once we understand the project, we'll define the scope, timeline,
              deliverables, and next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
