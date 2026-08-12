"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Users,
  Code2,
  Cloud,
  Bot,
  Smartphone,
} from "lucide-react";
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
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    preferredContact: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-xl w-full text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-cyan-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
              Message Received
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Thank you for reaching out to LT Technologies. We've received your
              message and a member of our team will get back to you as soon as
              possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white">
                  Back to Homepage
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-4">
            Contact LT Technologies
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
            Let's Build Something <span className="text-cyan-600">Great</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have an idea, business challenge, or software project in mind? Tell
            us what you're looking to build and we'll help you determine the
            right technology, approach, and next steps.
          </p>
        </div>
      </section>
      {/* Contact Methods */}
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
                  Prefer to speak with someone directly? Give us a call to
                  discuss your needs.
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
                <span className="text-gray-900 font-medium">
                  Monday – Friday
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="w-full">
              <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
                Start a Conversation
              </p>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're starting from scratch, improving an existing
                application, automating a business process, or looking for
                ongoing technical support, we'd like to hear about it.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      Discuss Your Requirements
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Share your idea, business challenge, or existing
                      application with us.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      Speak With Our Team
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We'll discuss your goals and recommend an approach that
                      fits your project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 mb-1">
                      Get a Clear Plan
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We'll help define the scope, technology, timeline, and
                      next steps for your project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 bg-white border border-gray-100 rounded-xl">
                <h3 className="font-serif font-bold text-gray-900 mb-2">
                  Not sure what you need?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  That's completely fine. Tell us about the problem you're
                  trying to solve and we'll help you identify the right
                  solution.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700"
                >
                  Explore our services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Technology Solutions for Growing Businesses
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From your first idea to a production-ready platform, we help
              businesses use technology to build, improve, and automate their
              operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <Code2 className="h-8 w-8 text-cyan-600 mb-5" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Custom Software
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Scalable software solutions designed around your business
                  processes and requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <Smartphone className="h-8 w-8 text-cyan-600 mb-5" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Web & Mobile
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Modern web and mobile applications built for performance,
                  usability, and growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <Bot className="h-8 w-8 text-cyan-600 mb-5" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  AI & Automation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automate repetitive processes and use AI to improve
                  productivity, customer experiences, and decision-making.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <Cloud className="h-8 w-8 text-cyan-600 mb-5" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Cloud & DevOps
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Reliable cloud infrastructure, deployment pipelines, and
                  scalable application architecture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cyan-600 font-semibold uppercase tracking-wider text-sm mb-3">
              What Happens Next
            </p>
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              A Simple Way to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We keep the first conversation straightforward. You don't need to
              have every technical detail figured out before contacting us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
                01
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                Tell Us What You Need
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share your idea, business challenge, current system, or project
                requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
                02
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                We Discuss the Solution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We'll ask the right questions, understand your objectives, and
                identify the best technical approach.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto mb-5 font-bold">
                03
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                Plan the Next Step
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once we understand the project, we'll define the scope,
                timeline, deliverables, and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
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
                  Yes. We work with startups, growing businesses, and
                  established organisations. We can help turn an early idea into
                  an MVP or improve an existing product.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Can you work with our existing development team?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. We can work alongside your internal developers
                  when you need additional expertise, architecture support,
                  specialised development, or extra delivery capacity.
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

      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-5">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us what you're trying to build. We'll help you turn the idea
            into a practical technology solution.
          </p>
          <a href="#contact-form">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
