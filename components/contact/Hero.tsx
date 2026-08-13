"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          Contact LT Technologies
        </div>

        <h1 className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
          Let's Build Something <span className="text-cyan-600">Great</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Have an idea, business challenge, or software project in mind? Tell us
          what you're looking to build and we'll help you determine the right
          technology, approach, and next steps.
        </p>
      </div>
    </section>
  );
}
