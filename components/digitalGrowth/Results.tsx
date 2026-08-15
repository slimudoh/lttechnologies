"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Users } from "lucide-react";

export default function Results() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            What We Aim to Improve
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every digital growth strategy should ultimately support measurable
            business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-10 pb-10">
              <Search className="h-10 w-10 text-cyan-600 mx-auto mb-5" />

              <h3 className="text-xl  font-bold text-gray-900 mb-2">
                Visibility
              </h3>

              <p className="text-gray-600">
                Help more potential customers discover your business online.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-10 pb-10">
              <Users className="h-10 w-10 text-amber-600 mx-auto mb-5" />

              <h3 className="text-xl  font-bold text-gray-900 mb-2">
                Engagement
              </h3>

              <p className="text-gray-600">
                Build stronger relationships with the people who interact with
                your brand.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-10 pb-10">
              <TrendingUp className="h-10 w-10 text-cyan-600 mx-auto mb-5" />

              <h3 className="text-xl  font-bold text-gray-900 mb-2">Growth</h3>

              <p className="text-gray-600">
                Convert digital attention into leads, customers and long-term
                business opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
