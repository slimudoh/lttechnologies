"use client";

import { CheckCircle, TrendingUp, Globe, Users, Megaphone } from "lucide-react";

export default function Why() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Why It Matters
            </p>

            <h2 className="text-4xl  font-bold text-gray-900 mb-4">
              Turn Digital Attention Into Real Opportunities
            </h2>

            <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
              Your customers are already searching, comparing and making
              decisions online. We help position your business where those
              decisions are happening.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    Stronger Online Presence
                  </h3>

                  <p className="text-gray-600 font-sans">
                    Make your business easier to discover and understand across
                    the digital channels that matter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    Reach The Right Audience
                  </h3>

                  <p className="text-gray-600 font-sans">
                    Focus your digital efforts on the people most likely to need
                    and value your products or services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-lg  font-bold text-gray-900 mb-1">
                    Sustainable Growth
                  </h3>

                  <p className="text-gray-600 font-sans">
                    Build digital systems and strategies that continue creating
                    opportunities rather than relying only on short-term
                    campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
            <Megaphone className="h-12 w-12 text-cyan-600 mb-6" />

            <h3 className="text-3xl  font-bold text-gray-900 mb-4">
              Everything Works Together
            </h3>

            <p className="text-gray-600 font-sans leading-relaxed mb-8">
              SEO brings people to your website. Content gives them a reason to
              stay. Social media expands your reach. Email keeps your audience
              engaged. Analytics tells you what is working.
            </p>

            <div className="space-y-4">
              {[
                "Strategy",
                "Content",
                "SEO",
                "Social Media",
                "Email Marketing",
                "Analytics",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-gray-200 pb-3"
                >
                  <span className="font-semibold text-gray-900">{item}</span>

                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
