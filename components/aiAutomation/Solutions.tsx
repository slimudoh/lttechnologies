"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot,
  CheckCircle,
  MessageSquare,
  Workflow,
  BrainCircuit,
  Zap,
  BarChart3,
} from "lucide-react";

export default function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-gray-900 mb-4">
            Practical AI for Your Business
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            We help businesses identify where AI can create real value and build
            solutions that fit naturally into existing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Assistants */}
          <Card className="border-0 shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-cyan-600" />
              </div>

              <CardTitle className="text-xl  font-bold">
                AI Assistants
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 font-sans text-center mb-4">
                Build intelligent assistants that help employees and customers
                find information, complete tasks, and get answers faster.
              </p>

              <ul className="space-y-2 font-sans text-gray-600 text-sm">
                {[
                  "Internal AI assistants",
                  "Knowledge assistants",
                  "Document-based AI",
                  "Business productivity assistants",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AI Chatbots */}
          <Card className="border-0 shadow-lg  transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-cyan-600" />
              </div>

              <CardTitle className="text-xl  font-bold">AI Chatbots</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 font-sans text-center mb-4">
                Give your customers instant, intelligent support through
                AI-powered conversational experiences.
              </p>

              <ul className="space-y-2 font-sans text-gray-600 text-sm">
                {[
                  "Customer support chatbots",
                  "Website AI chat",
                  "Lead qualification",
                  "FAQ automation",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Workflow Automation */}
          <Card className="border-0 shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-cyan-600" />
              </div>

              <CardTitle className="text-xl  font-bold">
                Workflow Automation
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 font-sans text-center mb-4">
                Automate repetitive business processes so your team can focus on
                higher-value work.
              </p>

              <ul className="space-y-2 font-sans text-gray-600 text-sm">
                {[
                  "Business process automation",
                  "Automated notifications",
                  "Approval workflows",
                  "Data processing",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AI Integration */}
          <Card className="border-0 shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="h-8 w-8 text-cyan-600" />
              </div>

              <CardTitle className="text-xl  font-bold">
                AI Integration
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 font-sans text-center mb-4">
                Add AI capabilities to the software and systems your business
                already uses.
              </p>

              <ul className="space-y-2 font-sans text-gray-600 text-sm">
                {[
                  "AI API integration",
                  "Existing software integration",
                  "AI-powered features",
                  "Third-party AI services",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Intelligent Data */}
          <Card className="border-0 shadow-lg  transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-cyan-600" />
              </div>

              <CardTitle className="text-xl  font-bold">
                Intelligent Data
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 font-sans text-center mb-4">
                Turn business data into useful insights that support faster and
                better decision-making.
              </p>

              <ul className="space-y-2 font-sans text-gray-600 text-sm">
                {[
                  "Data analysis",
                  "AI-powered reporting",
                  "Document analysis",
                  "Business insights",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AI Optimization */}
          <Card className="border-0 shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-cyan-600" />
              </div>

              <CardTitle className="text-xl  font-bold">
                AI Optimization
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 font-sans text-center mb-4">
                Improve existing business processes by identifying where
                intelligent automation can save time and reduce costs.
              </p>

              <ul className="space-y-2 font-sans text-gray-600 text-sm">
                {[
                  "Process assessment",
                  "Automation opportunities",
                  "Productivity improvements",
                  "Continuous optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
