"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Let's Work Together
          </div>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Let's Build Something <span className="text-cyan-600">Great</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed font-sans">
            Have an idea, a business challenge, or an existing system that needs
            improvement? Tell us what you're working on and we'll help you
            identify the right technology solution.
          </p>
        </div>
      </div>
    </section>
  );
}
