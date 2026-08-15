"use client";

import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Do I need a detailed specification before contacting you?",
    answer:
      " No. You can come to us with an idea, a business problem, or even an existing application that needs improvement. We can help define the requirements and technical approach.",
  },
  {
    question: "Can you work with an existing application?",
    answer:
      "  Yes. We can review existing applications, identify technical issues, improve performance, add features, modernise the architecture, or take over ongoing development.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      " Yes. Mobile applications can be developed as part of a new product or integrated with an existing web platform and backend.",
  },
  {
    question: " How do you determine project cost?",
    answer:
      "Project pricing depends on the scope, complexity, technology, integrations, timeline, and ongoing support requirements. We discuss these factors before providing a proposal.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes. If your project involves confidential business information or a proprietary product idea, we can discuss appropriate confidentiality arrangements.",
  },
];

export default function Faq() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Consultation FAQs
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            A few things you may want to know before getting started.
          </p>
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
