"use client";

const faqs = [
  {
    question: "Do you have fixed prices for software projects?",
    answer:
      "We provide starting prices for common services, but most software projects are quoted based on their specific requirements. This ensures you only pay for what your business actually needs.",
  },
  {
    question: "How do you determine the final project cost?",
    answer:
      "We review your requirements, features, integrations, design needs, technical architecture, timeline, and other project factors before preparing a detailed proposal.",
  },
  {
    question: "Can I hire a developer on a monthly basis?",
    answer:
      "Yes. Our dedicated development model allows you to engage individual developers or a development team on a monthly basis for ongoing product development.",
  },
  {
    question: "Do you require a deposit before starting?",
    answer:
      "Project payment terms depend on the engagement. For project-based work, payments are typically structured around agreed milestones so that both parties have clear expectations throughout development.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer maintenance and support engagements covering bug fixes, updates, monitoring, performance improvements, security updates, and ongoing development.",
  },
  {
    question: "Can you work with an existing development team?",
    answer:
      "Absolutely. We can integrate with your existing team and provide additional frontend, backend, DevOps, cloud, AI, or full-stack engineering capacity.",
  },
];

export default function Faq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Pricing FAQs
          </h2>
          <p className="text-lg text-gray-600 ">
            A few things you may want to know before starting.
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
