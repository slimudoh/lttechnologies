"use client";

const faqs = [
  {
    question: "What type of projects do you build?",
    answer:
      "We build business websites, web applications, mobile applications, SaaS platforms, dashboards, portals, APIs, e-commerce solutions, and custom software tailored to specific business requirements.",
  },
  {
    question: "Can you improve an application that already exists?",
    answer:
      "Yes. You don't always need to build from scratch. We can take over an existing website or application, fix issues, add features, improve performance, modernize the technology, and provide ongoing maintenance.",
  },
  {
    question: "Can you add AI to my existing business or application?",
    answer:
      "Yes. We can identify practical opportunities for AI and automation within an existing business or application, such as customer support, content generation, document processing, internal workflows, data analysis, and intelligent assistants.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer ongoing technology support and maintenance for businesses that need someone to handle updates, bug fixes, security, performance improvements, content changes, and new features.",
  },
  {
    question: "How much does a website or application cost?",
    answer:
      "The cost depends on the scope, complexity, integrations, design requirements, and technology involved. After understanding your requirements, we provide a clear proposal based on the actual project rather than forcing every client into the same package.",
  },
];

export default function Faq() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
            Questions businesses ask us.
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
