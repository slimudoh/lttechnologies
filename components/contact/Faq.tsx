"use client";

import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, growing businesses, and established organisations. We can help turn an early idea into an MVP or improve an existing product.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      " Absolutely. We can work alongside your internal developers when you need additional expertise, architecture support, specialised development, or extra delivery capacity.",
  },
  {
    question: "Can you improve an existing application?",
    answer:
      "Yes. We can review an existing application, identify technical or performance issues, improve its architecture, add new functionality, or help modernise the technology stack.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Depending on the project, we can provide ongoing maintenance, monitoring, improvements, security updates, and technical support after launch.",
  },
  {
    question: "What if I don't know the technology I need?",
    answer:
      " That's not a problem. You don't need to know whether you need Next.js, Node.js, cloud infrastructure, AI, or another technology. Tell us what you want to achieve and we'll help determine the appropriate solution.",
  },
];

export default function Faq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            FAQ
          </p>
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-950">
                {faq.question}
                <span className="text-xl text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
