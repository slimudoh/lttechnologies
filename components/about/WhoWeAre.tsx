"use client";

import { Code2, Bot, TrendingUp, ShieldCheck } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
              Who We Are
            </p>
            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              A technology partner, not just a development company.
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-600">
              LT Technologies Limited is a technology company focused on helping
              businesses use software and digital technologies to operate
              better, serve customers more effectively, and create new
              opportunities for growth.
            </p>
            <p className="mb-6 text-lg leading-8 text-slate-600">
              We work with businesses that need more than someone to simply
              write code. We help understand the problem, define the right
              solution, build the technology, and provide the support needed to
              keep it working as the business evolves.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              Whether you need a professional website, a custom web application,
              an automated business process, or ongoing technical support, our
              goal is to make technology useful, reliable, and aligned with your
              business objectives.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <Code2 className="mb-4 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Build</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Websites, web applications, platforms, and digital products
                  built around your requirements.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <Bot className="mb-4 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Automate
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  AI and automation solutions that reduce repetitive work and
                  improve business processes.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <TrendingUp className="mb-4 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Grow</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Digital solutions that help businesses improve their presence
                  and reach more customers.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <ShieldCheck className="mb-4 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Support
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  Ongoing maintenance, improvements, troubleshooting, and
                  technical support after launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
