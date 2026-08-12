import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Consultation | LT Technologies Limited",
    template: "%s | LT Technologies",
  },
  description:
    "Talk to LT Technologies about your software, AI automation, digital growth, or technology needs.",
};
export default function ConsultationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 mb-4">
              Let's Work Together
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Let's Build Something <span className="text-cyan-600">Great</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-sans">
              Have an idea, a business challenge, or an existing system that
              needs improvement? Tell us what you're working on and we'll help
              you identify the right technology solution.
            </p>
          </div>
        </div>
      </section>
      {/* Main Consultation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-serif font-bold text-gray-900">
                  Tell Us About Your Project
                </CardTitle>
                <p className="text-gray-600 font-sans leading-relaxed">
                  Complete the form and our team will get back to you to discuss
                  your requirements and determine the best way forward.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Business</Label>
                    <Input placeholder="Your company or business name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input type="text" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input type="text" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">
                      What can we help you with? *
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-app-development">
                          Web & App Development
                        </SelectItem>
                        <SelectItem value="ai-automation">
                          AI & Automation
                        </SelectItem>
                        <SelectItem value="digital-growth">
                          Digital Growth
                        </SelectItem>
                        <SelectItem value="managed-technology">
                          Managed Technology
                        </SelectItem>
                        <SelectItem value="technology-consulting">
                          Technology Consulting
                        </SelectItem>
                        <SelectItem value="other">Something Else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectStage">
                      Where are you with the project?
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select project stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">I have an idea</SelectItem>
                        <SelectItem value="planning">
                          Planning the project
                        </SelectItem>
                        <SelectItem value="development">
                          Already in development
                        </SelectItem>
                        <SelectItem value="existing">
                          I have an existing system
                        </SelectItem>
                        <SelectItem value="improvement">
                          I need to improve an existing system
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">
                          Under ₦1 million
                        </SelectItem>
                        <SelectItem value="1m-5m">
                          ₦1 million – ₦5 million
                        </SelectItem>
                        <SelectItem value="5m-10m">
                          ₦5 million – ₦10 million
                        </SelectItem>
                        <SelectItem value="10m-plus">₦10 million+</SelectItem>
                        <SelectItem value="not-sure">
                          I'm not sure yet
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Tell us about your project *
                    </Label>
                    <Textarea
                      placeholder="Describe what you want to build, the problem you're trying to solve, or the improvements you need..."
                      rows={6}
                      className="min-h-[200px]"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="terms" />
                    <Label
                      htmlFor="terms"
                      className="text-sm text-gray-600 leading-relaxed block pt-0 mt-0"
                    >
                      I agree to the
                      <Link
                        href="/privacy"
                        className="text-cyan-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      and consent to LT Technologies contacting me about my
                      enquiry.
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg"
                  >
                    Send Project Enquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* Information */}
            <div className="space-y-8">
              {/* What Happens Next */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">
                        We Review Your Request
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We'll review your requirements and learn more about the
                        problem you're trying to solve.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">
                        We Schedule a Discussion
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We'll arrange a convenient time to discuss your
                        requirements, goals, timeline, and priorities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">
                        We Recommend a Solution
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Based on your needs, we'll recommend an approach,
                        technology stack, scope, and potential next steps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-gray-900 mb-1">
                        We Build & Deliver
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Once we agree on the scope, our team turns the plan into
                        a reliable, scalable solution.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Services */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    What We Can Help With
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Web Applications",
                      "Mobile Applications",
                      "Business Software",
                      "AI Solutions",
                      "Process Automation",
                      "API Development",
                      "Cloud Solutions",
                      "System Modernisation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-cyan-600 shrink-0" />
                        <span className="font-sans text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {/* Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">
                        Email
                      </p>
                      <p className="text-gray-600 font-sans">
                        hello@lttechnologies.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">
                        Phone
                      </p>
                      <p className="text-gray-600 font-sans">
                        +234 XXX XXX XXXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">
                        Location
                      </p>
                      <p className="text-gray-600 font-sans"> Nigeria </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-gray-900">
                        Response Time
                      </p>
                      <p className="text-gray-600 font-sans">
                        Usually within one business day
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
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
                  No. You can come to us with an idea, a business problem, or
                  even an existing application that needs improvement. We can
                  help define the requirements and technical approach.
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
                  product or integrated with an existing web platform and
                  backend.
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
                  Yes. If your project involves confidential business
                  information or a proprietary product idea, we can discuss
                  appropriate confidentiality arrangements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">
            Have an Idea? Let's Talk.
          </h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Whether you're starting from scratch or improving an existing
            system, we're ready to help you turn your technology goals into
            reality.
          </p>
          <Link href="#consultation-form">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
