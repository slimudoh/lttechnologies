import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Workflow,
  BrainCircuit,
  Zap,
  BarChart3,
  Settings,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function AiAutomationPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">
                AI & Automation
              </Badge>

              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                AI & <span className="text-cyan-600">Automation</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                Use artificial intelligence and intelligent automation to reduce
                repetitive work, improve customer experiences, and help your
                business operate more efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                  >
                    Discuss Your Idea
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/ai-automation.jpg"
                alt="AI and business automation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Practical AI for Your Business
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We help businesses identify where AI can create real value and
              build solutions that fit naturally into existing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Assistants */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
                  AI Chatbots
                </CardTitle>
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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
                  Workflow Automation
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Automate repetitive business processes so your team can focus
                  on higher-value work.
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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BrainCircuit className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
                  Intelligent Data
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Turn business data into useful insights that support faster
                  and better decision-making.
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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
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

      {/* Why AI & Automation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
                Automate More. Work Smarter.
              </h2>

              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                AI should not be added to your business simply because it is
                trending. We focus on practical applications that solve real
                business problems, improve productivity, and deliver measurable
                value.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Settings className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      Identify Opportunities
                    </h3>

                    <p className="text-gray-600 font-sans">
                      We examine your existing processes and identify areas
                      where AI and automation can have the greatest impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <BrainCircuit className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      Build the Right Solution
                    </h3>

                    <p className="text-gray-600 font-sans">
                      We design and develop AI solutions around your actual
                      business requirements and workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />

                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
                      Measure the Impact
                    </h3>

                    <p className="text-gray-600 font-sans">
                      We focus on practical outcomes such as reduced manual
                      work, faster processes, and better customer experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/ai-automation.jpg"
                alt="Business AI automation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our AI & Automation Process
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              From identifying an opportunity to deploying and improving your
              solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discover",
                description:
                  "Understand your business, processes, challenges, and opportunities for AI and automation.",
              },
              {
                number: "2",
                title: "Design",
                description:
                  "Develop a practical solution and determine the technologies and integrations required.",
              },
              {
                number: "3",
                title: "Build",
                description:
                  "Develop, integrate, test, and deploy your AI-powered solution.",
              },
              {
                number: "4",
                title: "Optimize",
                description:
                  "Monitor performance and continuously improve the solution as your business evolves.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                  {step.number}
                </div>

                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-6">
            Ready to Put AI to Work?
          </h2>

          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Tell us about your business and we will help you identify
            opportunities where AI and automation can make a real difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg bg-transparent"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
