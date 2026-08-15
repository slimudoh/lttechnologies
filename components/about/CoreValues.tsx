"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Handshake, Lightbulb, Target, Users } from "lucide-react";

export default function CoreValues() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
            Our Values
          </p>
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            How we work
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Good technology starts with good communication, clear thinking, and
            a commitment to delivering real value.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="border border-slate-200 shadow-sm transition-shadow">
            <CardHeader className="p-8 pb-4">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Handshake className="h-7 w-7 text-cyan-600" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">
                Partnership
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="leading-7 text-slate-600">
                We work collaboratively with our clients and treat their goals
                as part of the project.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 shadow-sm transition-shadow">
            <CardHeader className="p-8 pb-4">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <CheckCircle className="h-7 w-7 text-cyan-600" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">
                Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="leading-7 text-slate-600">
                We care about clean implementation, usability, reliability,
                security, and maintainability.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 shadow-sm transition-shadow">
            <CardHeader className="p-8 pb-4">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Users className="h-7 w-7 text-cyan-600" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">
                Client Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="leading-7 text-slate-600">
                We focus on understanding the business behind the technology so
                that the final solution delivers meaningful value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
