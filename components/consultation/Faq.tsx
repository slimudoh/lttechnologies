"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Faq() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">
            Consultation FAQs
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            A few things you may want to know before getting started.
          </p>
        </div>
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Do I need a detailed specification before contacting you?
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                No. You can come to us with an idea, a business problem, or even
                an existing application that needs improvement. We can help
                define the requirements and technical approach.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Can you work with an existing application?
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Yes. We can review existing applications, identify technical
                issues, improve performance, add features, modernise the
                architecture, or take over ongoing development.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Do you build mobile applications?
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Yes. Mobile applications can be developed as part of a new
                product or integrated with an existing web platform and backend.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                How do you determine project cost?
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Project pricing depends on the scope, complexity, technology,
                integrations, timeline, and ongoing support requirements. We
                discuss these factors before providing a proposal.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Can you sign an NDA?
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Yes. If your project involves confidential business information
                or a proprietary product idea, we can discuss appropriate
                confidentiality arrangements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
