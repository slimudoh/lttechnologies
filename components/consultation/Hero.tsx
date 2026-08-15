"use client";

import SubTitle from "@/components/SubTitle";
import PageTitle from "../PageTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SubTitle title="Let's Work Together" />

          <PageTitle darkTitle="Let's Build Something" coloredTitle="Great" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Have an idea, a business challenge, or an existing system that needs
            improvement? Tell us what you're working on and we'll help you
            identify the right technology solution.
          </p>
        </div>
      </div>
    </section>
  );
}
