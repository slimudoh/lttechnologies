"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Faq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-5">
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Do you work with startups?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. We work with startups, growing businesses, and established
                organisations. We can help turn an early idea into an MVP or
                improve an existing product.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Can you work with our existing development team?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. We can work alongside your internal developers when
                you need additional expertise, architecture support, specialised
                development, or extra delivery capacity.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Can you improve an existing application?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. We can review an existing application, identify technical
                or performance issues, improve its architecture, add new
                functionality, or help modernise the technology stack.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. Depending on the project, we can provide ongoing
                maintenance, monitoring, improvements, security updates, and
                technical support after launch.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                What if I don't know the technology I need?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                That's not a problem. You don't need to know whether you need
                Next.js, Node.js, cloud infrastructure, AI, or another
                technology. Tell us what you want to achieve and we'll help
                determine the appropriate solution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
