"use client";

import PageTitle from "../PageTitle";
import SubTitle from "../SubTitle";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SubTitle title="Legal & Compliance" />

        <PageTitle darkTitle="Terms of" coloredTitle="Service" />

        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          These terms govern your use of the LT Technologies website and
          describe the terms applicable to our services and communications.
        </p>

        <p className="mt-6 text-sm text-gray-500 ">
          Last Updated: August 16, 2026
        </p>
      </div>
    </section>
  );
}
