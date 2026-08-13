"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-600">
            What Drives Us
          </p>
          <h2 className="mb-5 text-4xl font-black tracking-tight text-slate-900">
            Building technology with purpose.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Technology should solve real problems. Our approach is focused on
            creating solutions that are practical, scalable, and valuable to the
            businesses using them.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-0 shadow-sm">
            <CardHeader className="p-8 pb-4">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Target className="h-7 w-7 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-base leading-7 text-slate-600">
                To help businesses use technology more effectively by delivering
                reliable software, automation, and digital solutions that solve
                real business problems.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardHeader className="p-8 pb-4">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Lightbulb className="h-7 w-7 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-base leading-7 text-slate-600">
                To become a trusted technology partner for businesses looking to
                build, improve, and automate the way they operate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
