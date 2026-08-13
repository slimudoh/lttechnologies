"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, MessageSquare, Users } from "lucide-react";

export default function MainContact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="w-full">
            <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Start a Conversation
            </p>
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're starting from scratch, improving an existing
              application, automating a business process, or looking for ongoing
              technical support, we'd like to hear about it.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">
                    Discuss Your Requirements
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Share your idea, business challenge, or existing application
                    with us.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">
                    Speak With Our Team
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We'll discuss your goals and recommend an approach that fits
                    your project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">
                    Get a Clear Plan
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We'll help define the scope, technology, timeline, and next
                    steps for your project.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 p-6 bg-white border border-gray-100 rounded-xl">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Not sure what you need?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                That's completely fine. Tell us about the problem you're trying
                to solve and we'll help you identify the right solution.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700"
              >
                Explore our services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
