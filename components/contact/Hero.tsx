"use client";

import SubTitle from "@/components/SubTitle";
import PageTitle from "@/components/PageTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SubTitle title="Contact LT Technologies" />

        <PageTitle darkTitle="Let's Build Something" coloredTitle="Great" />

        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          Have an idea, business challenge, or software project in mind? Tell us
          what you're looking to build and we'll help you determine the right
          technology, approach, and next steps.
        </p>
      </div>
    </section>
  );
}
