"use client";

import { Button } from "../ui/button";

export default function Cta() {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl  font-bold text-white mb-6">
          Have a Project in Mind?
        </h2>

        <p className="mb-8 text-lg leading-8 text-cyan-50">
          Tell us what you're trying to build. We'll help you turn the idea into
          a practical technology solution.
        </p>
        <a href="/consultation">
          <Button
            size="lg"
            className="w-full bg-white px-8 text-cyan-600 hover:bg-slate-100 sm:w-auto rounded-full cursor-pointer"
          >
            Start a Conversation
          </Button>
        </a>
      </div>
    </section>
  );
}
