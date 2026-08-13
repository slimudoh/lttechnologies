"use client";

import { Clock, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactMethods() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-5">
                <Mail className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Send us your project requirements or questions and we'll get
                back to you.
              </p>
              <a
                href="mailto:hello@lttechnologies.com"
                className="text-cyan-600 font-medium hover:text-cyan-700"
              >
                hello@lttechnologies.com
              </a>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-5">
                <Phone className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Prefer to speak with someone directly? Give us a call to discuss
                your needs.
              </p>
              <a
                href="tel:+2340000000000"
                className="text-cyan-600 font-medium hover:text-cyan-700"
              >
                +234 XXX XXX XXXX
              </a>
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-5">
                <Clock className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Response Time
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We typically respond to new project enquiries within one
                business day.
              </p>
              <span className="text-gray-900 font-medium">Monday – Friday</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
