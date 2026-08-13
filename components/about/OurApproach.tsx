"use client";

import { CheckCircle } from "lucide-react";

export default function OurApproach() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
              Our Approach
            </p>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
              From business problem to working solution.
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              We don't believe every business problem needs a complicated
              technology solution. We start by understanding what you are trying
              to achieve and then determine the most practical way to get there.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Understand</h3>
                  <p className="text-slate-600">
                    We learn about your business, customers, challenges, and
                    objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Plan</h3>
                  <p className="text-slate-600">
                    We define the solution, technology, scope, and priorities
                    before development begins.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Build</h3>
                  <p className="text-slate-600">
                    We develop, test, and refine the solution with regular
                    communication throughout the project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">
                    Support & Improve
                  </h3>
                  <p className="text-slate-600">
                    We can continue supporting, maintaining, and improving the
                    technology as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl lg:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">
              Our Philosophy
            </p>
            <h3 className="mb-6 text-3xl font-black">
              Technology should make business simpler, not harder.
            </h3>
            <p className="mb-8 leading-8 text-slate-300">
              From a company's first website to a complex business platform, we
              believe technology should be understandable, maintainable, and
              built with the future in mind.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>Practical technology solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>Clear communication</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>Scalable architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>Long-term support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
