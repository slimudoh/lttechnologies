"use client";

import { BrainCircuit, Settings, TrendingUp } from "lucide-react";

export default function Automation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              Automate More. Work Smarter.
            </h2>

            <p className="text-lg text-gray-600  leading-relaxed mb-8">
              AI should not be added to your business simply because it is
              trending. We focus on practical applications that solve real
              business problems, improve productivity, and deliver measurable
              value.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Settings className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    Identify Opportunities
                  </h3>

                  <p className="text-gray-600 ">
                    We examine your existing processes and identify areas where
                    AI and automation can have the greatest impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BrainCircuit className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    Build the Right Solution
                  </h3>

                  <p className="text-gray-600 ">
                    We design and develop AI solutions around your actual
                    business requirements and workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    Measure the Impact
                  </h3>

                  <p className="text-gray-600 ">
                    We focus on practical outcomes such as reduced manual work,
                    faster processes, and better customer experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/images/ai-automation.jpg"
              alt="Business AI automation"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
