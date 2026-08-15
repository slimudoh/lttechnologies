"use client";

import PageTitle from "@/components/PageTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <PageTitle darkTitle="Technology" coloredTitle="Insights" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Practical ideas on software, AI, automation, digital growth, and
            technology for modern businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
